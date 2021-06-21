import React from 'react';
import { Redirect } from 'react-router';
import Markdown from "react-markdown";
import postlist from "../posts.json";
import "./Post.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

function Post(props) {
  const validId = parseInt(props.match.params.id);
  if(!validId) {
    return <Redirect to="/404"></Redirect>
  }
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No Title Given";
      fetchedPost.date = post.date ? post.date : "No date Given";
      fetchedPost.content = post.content ? post.content : "No Content Given";
      postExists = true;
    }
  });
  if(postExists === false) {
    
  }
  return (
    <>
      <Header />
      <div className="Post">
        <div className="meta-container">
          <h2 className="post-title">{fetchedPost.title}</h2>
          <p className="post-date">{fetchedPost.date}</p>
        </div>
        <Markdown children={fetchedPost.content} className="post-content"/>
      </div>
      <Footer />
    </>
  );
}

export default Post;
