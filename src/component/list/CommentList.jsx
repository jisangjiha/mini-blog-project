import React from "react";
import "./CommentList.css";
import CommentListItem from "./CommentListItem";

function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </Wrapper>
  );
}

export default CommentList;
