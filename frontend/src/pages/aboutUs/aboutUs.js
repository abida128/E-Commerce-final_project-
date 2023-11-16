import React from "react";
import { AiFillGold } from "react-icons/ai";
import { AiFillCodepenSquare } from "react-icons/ai";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import Team from "../../components/team/team";
import Accordion from "../accordion/accordion";
import worldWide from "../worldWide/worldWide"

const AboutUs = () => {
  return (
    <>
      <div className="text-center p-12 mt-12">
        <h1 className="text-6xl font-bold pb-6 text-[#415161]">About Us</h1>
        <p className="text-center m-auto text-[#415161] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <hr />

      <div className="flex gap-12 h-[450px] py-7">
        <div className="w-1/2 p-12">
          <h1 className="text-4xl font-bold pb-6 text-[#415161]">
            We Are Your Favorite, <br />
            Online Store.
          </h1>
          <p className="text-[#415161]">
            Dui habitasse provident eu etiam praesent placeat maiores <br />{" "}
            temporibus, accumsan parturient autem, mi animi ipsa. Lobortis{" "}
            <br /> maxime quos, pellentesq. <br /> Ee platea animi commodo
            tincidunt ridiculus tempora, ornare <br /> lorem quam sit possimus?
            Quam cras facilisi officia fusce. Ac, <br />
            excepteur excepteur fusce? Sunt minim expedita magnis!
          </p>
        </div>
        <div className="w-1/2 flex pt-12 gap-8">
          <div className="flex flex-col gap-2">
            <i className="text-[#ff5151] text-3xl">
              {" "}
              <AiFillGold />
            </i>
            <h2 className="font-bold text-xl text-[#415161]">Eros Imperdie</h2>
            <p className="text-[#415161]">
              We’ll generate a sitemap for your site, submit it to search engine
              and track.
            </p>
            <i className="text-[#ff5151] text-3xl">
              {" "}
              <AiFillCodepenSquare />
            </i>
            <h2 className="font-bold text-xl text-[#415161]">Rerum Rutrum</h2>
            <p className="text-[#415161]">
              We’ll generate a sitemap for your site, submit it to search engine
              and track.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <i className="text-[#ff5151] text-3xl">
              {" "}
              <AiFillCodeSandboxSquare />
            </i>
            <h2 className="font-bold text-xl text-[#415161]">Proident Congu</h2>
            <p className="text-[#415161]">
              We’ll generate a sitemap for your site, submit it to search engine
              and track.
            </p>
            <i className="text-[#ff5151] text-3xl">
              {" "}
              <AiFillHtml5 />
            </i>
            <h2 className="font-bold text-xl text-[#415161]">Vero Maecenas</h2>
            <p className="text-[#415161]">
              We’ll generate a sitemap for your site, submit it to search engine
              and track.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around bg-[#ff5151] h-40">
        <h1 className="text-white font-bold text-4xl">
          Get Best Offers On Customized Designs!
        </h1>
        <button
          className="text-white text-2xl flex justify-center items-center gap-2 border-2 rounded-lg border-inherit"
          type="button"
        >
          GET STARTED
          {/* <BiSolidRightArrow />{" "} */}
        </button>
      </div>

      <div className="flex  justify-center items-center py-10 flex-col">
        <h2 className="text-3xl text-[#415161] font-bold">
          Meet Our Creative Team
        </h2>
        <hr className="border-2 border-orange-600 w-[75px] h-[1px] bg-red-900 mt-4 md:mt-8" />
      </div>
    <div>
    <Team />
    <Accordion />
    <worldWide />
    </div>


    </>
  );
};

export default AboutUs;
