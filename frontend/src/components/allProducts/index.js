import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { axiosClient } from "../../configs/axios";
import Button from "../button";
import toast from "react-hot-toast";

const TableProduct = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this number based on your requirement

  useEffect(() => {
    // Make the API call when the component mounts
    axiosClient
      .get("/product/allProducts")
      .then((response) => {
        setProductData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteCategory = async (categoryId) => {
    const res = await axiosClient.delete(
      `/product/deleteProduct/${categoryId}`
    );
    return res;
  };
  console.log();
  const handleDeleteCategory = (categoryId) => {
    const resultPromise = new Promise((resolve, reject) => {
      deleteCategory(categoryId)
        .then(() => {
          // Filter out the deleted category from the productData state
          const updatedProductData = productData.filter(
            (product) => product._id !== categoryId
          );
          setProductData(updatedProductData);
          resolve();
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });

    toast.promise(resultPromise, {
      loading: "Deleting category...",
      success: "Deleted category successfully",
      error: (err) => err,
    });
  };

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Product Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Price
                  </th>{" "}
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    category
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Image
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    action
                  </th>
                </tr>
              </thead>

              {/* Table body */}
              <tbody>
                {loading ? (
                  // Skeleton loading while waiting for API response
                  <tr>
                    <td colSpan="4">
                      <Skeleton height={40} count={5} />
                    </td>
                  </tr>
                ) : (
                  // Render actual data when available
                  currentItems.map((product) => (
                    <tr key={product._id}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        {product.name}
                      </th>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        {product.price}
                      </th>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        {product.categories.name}
                      </th>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        <img
                          className="rounded w-10 h-10"
                          src={"http://localhost:8080/uploads/" + product.image}
                          alt=""
                        />
                      </th>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        <Button
                          label="delete"
                          onClick={() => {
                            handleDeleteCategory(product._id);
                          }}
                        />
                      </th>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({
              length: Math.ceil(productData.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 focus:outline-none ${
                  currentPage === index + 1
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-blueGray-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ... (rest of the code remains unchanged) */}
    </section>
  );
};

export default TableProduct;
