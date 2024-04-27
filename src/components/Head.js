import React from "react";
import { AVATAR_IMG, LOGO_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const icon = (
    <svg
      viewBox="0 0 100 80"
      width="28"
      height="28"
      onClick={toggleMenuHandler}
      className="cursor-pointer"
    >
      <rect width="90" height="10"></rect>
      <rect y="30" width="90" height="10"></rect>
      <rect y="60" width="90" height="10"></rect>
    </svg>
  );

  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className="flex gap-2 items-center col-span-1">
        {icon}

        <img src={LOGO_IMG} alt="logo" className="h-6 mx-2" />
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <input
          type="text"
          className="w-2/4 border border-gray-400 rounded-l-full p-2"
        />
        <button className=" border border-gray-400 rounded-r-full p-2 bg-gray-100 px-4">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-end ">
        <img src={AVATAR_IMG} alt="user" className="h-12" />
      </div>
    </div>
  );
};

export default Head;
