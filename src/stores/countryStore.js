// src/stores/countryStore.js
import { makeAutoObservable, runInAction } from 'mobx';

class CountryStore {
  countries = [];
  filteredCountries = [];
  isLoading = false;
  error = null;
  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 10;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCountries = async () => {
    this.isLoading = true;
    this.error = null;
    
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Failed to fetch countries data');
      }
      
      const data = await response.json();
      
      // Sort countries alphabetically by name
      const sortedData = data.sort((a, b) => 
        a.name.common.localeCompare(b.name.common)
      );
      
      runInAction(() => {
        this.countries = sortedData;
        this.applyFilters();
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message;
        this.isLoading = false;
      });
    }
  };

  applyFilters = () => {
    let result = this.countries;
    
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      result = result.filter(country => 
        country.name.common.toLowerCase().includes(searchTermLower) ||
        (country.capital && country.capital[0] && 
         country.capital[0].toLowerCase().includes(searchTermLower)) ||
        (country.region && country.region.toLowerCase().includes(searchTermLower))
      );
    }
    
    this.filteredCountries = result;
  };

  setSearchTerm = (term) => {
    this.searchTerm = term;
    this.currentPage = 1;
    this.applyFilters();
  };

  setPage = (pageNumber) => {
    this.currentPage = pageNumber;
  };

  get totalPages() {
    return Math.ceil(this.filteredCountries.length / this.itemsPerPage);
  }

  get paginatedCountries() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCountries.slice(startIndex, startIndex + this.itemsPerPage);
  }
}

// Create and export a singleton instance
const countryStore = new CountryStore();
export default countryStore;