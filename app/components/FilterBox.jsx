"use client";

import React, { useState } from "react";
import SidebarIconLi from "./SidebarIconLi";
import Date from "./FilterBox/Date";
import People from "./FilterBox/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Services from "./FilterBox/Services";
import Loading from "./Loading";

const FilterBox = ({
  filterBox,
  setFilterBox,
  setFilteredValue,
  tableData,
}) => {
  //Returing null if modal is not triggered
  if (!filterBox) return null;

  //Keeping state for changing the right side of the filter box component
  const [currentComp, setCurrentComp] = useState("Scheduled Date");
  //State for keeping the value of the child
  const [filValue, setFilValue] = useState(tableData);
  const [isLoading, setLoading] = useState(false);

  //Function to track the current component selected
  const handleComponent = (comp) => {
    switch (comp) {
      case "Scheduled Date":
        setCurrentComp("Scheduled Date");
        break;
      case "People":
        setCurrentComp("People");
        break;
      case "Services / Products":
        setCurrentComp("Services / Products");
        break;
      default:
        setCurrentComp("Scheduled Date");
        break;
    }
  };

  const sidNavLi = [
    {
      id: 1,
      icon: CalendarTodayIcon,
      navHead: "Scheduled Date",
    },
    { id: 2, icon: PeopleOutlineIcon, navHead: "People" },
    { id: 3, icon: WidgetsIcon, navHead: "Services / Products" },
  ];

  //Apply button to make changes
  const handleApply = () => {
    setLoading(true);
    setFilteredValue(filValue);
    setTimeout(() => {
      setLoading(false);
      setFilterBox(false);
    }, 700);
  };

  //Reseeting the table content
  const handleReset = () => {
    setFilterBox(false);
    setFilteredValue(tableData);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="absolute duration-300 left-4 z-10  ease-in-out mt-[.95rem]  rounded-md   w-[55.9%] min-w-[290px] h-[433px] bg-white border">
      <div className="w-full flex border-b h-[87%]">
        <div className="flex-1 max-w-[250px] min-w-[55px] flex-shrink overflow-hidden bg-slate-100 border-r">
          {/* Looping the li of the left of the filterbox component */}
          <SidebarIconLi
            handleComponent={handleComponent}
            currentComp={currentComp}
            sidNavLi={sidNavLi}
          />
        </div>
        <div className="flex-1 overflow-x-auto min-w-[300px] bg-white border">
          {/* Rendering according to selected */}
          {currentComp === "Scheduled Date" ? (
            <Date />
          ) : currentComp === "People" ? (
            <People
              filteredValue={filValue}
              setFilteredValue={setFilValue}
              tableData={tableData}
            />
          ) : (
            <Services />
          )}
        </div>
      </div>
      <div className="flex justify-end w-full h-[13%] px-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            //Closing the modal a applying changes
            className="text-[.8rem] p-2 border cursor-pointer active:scale-[.95] duration-300 ease-in-out"
          >
            Reset to Default
          </button>
          <button
            //Closing the modal a applying changes
            onClick={handleApply}
            className="text-[.8rem] p-2 border bg-[black] text-white w-24 rounded-sm cursor-pointer active:scale-[.95] duration-300 ease-in-out "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
