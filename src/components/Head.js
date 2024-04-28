import React, { useState } from "react";
import { AVATAR_ACCOUNT, LOGO_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import useSearchSuggestions from "../hooks/useSearchSuggestions";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  useSearchSuggestions(searchQuery, setSuggestions);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const hamburgerIcon = (
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

  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );

  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className="flex gap-2 items-center col-span-1 mx-2">
        {hamburgerIcon}

        <img src={LOGO_IMG} alt="logo" className="h-6 mx-2" />
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <div className="w-2/4 flex">
          <input
            type="text"
            className="w-10/12 border border-gray-400 rounded-l-full p-2 px-4 h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 rounded-r-full p-2 bg-gray-100 px-4 h-10">
            {searchIcon}
          </button>
          {showSuggestions && (
            <div className="absolute bg-white p-2 rounded-lg w-2/6 mt-10 shadow-2xl border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="px-1 py-2  shadow-sm hover:bg-slate-100  rounded-lg"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end mx-2">
        <img src={AVATAR_ACCOUNT} alt="user" className="w-12" />
      </div>
    </div>
  );
};

export default Head;
