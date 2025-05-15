// src/components/CountryCard.jsx
import React from 'react';
import { Map } from 'lucide-react';

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-40 overflow-hidden">
        <img 
          src={country.flags.png || "/api/placeholder/320/160"} 
          alt={`Flag of ${country.name.common}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
        <div className="text-sm text-gray-600 space-y-1">
          <p><span className="font-medium">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
          <p><span className="font-medium">Region:</span> {country.region}</p>
          <p><span className="font-medium">Population:</span> {country.population.toLocaleString()}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
            {country.cca3}
          </span>
          <div className="flex items-center text-sm text-blue-600">
            <Map className="h-4 w-4 mr-1" />
            <span>{country.area?.toLocaleString() || 'N/A'} km²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;