// FeedPage.js
import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import CoffeeGrid from '../components/CoffeeGrid.jsx';

function FeedPage() {
  const [filters, setFilters] = useState({}); // Initial filters state

  return (
    <div className="dark bg-darkBackground overflow-hidden">
      <div className="flex overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>
        <FilterBar onFilterChange={setFilters} />
        <CoffeeGrid filters={filters} />
      </div>
    </div>
  );
}

export default FeedPage;
