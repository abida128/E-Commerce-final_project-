import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server or perform some action.
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex mt-[100px] px-9 md:px-[200px]">
      {/* Left Side - "Say Hello" */}
      <div className="w-1/2 p-4">
        <div className="mb-4">
          <h2 className="text-3xl font-extrabold text-orange-500">Say Hello</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="mb-4">
          <hr className="border-t-2 border-orange-500 h-px w-1/4 my-4" />{" "}
          {/* Smaller horizontal line */}
          <div className="flex items-center space-x-2 text-gray-700">
            <i className="fas fa-map-marker-alt text-orange-500 text-lg"></i>
            <span>212 7th St SE, Washington, DC 20003, USA</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <i className="far fa-envelope text-orange-500 text-lg"></i>
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <i className="fas fa-phone text-orange-500 text-lg"></i>
            <span>123-456-7890/91</span>
          </div>
        </div>
      </div>

      {/* Right Side - "Ask Your Queries" */}
      <div className="w-1/2 p-4">
        <div className="mb-4">
          <h2 className="text-3xl font-extrabold text-orange-500">
            Ask Your Queries
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold">
                Name:
              </label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold">
                Email:
              </label>
              <input
                className="w-full p-2 border rounded"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold">
                Message:
              </label>
              <textarea
                className="w-full p-2 border rounded"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-700"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
