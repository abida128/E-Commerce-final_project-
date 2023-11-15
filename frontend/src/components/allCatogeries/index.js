import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { axiosClient } from "../../configs/axios";
import Button from "../button";
import toast from "react-hot-toast";

const Catogery = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    // Make the API call when the component mounts
    axiosClient
      .get("/category/allCategories")
      .then((response) => {
        setProductData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount

  const addCategory = async (payload) => {
    const res = await axiosClient.post("/category/addCategory", {
      name: payload,
    });
    return res;
  };

  const handleAddCategory = () => {
    const resultPromise = new Promise((resolve, reject) => {
      addCategory(newCategoryName)
        .then(({ data }) => {
          resolve(data);
          setProductData([...productData, data]);
          return data;
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });

    toast.promise(resultPromise, {
      loading: "adding category...",
      success: "adding catogery successfully",
      error: (err) => err,
    });
  };

  const deleteCategory = async (categoryId) => {
    const res = await axiosClient.delete(
      `/category/deleteCategory/${categoryId}`
    );
    return res;
  };

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
                    Catogery Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Catogery id
                  </th>{" "}
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Action
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
                  productData.map((product) => (
                    <tr key={product._id}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        {product?.name}
                      </th>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                        {product?._id}
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
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Add Category</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Category Name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 mr-2"
            />
            <Button label="Add" onClick={handleAddCategory} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catogery;
