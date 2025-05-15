// src/components/Pagination.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import countryStore from '../stores/countryStore';

const Pagination = observer(() => {
  if (countryStore.totalPages <= 1) return null;

  const handlePrevious = () => {
    if (countryStore.currentPage > 1) {
      countryStore.setPage(countryStore.currentPage - 1);
    }
  };

  const handleNext = () => {
    if (countryStore.currentPage < countryStore.totalPages) {
      countryStore.setPage(countryStore.currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-6 px-4 py-3 bg-white border rounded-lg shadow-sm">
      <div className="flex items-center">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{(countryStore.currentPage - 1) * countryStore.itemsPerPage + 1}</span> to{' '}
          <span className="font-medium">
            {Math.min(countryStore.currentPage * countryStore.itemsPerPage, countryStore.filteredCountries.length)}
          </span>{' '}
          of <span className="font-medium">{countryStore.filteredCountries.length}</span> results
        </p>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={handlePrevious}
          disabled={countryStore.currentPage === 1}
          className={`inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium ${
            countryStore.currentPage === 1 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={countryStore.currentPage === countryStore.totalPages}
          className={`inline-flex items-center px-3 py-1 border border-gray-300 rounded-md bg-white text-sm font-medium ${
            countryStore.currentPage === countryStore.totalPages 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          Next
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
});

export default Pagination;