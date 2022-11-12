import React from "react";
import "./PostListItem.css";

function PostListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <TiltleText>{post.title}</TiltleText>
    </Wrapper>
  );
}

export default PostListItem;
