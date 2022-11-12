import React from "react";
import "./CommentListItem.css";

function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;
