// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')); // Mocked user info retrieval
    setUser(storedUser);
  }, []);

  return (
    <div>
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        {user ? (
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <img src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`} alt="User" className="w-8 h-8 rounded-full" />
            </div>
            <span className="text-white text-lg font-semibold">{user.username}</span>
          </div>
        ) : (
          <a href="/register" className="text-white">Sign In</a>
        )}
      </header>
      <PostList />
    </div>
  );
};

export default Home;
