import React from "react";
import SearchBar from "../SearchBar";

const People = () => {
  return (
    <div className="w-full h-full p-4">
      <SearchBar placeHolder={"Search payer or attendee name"} />
      <p className="text-[.85rem] mb-3 font-medium my-3">
        Show result mathin 'Al'
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
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="alex"
            className="accent-black cursor-pointer"
          />
          <label
            htmlFor="alex"
            className="text-gray-700 text-[.9rem] cursor-pointer"
          >
            Alex
          </label>
          <span className="text-[.6rem] text-gray-500 cursor-pointer">
            Attendee
          </span>
        </div>
      </div>
    </div>
  );
};

export default People;
