import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 w-3/12">
      <Link to={"/watch?v=" + info.id}>
        <img
          src={thumbnails.medium.url}
          alt="Thumbnail"
          className="rounded-lg w-full transition ease-in-out delay-150 hover:scale-105"
        />
        <ul>
          <li className="font-bold pt-3">{title}</li>
          <li className="pt-1">{channelTitle}</li>
          <li className="text-sm">{statistics.viewCount} Views</li>
        </ul>
      </Link>
    </div>
  );
};

export default VideoCard;
