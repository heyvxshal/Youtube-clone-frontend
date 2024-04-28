const ChatMessage = ({ name, message, src }) => {
  return (
    <div className="flex items-start gap-2 mt-3 ">
      <img alt="profile" src={src} className="w-8" />
      <p className="font-bold text-sm">{name} </p>

      <p>{message} </p>
    </div>
  );
};

export default ChatMessage;
