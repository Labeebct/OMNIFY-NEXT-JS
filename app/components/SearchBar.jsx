import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className="flex text-[.9rem] p-2 py-[.4rem] max-w-72  border border-gray-200 shadow-sm rounded-[.2rem] gap-1">
      <SearchIcon sx={{ color: 'gray' }}  />
      <input type="text" className="outline-none w-full" placeholder="Search client" />
    </div>
  );
};

export default SearchBar;
