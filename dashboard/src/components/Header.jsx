// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 flex items-center justify-between">
      <div className="text-white text-xl">Dashboard</div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded bg-gray-800 text-white focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
