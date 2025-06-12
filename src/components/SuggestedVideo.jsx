import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SuggestedVideo = ({ video }) => {
  console.log(video);
  return (
    <>   
    
    <div> 
      <Link to={`video/${video?.videoId}`}>
        <div className="flex mb-3 items-center">
          <div className="h-24 mx-2 relative rounded-md lg:h-20 xl:h-24 w-48 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] ronuded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full rounded-lg"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex space-x-2 mt-3">
            {/* <div className="flex item-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full overflow-hidden rounded-full"
                  src={video?.author.avatar[0].url}
                  alt=""
                />
              </div>
            </div> */}
            <div>
              <span className="text-sm font-bold line-clamp-2 mt-0">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-1 text-[12px] text-gray-600">
                {video?.author.title}
                {video?.author.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex leading-none font-bold mx-1 items-center text-gray-600">•</span>
                <span className="text-gray-600">
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>

    </>

  );
};

export default SuggestedVideo;
