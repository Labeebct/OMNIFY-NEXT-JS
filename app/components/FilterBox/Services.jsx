import React from "react";
import SearchBar from "../SearchBar";

const Services = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="flex justify-between my-2 mb-4">
        <div className="flex items-center gap-2 pr-4">
          <input
            type="radio"
            className="accent-black cursor-pointer"
            id="searchByName"
          />
          <label
            className="text-[.85rem] text-gray-700 cursor-pointer"
            htmlFor="searchByName"
          >
            Search by name
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="accent-black cursor-pointer"
            id="searchByTags"
          />
          <label
            className="text-[.85rem] text-gray-700 cursor-pointer"
            htmlFor="searchByTags"
          >
            Search by tags
          </label>
        </div>
      </div>
      <div>
      <SearchBar placeHolder={"Search service name"} />
      <p className="text-[.85rem] mb-3 font-medium my-3">
        Show result mathin 'Na'
      </p>
      <div className="flex flex-col gap-2 my-1">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="alan"
            className="accent-black cursor-pointer"
          />
          <label
            htmlFor="alan"
            className="text-gray-700 text-[.9rem] cursor-pointer"
          >
            Alan
          </label>
          <span className="text-[.6rem] text-gray-500 cursor-pointer">
            Payer
          </span>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Services;
