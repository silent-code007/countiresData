import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountryCard from './components/CountryCard';
import Pagination from './components/Pagination';
import ErrorMessage from './components/ErrorMessage';
import LoadingState from './components/LoadingState';
import countryStore from './stores/countryStore';

const App = observer(() => {
  useEffect(() => {
    countryStore.fetchCountries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <SearchBar />
        </div>
        
        {countryStore.error && <ErrorMessage message={countryStore.error} />}
        
        {countryStore.isLoading ? (
          <LoadingState />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryStore.paginatedCountries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
              ))}
            </div>
            
            {countryStore.filteredCountries.length === 0 && !countryStore.isLoading && !countryStore.error && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No countries found matching your search criteria.</p>
              </div>
            )}
            
            <Pagination />
          </>
        )}
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            Data provided by <a href="https://restcountries.com/" className="text-blue-300 hover:underline">REST Countries API</a>
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Built with React, MobX, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
});

export default App;