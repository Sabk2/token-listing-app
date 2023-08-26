import React, { useState } from 'react';

const LoginForm = ({ onDataFetch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch data from the API based on the provided search input
    try {
      const response = await fetch(`https://api.example.com/search?q=${searchInput}`);
      const data = await response.json();

      // Pass the fetched data to the parent component
      onDataFetch(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter pair/token address"
            value={searchInput}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
