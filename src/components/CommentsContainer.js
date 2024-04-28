import React from "react";
import Comment from "./Comment";
import commentsData from "../utils/dummyCommentsData";
import { AvatarGenerator } from "random-avatar-generator";

const CommentsList = ({ comments }) => {
  const generator = new AvatarGenerator();

  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} src={generator.generateRandomAvatar()} />
      <div className="ml-10 border-l-2">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2 w-8/12">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
