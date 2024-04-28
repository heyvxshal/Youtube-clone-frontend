import React from "react";
import { AVATAR_IMG } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex items-start m-3">
      <img alt="user" src={AVATAR_IMG} className="w-14 h-14" />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p className="text-justify">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
