import React from "react";
import "./PostList.css";
import PostListItem from "./PostListItem";

function PostList(props) {
  const { posts, onclickItem } = props;

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default PostList;
