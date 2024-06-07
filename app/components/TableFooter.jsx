import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TableFooter = () => {
  return (
    <div className="flex justify-between mt-3">
      {/* FOOTER LEFT */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-1 min-w-[100px]">
          <h4 className="text-gray-500 text-[.8rem]">Displaying</h4>{" "}
          <span className="font-medium text-[.8rem]">15</span>
        </div>
        <div className="flex items-center gap-1 min-w-[100px]">
          <h4 className="text-gray-500 text-[.8rem]">Out of</h4>{" "}
          <span className="font-medium text-[.8rem]">104</span>
        </div>
      </div>
      {/* FOOTER RIGHT */}
      <div className="flex px-4 items-center gap-3">
        <button className="cursor-pointer active:scale-[.9] duration-200 ease-in-out">
          <ArrowBackIosIcon sx={{ fontSize: "15px" }} />
        </button>
        <h4 className="text-[.8rem] text-gray-500">Previous</h4>
        <span className="text-[.9rem] cursor-pointer p-1 px-2">1</span>
        <span className="p-1 px-2 text-[.9rem] cursor-pointer border rounded-md">
          2
        </span>
        <span className="text-[.9rem] cursor-pointer p-1 px-2">3</span>
        <h4 className="text-[.8rem] text-gray-500">Next</h4>
        <button className="cursor-pointer active:scale-[.9] duration-200 ease-in-out">
          <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
