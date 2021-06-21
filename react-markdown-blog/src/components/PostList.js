import React from 'react';
import Markdown from "react-markdown";
import postlist from "../posts.json";
import "./components.css";

function PostList() {
  const excerptList = postlist.map(post => {
    return post.content.split(" ").slice(0, 20).join(" ") + "..."
  });
  console.log(excerptList);
  return (
    <div className="PostList">
      <h1 className="title">All Posts</h1>
      {postlist.length && 
      postlist.map((post, i) => {
        return (
          <div className="post-card" key={i}>
            <h2>{post.title}</h2>
            <small>{post.date}</small>
            <hr />
            <Markdown children={excerptList[i]} />
            <small>Read More...</small>
          </div>
        )
      })}
    </div>
  );
}

export default PostList
