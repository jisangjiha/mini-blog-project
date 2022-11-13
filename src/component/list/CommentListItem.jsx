import React from "react";
import "./CommentListItem.css";

function CommentListItem(props) {
  const { comment } = props;

  return (
    <div className="Wrapper">
      <p className="ContentText">{comment.content}</p>
    </div>
  );
}

export default CommentListItem;
