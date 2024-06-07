"use client";
import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchBar from "./SearchBar";
import RepeatIcon from "@mui/icons-material/Repeat";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EditModal from "./EditModal";
import FilterBox from "./FilterBox";

const Header = ({
  showData,
  setShowData,
  tableData,
  setFilteredValue,
  filteredValue,
}) => {
  //State for controlling the table column edit modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  //State for controlling the filter box
  const [filterBox, setFilterBox] = useState(false);

  return (
    <div className="w-full h-auto block relative">
      <div className="w-full p-5 pb-2">
        <h3 className="font-bold tracking-wider text-[1.1rem]">Waitlist</h3>

        {/* DASH IFO */}
        <div className="w-full h-auto flex gap-2 my-4 flex-wrap">
          <div className="flex flex-1 text-[.9rem] p-2 border min-w-[200px] border-black rounded-[.2rem] gap-1">
            <h4 className="font-medium">All waitLists</h4>
            <span className="font-light">100</span>
          </div>
          <div className="flex flex-1 text-[.9rem] p-2 border min-w-[200px] border-gray-300 rounded-[.2rem] gap-1">
            <h4 className="font-medium">Newly Added</h4>
            <span className="font-light">50</span>
          </div>
          <div className="flex flex-1 text-[.9rem] p-2 border min-w-[200px] border-gray-300 rounded-[.2rem] gap-1">
            <h4 className="font-medium">Leads</h4>
            <span className="font-light">20</span>
          </div>
        </div>

        {/* ADD FILTER */}
        <div className="w-full gap-6 flex justify-between items-center">
          <div
            onClick={() => setFilterBox(!filterBox)}
            className="flex cursor-pointer duration-300 active:scale-[.98] ease-in-out bg-slate-200 w-28 items-center p-2 rounded-md"
          >
            <FilterAltIcon />
            <h3 className="text-[.88rem] whitespace-nowrap">Add filter</h3>
          </div>
          <div className="flex items-center gap-4">
            <SearchBar placeHolder={"Search client"} />
            <ul className="flex gap-4">
              <li className="active:scale-[.92] duration-300 ease-linear cursor-pointer">
                <RepeatIcon />
              </li>
              <li
                onClick={() => setEditModalOpen(!editModalOpen)}
                className="active:scale-[.92] duration-300 ease-linear cursor-pointer"
              >
                <SpaceDashboardIcon />
              </li>
              <li className="active:scale-[.92] duration-300 ease-linear cursor-pointer">
                <FileDownloadIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between px-4">
        {/* FILTER BOX */}
        <FilterBox
          filteredValue={filteredValue}
          setFilteredValue={setFilteredValue}
          tableData={tableData}
          filterBox={filterBox}
          setFilterBox={setFilterBox}
        />
        {/* TABLE COLUMN EDIT BOX   */}
        <EditModal
          showData={showData}
          setShowData={setShowData}
          editModalOpen={editModalOpen}
          setEditModalOpen={setEditModalOpen}
        />
      </div>
    </div>
  );
};

export default Header;
