import RangeSlider from "react-range-slider-input";
import MultiRangeSlider from "../../components/multiRange/multiRange";
import Button from "../../components/button";
import ProductCard from "../../components/productCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/profilepic/getAllProducts.action";
import SkeltonCard from "../../components/cardSkeleton";
import { GuardWrapper } from "../../layouts/GuardWrapper";
import { SuspenseLayout } from "../../layouts/SuspenseLayout";
import UserLayout from "../../layouts/UserLayout";
const Product = (props) => {
  const [selectedCat, setSelectedCat] = useState({
    name: "Mugs",
    id: "6549f4d2252d074692130b65",
  });

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
            <div className="flex justify-between">
              <p
                className="cursor-pointer text-[#cf2e2e]"
                onClick={() => {
                  setSelectedCat({
                    name: "Mugs",
                    id: "6549f4d2252d074692130b65",
                  });
                }}
              >
                Mugs
              </p>
              <p>
                {"("}
                {selectedCat.name === "Mugs" ? allProducts?.length : 4}
                {")"}
              </p>
            </div>
            <div className="mt-5 flex justify-between">
              <p
                className="cursor-pointer text-[#cf2e2e]"
                onClick={() => {
                  setSelectedCat({
                    name: "Tshirts",
                    id: "6549f4ed252d074692130b67",
                  });
                }}
              >
                Tshirts
              </p>
              <p>
                {"("}
                {selectedCat.name === "Tshirts" ? allProducts?.length : 3}
                {")"}
              </p>
            </div>
          </div>
        </div>

        <div class="border-l border-[#dddddd] p-4 sm:col-span-3 px-4 sm:px-[40px]">
          <p className="text-[#777] text-sm">Home/{selectedCat.name}</p>
          <div className="mt-10 flex justify-between items-center">
            <h2 class="text-4xl font-normal font-poppins leading-tight text-[#ff5151]">
              {selectedCat.name}
            </h2>
            <p>Show all {allProducts?.length} results</p>
          </div>
          {!isProductFetching && allProducts.length < 1 && (
            <p>No Products Found!</p>
          )}
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {isProductFetching &&
              Array(10)
                .fill(1)
                .map(() => {
                  return <SkeltonCard />;
                })}

            {!isProductFetching &&
              allProducts.length &&
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
  authGuard: false,
  guestGuard: false,
};

export default Product;
