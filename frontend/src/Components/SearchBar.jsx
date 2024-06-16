  // import React from 'react';

  const SearchBar = () => {
    return (
      <div className="flex items-center">
        {/* Search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l-5-5m0 0l-5 5m5-5V3"
          />
        </svg>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 px-3 py-2 border border-gray-300 rounded"
        />
      </div>
    );
  };

  export default SearchBar;
