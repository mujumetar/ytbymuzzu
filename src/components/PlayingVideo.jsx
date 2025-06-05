import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

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

            <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full overflow-hidden rounded-full"
                  src={video?.author}
                  alt=""
                />
              </div>
              <div>
                <p className="text-[15px] text-black">{video?.author.title}</p>
                {video?.author.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-lg" />
                )}
              </div>
            </span>
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
