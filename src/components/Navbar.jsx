import React from "react";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex item-center space-x-4 cursor-pointer">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        {/* <img
          className="w-28"
          style={{ width: "100px" }}
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          alt="youtube clone"
        /> */}

        Yt
      </div>
      <div className=" w-[35%] flex">
        <div className="w-[100%] px-3 border  border-gray-400 py-2 rounded-l-full ">
          <input type="text" className="outline-none w-full" placeholder="search" />
        </div>
        <button className="px-4 py-2  rounded-r-full bg-gray-100">
          <CiSearch className="text-xl" />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3  p-1 cursor-pointer rounded-full hover:bg-gray-200 duration-200"
        />
      </div>
      <div className=" flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
