import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ placeHolder, setSearchValue }) => {
  return (
    <div className="flex text-[.9rem] p-2 py-[.4rem]  border border-gray-200 shadow-sm rounded-[.2rem] gap-1">
      <SearchIcon sx={{ color: "gray" }} />
      <input
        type="text"
        spellCheck={false}
        onChange={(e) => setSearchValue(e.target.value)}
        className="outline-none w-full"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default SearchBar;
