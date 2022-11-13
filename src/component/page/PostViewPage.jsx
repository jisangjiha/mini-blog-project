import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PostViewPage.css";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

function PostViewPage(props) {
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = data.find((item) => {
    return item.id == postId;
  });
  const [comment, setComment] = useState("");

  return (
    <div className="Wrapper">
      <div className="Container">
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="PostContainer">
          <p className="TitleText">{post.title}</p>
          <p className="ContentText">{post.content}</p>
        </div>
        <p className="CommentLabel">댓글</p>
        <CommentList comments={post.comments} />
        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}

export default PostViewPage;
