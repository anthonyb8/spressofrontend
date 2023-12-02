import React, { useState } from 'react';

function FilterBar({ onFilterChange }) {
  const [location, setLocation] = useState('');
  const [wifi, setWifi] = useState('');
  const [vibe, setVibe] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    updateFilters(e.target.value, wifi, vibe);
  };

  const handleWifiChange = (wifiValue) => {
    setWifi(wifiValue);
    updateFilters(location, wifiValue, vibe);
  };

  const handleVibeChange = (vibeValue) => {
    setVibe(vibeValue);
    updateFilters(location, wifi, vibeValue);
  };

  const updateFilters = (location, wifi, vibe) => {
    onFilterChange({ location, wifi, vibe });
  };

  return (
    <aside className="dark:bg-darkBackground text-white w-1/3 p-4 border-r border-white">
      <div className="sticky top-0 h-screen">
        <h2 className="font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Type location"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            WIFI
          </label>
          <div className="flex space-x-2">
            {['None', 'Slow', 'Fast'].map(wifiOption => (
              <button
                key={wifiOption}
                onClick={() => handleWifiChange(wifiOption)}
                className={`border rounded px-4 py-2 ${wifi === wifiOption ? 'bg-gray-300' : ''}`}
              >
                {wifiOption}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            VIBE
          </label>
          <div className="flex space-x-2">
            {['Chatty', 'Focused', 'Loud'].map(vibeOption => (
              <button
                key={vibeOption}
                onClick={() => handleVibeChange(vibeOption)}
                className={`border rounded px-4 py-2 ${vibe === vibeOption ? 'bg-gray-300' : ''}`}
              >
                {vibeOption}
              </button>
              ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FilterBar;
