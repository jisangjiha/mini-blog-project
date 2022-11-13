import React from "react";
import "./CommentList.css";
import CommentListItem from "./CommentListItem";

function CommentList(props) {
  const { comments } = props;

  return (
    <div className="Wrapper">
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentList;
