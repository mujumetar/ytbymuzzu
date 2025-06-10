import React, { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMiniSignal } from "react-icons/hi2";
import { IoIosMusicalNotes, IoIosTrophy } from "react-icons/io";
import {
  IoFlagOutline,
  IoHelpCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  MdNewspaper,
  MdOutlineMovieCreation,
  MdSubscriptions,
} from "react-icons/md";
import { PiCoatHangerBold } from "react-icons/pi";
import {
  RiGraduationCapLine,
  RiHistoryLine,
  RiHome4Fill,
  RiShoppingBag4Line,
  RiSignalTowerLine,
} from "react-icons/ri";
import { SiLinkfire, SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import { UtilsContext } from "../context/UtilsContext";

const Sidebar = () => {
  const { setIsSidebar, isSidebar, mobileShow, setMobileShow } = useContext(UtilsContext);

  const ModelOverlay = () => {
return (
  <div className="flex fixed top-0 bottom-0 left-0 bg-black-50 z-30" onClick={() => setMobileShow(!mobileShow)}>

  </div>
)
  }
  return (
    <>

      <div className={`${mobileShow ? "fixed top-0 bottom-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]" : "hidden h-[calc(100vh-6.625rem)] w-[18%]"

        } xl:static xl:block  px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin }`}>
        <div >
          <div className="space-y-3 items-center">
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <RiHome4Fill className="text-xl cursor-pointer" />
              <span>Home</span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <SiYoutubeshorts className="text-xl cursor-pointer" />
              <span>Shorts</span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <MdSubscriptions className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Subscription
              </span>
            </div>
            <hr />

            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <FaRegUserCircle className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                You
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <RiHistoryLine className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                History
              </span>
            </div>
            <hr />

            <h3 className="my-1 mx-2">Explore</h3>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <SiLinkfire className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Trending
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <RiShoppingBag4Line className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Shopping
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <IoIosMusicalNotes className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Music
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <MdOutlineMovieCreation className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Movies
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <HiMiniSignal className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Live
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <SiYoutubegaming className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Gaming
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <MdNewspaper className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                News
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <IoIosTrophy className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Sports
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <RiGraduationCapLine className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Courses
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <PiCoatHangerBold className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Fashion & Beauty
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <RiSignalTowerLine className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Podcast
              </span>
            </div>
            <hr />
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <IoSettingsOutline className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Setting
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <IoFlagOutline className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Report History
              </span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <IoHelpCircleOutline className="text-xl cursor-pointer" />
              <span aria-current="page" href="#">
                Help
              </span>
            </div>
          </div>
        </div>
      </div>
      {mobileShow ? <ModelOverlay/>:null}
    </>

  );
};

export default Sidebar;
