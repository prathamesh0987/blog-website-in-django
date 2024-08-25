// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Blog</Link>
        <div>
          <Link to="/register" className="text-white mr-4">Register</Link>
          <Link to="/create-post" className="text-white">Create Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
