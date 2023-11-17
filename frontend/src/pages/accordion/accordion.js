import React, { useState, useEffect } from "react";
import { BiAtom } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";

const Accordion = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? null : index));
  };

  const accordionData = [
    {
      title: "We Can Custom Design Your Ideas",
      content:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
    },
    {
      title: "Your Payment Is Safe And Secured",
      content:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "We Offer Discounts And Coupons",
      content:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];
  return (
    <div className="flex p-12">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold pb-6 text-gray-600">
          Best Quality Printed T-Shirts & <br />
          Mugs At Affordable Price!
        </h1>
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2">
              <i className="text-[#ff5151] text-lg">
                {" "}
                <BiAtom />{" "}
              </i>
              <p className="text-gray-600 text-lg">Personal Gifts</p>
            </span>
            <span className="flex gap-2">
              <i className="text-[#ff5151] text-lg">
                {" "}
                <BiAtom />{" "}
              </i>
              <p p className="text-gray-600 text-lg">
                Occasional Gifts
              </p>
            </span>
            <span className="flex gap-2">
              <i className="text-[#ff5151] text-lg">
                {" "}
                <BiAtom />{" "}
              </i>
              <p p className="text-gray-600 text-lg">
                Corporate Gifts
              </p>
            </span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="flex gap-2 items-center">
              <i className="text-[#ff5151] text-lg">
                {" "}
                <BiAtom />{" "}
              </i>
              <p p className="text-gray-600 text-lg">
                Couple Tshirt
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <i className="text-[#ff5151] text-lg">
                {" "}
                <BiAtom />{" "}
              </i>
              <p p className="text-gray-600 text-lg">
                Wedding Package
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <i className="text-[#ff5151] text-lg">
                {" "}
                <BiAtom />{" "}
              </i>
              <p p className="text-gray-600 text-lg">
                Corporate Gifts
              </p>
            </span>
          </div>
        </div>
      </div>
      <div
        className="w-1/2 border-2 rounded-lg"
        style={{
          boxShadow:
            "12px 14px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="border-2 rounded-lg">
          
            {accordionData.map((tab, index) => (
              <div key={index} className="accordion-tab py-[40px] px-[30px] border-b-gray-600  transition-all duration-300 ease-out">
                <button
                  className={`accordion-tab-title accordion-button font-bold flex gap-3 items-center  ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => toggleTab(index)}
                >
                  <i>
                    <BiCaretRight />
                  </i>
                  {tab.title}
                </button>
                {activeTab === index && (
                  <div className="accordion-tab-content py-[4px] px-[4px] transition-all duration-300 ease-out">{tab.content}</div>
                )}
              </div>
            ))}
        
        </div>
      </div>
    </div>
  );
};

export default Accordion;