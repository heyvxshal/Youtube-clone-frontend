const Comment = ({ data, src }) => {
  const { name, text } = data;

  return (
    <div className="flex items-start m-3">
      <img alt="user" src={src} className="w-11 h-11" />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
