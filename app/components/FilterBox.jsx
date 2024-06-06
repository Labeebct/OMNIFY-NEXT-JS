import React from "react";
import SidebarIconLi from "./SidebarIconLi";
import Date from "./FilterBox/Date";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const FilterBox = ({ filterBox, setFilterBox }) => {
  if (!filterBox) return null;

  const sidNavLi = [
    {
      id: 1,
      icon: CalendarTodayIcon,
      navHead: "Scheduled Date",
    },
    { id: 2, icon: PeopleOutlineIcon, navHead: "People" },
    { id: 3, icon: WidgetsIcon, navHead: "Services / Products" },
  ];

  return (
    <div className="absolute duration-300 left-4  ease-in-out mt-[.95rem]  rounded-md   w-[55.9%] min-w-[290px] h-[400px] bg-white border">
      <div className="w-full flex border-b h-[85%]">
        <div className="w-60 bg-slate-100 border-r">
          <SidebarIconLi sidNavLi={sidNavLi} />
        </div>
        <div className="flex-1">
          <Date />
        </div>
      </div>
      <div className="flex justify-end w-full h-[15%] px-2">
        <div className="flex items-center gap-2">
          <button className="text-[.8rem] p-2 border cursor-pointer active:scale-[.95] duration-300 ease-in-out">
            Reset to Default
          </button>
          <button className="text-[.8rem] p-2 border bg-[black] text-white w-24 rounded-sm cursor-pointer active:scale-[.95] duration-300 ease-in-out ">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
