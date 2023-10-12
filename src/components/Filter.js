// Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const handleFilterClick = () => {
    onFilter({ title: titleFilter, rating: ratingFilter });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
      <button onClick={handleFilterClick}>Apply Filters</button>
    </div>
  );
};

export default Filter;
