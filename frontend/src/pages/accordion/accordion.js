import React, { useEffect } from "react";
import { BiAtom } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";

const Accordion = () => {
  const handleClick = () => {
    console.log("handleClick");
    let block = document.querySelector(".hidden"); // Use querySelector to get the first element with the class
    if (block) {
      block.style.display = block.style.display === "block" ? "none" : "block"; // Toggle display property
      console.log("HELLO", block);
    }
  };

  useEffect(() => {
    let buttons = document.querySelectorAll(".accordion-button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        console.log("buttonClick");
        handleClick();
      });
    }

    // Remove event listeners when the component unmounts
    return () => {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener("click", () => {
          handleClick();
        });
      }
    };
  }, []);
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
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-button font-bold flex gap-3 items-center">
                <i>
                  <BiCaretRight />
                </i>
                We Can Custom Design Your Ideas
              </button>
              <div className="accordion-content hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                consequuntur distinctio nesciunt
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button font-bold flex gap-3 items-center">
                <i>
                  <BiCaretRight />
                </i>
                Your Payment Is Safe And Secured
              </button>
              <div className="accordion-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                consequuntur distinctio nesciunt
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button font-bold flex gap-3 items-center">
                <i>
                  <BiCaretRight />
                </i>
                We Offer Discounts And Coupons
              </button>
              <div className="accordion-content">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
