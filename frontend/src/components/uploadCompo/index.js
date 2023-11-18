import React, { useEffect, useState } from "react";
import { axiosClient } from "../../configs/axios";
import toast from "react-hot-toast";

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    detail: "",
    categories: "",
    file: null,
  });

  const [catogery, setCatogery] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Make sure a file is selected
    if (file) {
      // Create a URL for the selected file
      const fileUrl = URL.createObjectURL(file);

      // Update the state with the file and its URL
      setProductData({
        ...productData,
        file,
        fileUrl, // Add this line to store the file URL in state
      });
    }
  };
  const addProduct = async (payload) => {
    const res = await axiosClient.post("/product/addProduct/", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("detail", productData.detail);
    formData.append("categories", productData.categories);
    formData.append("file", productData.file);

    const resultPromise = new Promise((resolve, reject) => {
      addProduct(formData)
        .then(({ data }) => {
          resolve(data);
          return data;
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });

    toast.promise(resultPromise, {
      loading: "adding product",
      success: "adding product successfully",
      error: (err) => err,
    });
  };

  useEffect(() => {
    // Make the API call when the component mounts
    axiosClient
      .get("/category/allCategories")
      .then((response) => {
        setCatogery(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  console.log(catogery, "bs");

  return (
    <div className="sm:max-w-3xl w-full p-10 mx-auto rounded-xl z-10">
      <div className="text-center">
        <h2 className="mt-5 text-3xl font-bold text-gray-900">File Upload!</h2>
        <p className="mt-2 text-sm text-gray-400">
          Lorem ipsum is placeholder text.
        </p>
      </div>
      <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Title
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type="text"
            name="name"
            placeholder="Product Title"
            value={productData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Price
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type="text"
            name="price"
            placeholder="Product Price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Detail
          </label>
          <input
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type="text"
            name="detail"
            placeholder="Product Detail"
            value={productData.detail}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <select
            className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            name="categories"
            value={productData.categories}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            {catogery.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Attach Document
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
              <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <img
                    className="has-mask h-36 object-center"
                    src={
                      productData.fileUrl ||
                      "https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                    }
                    alt="freepik image"
                  />
                </div>
                <p className="pointer-none text-gray-500 ">
                  <span className="text-sm">Drag and drop</span> files here{" "}
                  <br /> or{" "}
                  <label
                    htmlFor="fileInput"
                    className="text-blue-600 hover:underline"
                  >
                    select a file
                  </label>{" "}
                  from your computer
                </p>
              </div>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <p className="text-sm text-gray-300">
          <span>File type: doc, pdf, types of images</span>
        </p>
        <div>
          <button
            type="submit"
            className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadProduct;
