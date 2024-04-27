import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="w-36 shadow-lg p-5 h-screen">
        <ul className="pb-2">
          <li className="font-bold">
            <Link to="/">Home</Link>
          </li>

          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>

        <hr />
        <h1 className="font-bold pt-5">You</h1>
        <ul className="pb-2">
          <li>History</li>
          <li>Playlists</li>
          <li>Your videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Your Clips</li>
        </ul>

        <hr />
        <h1 className="font-bold pt-5">Explore</h1>
        <ul className="pb-2">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
        </ul>

        <hr />

        <ul className="pt-5">
          <li>Settings</li>
          <li>Report history</li>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
