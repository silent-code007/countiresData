// src/components/Header.jsx
import React from 'react';
import { Globe } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-blue-700 text-white p-4 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Globe className="h-8 w-8" />
          <h1 className="text-2xl font-bold">World Explorer</h1>
        </div>
        <p className="text-sm">Discover countries around the world</p>
      </div>
    </div>
  );
};

export default Header;