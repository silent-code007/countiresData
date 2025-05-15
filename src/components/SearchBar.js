// src/components/SearchBar.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Search } from 'lucide-react';
import countryStore from '../stores/countryStore';

const SearchBar = observer(() => {
  const handleSearch = (e) => {
    countryStore.setSearchTerm(e.target.value);
  };

  return (
    <div className="relative mb-6 max-w-md w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search by country name, capital or region..."
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={countryStore.searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
});

export default SearchBar;