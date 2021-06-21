import React from 'react';
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../posts.json";
import "./components.css";

function PostList() {
  const excerptList = postlist.map(post => {
    // return post.content.split(" ").slice(0, 20).join(" ") + "..."
    return post.overview.split(" ").slice(0, 20).join(" ") + "..."
  });
 
  return (
    <>
      <h1 className="recent-posts-text">Recent Posts</h1>
      <div className="PostList">
        {postlist.length && 
        postlist.map((post, i) => {
          return (
            <Link to={`/post/${post.id}`} key={i}>
              <div className="post-card">
                <h2 className="title">{post.title}</h2>
                <small className="post-date">{post.date}</small>
                <hr />
                <Markdown children={excerptList[i]} className="excerpt"/>
                <button className="read-more-btn">Read More</button>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  );
}

export default PostList;
