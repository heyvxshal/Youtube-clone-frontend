import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";
import { AvatarGenerator } from "random-avatar-generator";
import { AVATAR_LIVECHAT } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const chatMessage = useSelector((store) => store.chat.messages);
  const generator = new AvatarGenerator();

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(1, 0.2),
          src: generator.generateRandomAvatar(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  });

  return (
    <>
      <div className="m-3 p-2 border-t-2 border-r-2 border-l-2 h-[600px] bg-gray-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse ">
        {chatMessage.map((chat, index) => (
          <ChatMessage
            key={index}
            name={chat.name}
            message={chat.message}
            src={chat.src}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Vishal",
              message: liveMessage,
              src: AVATAR_LIVECHAT,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="rounded-b-lg m-3 p-2 -mt-3 flex justify-between bg-gray-100 border-2">
          <input
            type="text"
            placeholder="Enter your message"
            className=" border border-gray-300 bg-white p-2 rounded-md w-10/12"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="px-3 py-2 m-1 bg-green-200 text-green-800 font-bold rounded-full">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
