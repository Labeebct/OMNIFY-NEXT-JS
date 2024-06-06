import React from "react";
import SelectBar from "../SelectBar";

const Date = () => {
  const datesDatas = [
    { value: "All", label: "All" },
    { value: "Custom", label: "Custom" },
    { value: "Last 30 days", label: "Last 30 days" },
    { value: "This Month", label: "This Month" },
    { value: "Last Month", label: "Last Month" },
    { value: "This quarter", label: "This quarter" },
    { value: "2 quarter ago", label: "2 quarter ago" },
    { value: "This Year", label: "This Year" },
    { value: "Last Year", label: "Last Year" },
  ];

  return (
    <div className="w-full h-full p-4 ">
      <p className="text-[.85rem] mb-3 font-medium">Show Orders for</p>
      <SelectBar name={"showOnDate"} options={datesDatas} placeholder={"All"} />
      <div className="flex justify-between my-4">
        <div>
          <p className="text-[.85rem] mb-3 font-medium">From</p>
          <div className="relative">
            <input
              className="p-2 rounded-md outline-none border date-input"
              type="date"
            />
            <span className="placeholder absolute top-2 left-2 text-gray-600 text-[.85rem]">
              Pick a date
            </span>
          </div>
        </div>
        <div>
          <p className="text-[.85rem] mb-3 font-medium">To</p>
          <div className="relative">
            <input
              className="p-2 rounded-md outline-none border date-input"
              type="date"
            />
            <span className="placeholder absolute top-2 left-2 text-gray-600 text-[.85rem]">
              Pick a date
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date;
