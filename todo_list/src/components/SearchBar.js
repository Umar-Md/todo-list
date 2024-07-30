import React from 'react';

const SearchBar = ({ query, onChange }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search tasks..."
    />
  );
};

export default SearchBar;
