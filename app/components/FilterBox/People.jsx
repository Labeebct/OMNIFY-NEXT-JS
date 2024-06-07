import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";

const People = ({ tableData, setFilteredValue }) => {

  //Storing search value from the component
  const [searchValue, setSearchValue] = useState("");
  //Storing the filtered values
  const [filteredData, setFilteredData] = useState(tableData);
  const [selectedFilters, setSelectedFilters] = useState([]);

  //Useeffect to show searched names
  useEffect(() => {
    const searchData = tableData.filter((data) =>
      data.payer.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    setFilteredData(searchData);
  }, [searchValue, tableData]);

  //For showing all payers name and select to show the table  
  const handleFilter = (e) => {
    const { value, checked } = e.target;
    let updatedFilters;

    if (checked) {
      updatedFilters = [...selectedFilters, value];
    } else {
      updatedFilters = selectedFilters.filter((filter) => filter !== value);
    }

    setSelectedFilters(updatedFilters);

    const newFilter = tableData.filter((data) =>
      updatedFilters.includes(data.payer)
    );

    setFilteredValue(newFilter);
  };

  return (
    <div className="w-full h-full p-4">
      {/* Search bar component */}
      <SearchBar
        setSearchValue={setSearchValue}
        placeHolder={"Search payer or attendee name"}
      />
      <p className="mb-3 flex items-center gap-1 my-3">
        <span className="text-gray-800 text-[.8rem] whitespace-nowrap">
          Show result matching
        </span>
        <span className="text-[.8rem] overflow-hidden">
          {searchValue ? '"' + searchValue + '"' : "..."}
        </span>
      </p>
      <div className="flex flex-col gap-2 my-1 overflow-y-auto max-h-[500px]">
        {filteredData.map((data) => (
          <div key={data.id} className="flex items-center gap-2">
            <input
              onChange={handleFilter}
              name="filterName"
              value={data.payer}
              type="checkbox"
              id={data.payer}
              className="accent-black cursor-pointer"
            />
            <label
              htmlFor={data.payer}
              className="text-gray-700 text-[.85rem] cursor-pointer"
            >
              {data.payer}
            </label>
            <span className="text-[.6rem] text-gray-500 cursor-pointer">
              Payer
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
