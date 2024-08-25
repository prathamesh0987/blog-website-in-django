// src/components/PostList.jsx
import React, { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
            <div className="mt-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <img src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`} alt="User" className="w-8 h-8 rounded-full" />
              </div>
              <span className="font-semibold">{post.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
