import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import './pages.css';

function Home() {
  return (
    <div className="Home">
      <Layout>
        <PostList />
      </Layout>
    </div>
  );
}

export default Home
