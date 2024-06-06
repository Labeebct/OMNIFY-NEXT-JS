import React, { useState } from "react";
import SearchBar from "../SearchBar";
import SelectBar from "../SelectBar";

const Services = () => {
  //Keeping state for shifting search by name to search by tag
  const [selectSec, setSelected] = useState("searchByName");

  //Data of service for select options
  const serviceDatas = [
    { value: "Show all service type", label: "Show all service type" },
    { value: "Class", label: "Class" },
    { value: "Appointment", label: "Appointment" },
    { value: "Facility", label: "Facility" },
    { value: "Class Pack", label: "Class Pack" },
    { value: "Membership", label: "Membership" },
    { value: "General items", label: "General items" },
  ];

  //Data of status for select options
  const statusDatas = [
    { value: "Show All", label: "Show All" },
    { value: "Public", label: "Public" },
    { value: "Private", label: "Private" },
    { value: "Disable", label: "Disable" },
    { value: "Draft", label: "Draft" },
  ];

  return (
    <div className="w-full h-full p-4">
      <div className="flex justify-between my-2 mb-4">
        <div className="flex items-center gap-2 pr-4">
          <input
            type="radio"
            name="filter"
            defaultChecked
            //Onclick shifting the part component
            onClick={() => setSelected("searchByName")}
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
            name="filter"
            //Onclick shifting the part component
            onClick={() => setSelected("searchByTag")}
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

      {/* checking the current stage and showing selected part */}
      {selectSec === "searchByName" ? (
        <div>
          <SearchBar placeHolder={"Search service name"} />
          <p className="text-[.85rem] mb-3 font-medium my-3">
            Show result mathin 'Na'
          </p>
          <div className="flex flex-col gap-3 my-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="alan"
                  className="accent-black cursor-pointer"
                />
                <label
                  htmlFor="alan"
                  className="text-gray-700 text-[.85rem] cursor-pointer"
                >
                  National tennis class
                </label>
              </div>
              <div className="flex items-center gap-2 ">
                <span className="text-[.75rem] text-gray-500 cursor-pointer">
                  Class
                </span>
                <span className="text-[.75rem] text-green-600 cursor-pointer">
                  Public
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="alan"
                  className="accent-black cursor-pointer"
                />
                <label
                  htmlFor="alan"
                  className="text-gray-700 text-[.85rem] cursor-pointer"
                >
                  National tennis Court
                </label>
              </div>
              <div className="flex items-center gap-2 ">
                <span className="text-[.75rem] text-gray-500 cursor-pointer">
                  Class
                </span>
                <span className="text-[.75rem] text-orange-600 cursor-pointer">
                  Private
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-auto">
          <p className="text-[.85rem] mb-3 font-medium my-3">Service type</p>
          {/* Calling select bar */}
          <SelectBar
            name={"serviceType"}
            options={serviceDatas}
            placeholder={"Show all service type"}
          />
          <p className="text-[.85rem] mb-3 font-medium my-3">Service type</p>
          {/* Calling select bar */}
          <SelectBar
            name={"status"}
            options={statusDatas}
            placeholder={"Show All"}
          />
        </div>
      )}
    </div>
  );
};

export default Services;
