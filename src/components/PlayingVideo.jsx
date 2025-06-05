import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../utils/rapidapi";
import ReactPlayer from "react-player";

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
    <div className="mt-28 ">
      <div>
        <div>
          <div>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
