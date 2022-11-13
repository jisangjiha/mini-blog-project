import React from "react";
import "./PostList.css";
import PostListItem from "./PostListItem";

function PostList(props) {
  const { posts, onclickItem } = props;

  return (
    <div className="Wrapper">
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onclickItem(post);
            }}
          />
        );
      })}
    </div>
  );
}

export default PostList;
