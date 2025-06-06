import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill, BsThreeDots } from "react-icons/bs";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";

const PlayingVideo = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchdata(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };
  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-[1500px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0">
            <ReactPlayer
              
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div>
            <span className="text-lg font-xl font-bold line-clamp-2 ">
              {video?.title}
            </span>

            <div className="left flex justify-between align-center">

              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                <div>
                  <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                    <img
                      className="h-full w-full overflow-hidden rounded-full"
                      src={video?.author}
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-[15px] text-black">{video?.author.title}</p>
                {video?.author.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-lg" />

                )}

                <div>

                </div>
              </span>

              <div className="my-auto flex flex-row justify-between text-sm">
                <div className="flex ">
                  <span className="text-sm flex rounded-l-full justify-center items-center rounded-r-full p-1 bg-gray-200"><AiOutlineLike className="text-xl mx-2" />{video?.stats.likes} <span className="text-dark-200">|</span> <AiOutlineDislike className="mx-1 text-xl" /></span>
                </div>
                <div className="flex mx-2">
                  <span className="text-sm flex justify-center items-center rounded-l-full rounded-r-full p-1 bg-gray-200"><PiShareFat className="text-xl mx-1" /> Share</span>
                </div>
                <div className="flex mx-2">
                  <span className="text-sm flex justify-center items-center rounded-l-full rounded-r-full p-1 bg-gray-200"><GoDownload  className="text-xl mx-1" /> Download</span>
                </div>
                <div className="flex mx-2">
                  <span className="text-sm flex justify-center items-center rounded-l-full rounded-r-full p-1 bg-gray-200"><CiBookmark  className="text-xl mx-1" /> Save</span>
                </div>
                <div className="flex mx-2">
                  <span className="text-sm flex justify-center items-center rounded-full px-2 bg-gray-200"><BsThreeDots  className="text-xl mx-1" /></span>
                </div>
              </div>

            </div>

            <div className="flex text-gray-500 text-[12px]">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex leading-none font-bold mx-1">•</span>
              <span className="text-gray-600">{video?.publishedTimeText}</span>
            </div>
            <div className="desc">
              <div className=" my-2 bg-gray-200 rounded-xl p-4 ">
                {video?.description}
              </div>
            </div>
            <div className="my-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
