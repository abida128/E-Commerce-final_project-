import RangeSlider from "react-range-slider-input";
import MultiRangeSlider from "../../components/multiRange/multiRange";
import Button from "../../components/button";
import ProductCard from "../../components/productCard";
import { useState } from "react";
const Product = () => {
  const [selectedCat, setSelectedCat] = useState("Mugs");

  return (
    <div class="min-h-screen bg-[#F4F5F6] grid grid-cols-1 sm:grid-cols-4 py-10 px-[40px] tablet:px-[40px] md:px-[80px]">
      <div class="p-4 sm:col-span-1">
        <h1 className="text-[#415161] text-4xl font-poppins leading-5 font-bold">
          Filter by Price
        </h1>
        <div className="my-10">
          <MultiRangeSlider min={0} max={1000} />
        </div>
        <div className="mt-[100px] ">
          <Button label="apply" />
        </div>

        <h2 class="mt-10 font-thin  text-3xl sm:text-1.4rem text-[#415161">
          Categories
        </h2>

        <div className="mt-10">
          <div className="flex justify-between">
            <p
              className="cursor-pointer text-[#cf2e2e]"
              onClick={() => {
                setSelectedCat("Mugs");
              }}
            >
              Mugs
            </p>
            <p>
              {"("}4{")"}
            </p>
          </div>
          <div className="mt-5 flex justify-between">
            <p
              className="cursor-pointer text-[#cf2e2e]"
              onClick={() => {
                setSelectedCat("Tshirts");
              }}
            >
              Tshirts
            </p>
            <p>
              {"("}10{")"}
            </p>
          </div>
        </div>
      </div>

      <div class="border-l border-[#dddddd] p-4 sm:col-span-3 px-4 sm:px-[40px]">
        <p className="text-[#777] text-sm">Home/{selectedCat}</p>

        <div className="mt-10 flex justify-between items-center">
          <h2 class="text-4xl font-normal font-poppins leading-tight text-[#ff5151]">
            {selectedCat}
          </h2>
          <p>Show all 4 results</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array(10)
            .fill(1)
            .map(() => {
              return <ProductCard />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
