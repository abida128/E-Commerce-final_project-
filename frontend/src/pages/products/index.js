import MultiRangeSlider from "../../components/multiRange/multiRange";

import ProductCard from "../../components/productCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/profilepic/getAllProducts.action";
import SkeltonCard from "../../components/cardSkeleton";
import { GuardWrapper } from "../../layouts/GuardWrapper";

import UserLayout from "../../layouts/UserLayout";
import { axiosClient } from "../../configs/axios";

const Product = (props) => {
  const [selectedCat, setSelectedCat] = useState({
    name: "Mugs",
    id: "6549f4d2252d074692130b65",
  });
  const [allCategory, setAllCategory] = useState([]);

  console.log(allCategory, "all");

  useEffect(() => {
    // Make the API call when the component mounts
    axiosClient
      .get("/category/allCategories")
      .then((response) => {
        setAllCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount

  const [price, setPrice] = useState(null);

  const { isProductFetching, allProducts } = useSelector(
    (state) => state.getAllProductsSlicer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ category: selectedCat.id, ...price }));
  }, [selectedCat, dispatch, price]);

  return (
    <GuardWrapper {...props}>
      <div class="min-h-screen bg-[#F4F5F6] grid grid-cols-1 sm:grid-cols-4 py-10 px-[40px] tablet:px-[40px] md:px-[80px]">
        <div class="p-4 sm:col-span-1">
          <h1 className="text-[#415161] text-4xl font-poppins leading-5 font-bold">
            Filter by Price
          </h1>
          <div className="my-10">
            <MultiRangeSlider
              min={price ? price.minPrice : 0}
              max={price ? price.maxPrice : 1000}
              setPrice={setPrice}
              price={price}
            />
          </div>

          <h2 class="mt-10 font-thin  text-3xl sm:text-1.4rem text-[#415161">
            Categories
          </h2>

          <div className="mt-10">
            {allCategory?.map(({ _id, name }) => {
              return (
                <p
                  className="cursor-pointer hover:bg-[#e68787] bg-[#e68787] text-white max-w-[100px] flex justify-center my-2 rounded-xl"
                  onClick={() => {
                    setSelectedCat({
                      name: name,
                      id: _id,
                    });
                  }}
                >
                  {name}
                </p>
              );
            })}
          </div>
        </div>

        <div class="border-l border-[#dddddd] p-4 sm:col-span-3 px-4 sm:px-[40px]">
          <p className="text-[#777] text-sm">Home/{selectedCat.name}</p>
          <div className="mt-10 flex justify-between items-center">
            <h2 class="text-4xl font-normal font-poppins leading-tight text-[#ff5151]">
              {selectedCat.name}
            </h2>
            <p>{"(" + allProducts?.length + ")"} results</p>
          </div>
          {!isProductFetching && allProducts.length < 1 && (
            <p className="flex justify-center items-center min-h-[200px] text-3xl text-[#ff5151]">
              No Products Found!
            </p>
          )}
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {isProductFetching &&
              Array(10)
                .fill(1)
                .map(() => {
                  return <SkeltonCard />;
                })}

            {!isProductFetching &&
              allProducts &&
              allProducts?.map((item) => {
                return <ProductCard {...item} selectedCat={selectedCat.name} />;
              })}
          </div>
        </div>
      </div>
    </GuardWrapper>
  );
};

Product.defaultProps = {
  getLayout: (page) => <UserLayout>{page}</UserLayout>,
  guestGuard: false,
  authGuard: false,
};

export default Product;
