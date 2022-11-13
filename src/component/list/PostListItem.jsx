import React from "react";
import "./PostListItem.css";

function PostListItem(props) {
  const { post, onClick } = props;

  return (
    <div className="Wrapper" onClick={onClick}>
      <p className="TiltleText">{post.title}</p>
    </div>
  );
}

export default PostListItem;
