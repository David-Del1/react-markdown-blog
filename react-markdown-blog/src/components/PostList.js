import React from 'react';
import MarkDown from "react-markdown"
import postlist from "../posts.json";
import "./components.css";

function PostList() {
  console.log(postlist);
  return (
    <div className="PostList">
      <h1 className="title">All Posts</h1>
      {postlist.length && 
      postlist.map((post, i) => {
        return (
          <div className="post-card">
            <h2>{post.title}</h2>
            <small>{post.date}</small>
            <hr />

          </div>
        )
      })}
    </div>
  );
}

export default PostList
