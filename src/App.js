import React, { useState } from 'react';
import LoginForm from './LoginForm';
import DataDisplay from './DataDisplay';
import './App.css';

function App() {
  const [fetchedData, setFetchedData] = useState({ pairs: [] });
  const [selectedOption, setSelectedOption] = useState('Token Address');

  const handleDataFetch = async (searchQuery) => {
    // Fetch data from the API based on the provided search query
    try {
      const chainId = "bsc"; // Replace this with the actual chain ID
      const response = await fetch(`https://api.dexscreener.com/latest/dex/pairs/${chainId}/${searchQuery}`);
      const data = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="app">
      <div className="menu">
        <div className="menu-content">
          <h1 className="menu-heading">NFTify</h1>
          {/* SearchBar component */}
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Search by pair address"
            />
            <div className="search-icon" onClick={handleDataFetch}>
              Search
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <DataDisplay data={fetchedData} />
      </div>
    </div>
  );
}


export default App;
