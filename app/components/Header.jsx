import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchBar from "./SearchBar";
import RepeatIcon from '@mui/icons-material/Repeat';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Header = () => {
  return (
    <div className="w-full p-6">
      <h3 className="font-bold tracking-wider text-[1.1rem]">Waitlist</h3>

      {/* DASH IFO */}
      <div className="w-full h-auto flex gap-2 my-4 flex-wrap">
        <div className="flex flex-1 text-[.9rem] p-2 border min-w-[200px] border-black rounded-[.2rem] gap-1">
          <h4 className="font-medium">All waitLists</h4>{" "}
          <span className="font-light">100</span>
        </div>
        <div className="flex flex-1 text-[.9rem] p-2 border min-w-[200px] border-gray-300 rounded-[.2rem] gap-1">
          <h4 className="font-medium">Newly Added</h4>{" "}
          <span className="font-light">50</span>
        </div>
        <div className="flex flex-1 text-[.9rem] p-2 border min-w-[200px] border-gray-300 rounded-[.2rem] gap-1">
          <h4 className="font-medium">Leads</h4>{" "}
          <span className="font-light">20</span>
        </div>
      </div>

      {/* ADD FILTER */}
      <div className="w-full gap-6 flex justify-between items-centerf">
        <div className="flex bg-slate-200 w-28 items-center p-2 rounded-md">
          <FilterAltIcon />
          <h3 className="text-[.88rem] whitespace-nowrap">Add filter</h3>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <ul className="flex gap-4">
            <li><RepeatIcon  /></li>
            <li><SpaceDashboardIcon/></li>
            <li><FileDownloadIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
