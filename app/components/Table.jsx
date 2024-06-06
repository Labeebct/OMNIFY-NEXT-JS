import React from "react";
import DataStatus from "./dataStatus";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import TagIcon from "@mui/icons-material/Tag";

const Table = ({ tableData }) => {
  return (
    <table className="w-full h-auto border">
      <thead>
        <tr>
          <th className="bg-slate-200 px-2">
            <input type="checkbox" disabled />
          </th>
          <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
            <div className="flex items-center space-x-1">
              <CalendarTodayIcon sx={{ fontSize: "15px" }} />
              <span>Created on</span>
            </div>
          </th>
          <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
            <div className="flex items-center space-x-1">
              <PersonOutlineIcon sx={{ fontSize: "20px" }} />
              <span>Payer</span>
            </div>
          </th>
          <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
            <div className="flex items-center space-x-1">
              <DataUsageIcon sx={{ fontSize: "16px" }} />
              <span>Status</span>
            </div>
          </th>
          <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
            <div className="flex items-center space-x-1">
              <TagIcon sx={{ fontSize: "18px" }} />
              <span>Email</span>
            </div>
          </th>
          <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
            <div className="flex items-center space-x-1">
              <TagIcon sx={{ fontSize: "18px" }} />
              <span> Payer Phone</span>
            </div>
          </th>
          <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
            <div className="flex items-center space-x-1">
              <TagIcon sx={{ fontSize: "18px" }} />
              <span>Services</span>
            </div>
          </th>
          <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
            <div className="flex items-center space-x-1">
              <CalendarTodayIcon sx={{ fontSize: "15px" }} />
              <span>Scheduled</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* //Mapping td datas */}
        {tableData.map((data, index) => (
          <tr key={index} className="border">
            <th>
              <input type="checkbox" disabled />
            </th>
            <td className="font-light text-[.65rem] p-3 border">
              {data.createOn}
            </td>
            <td className="font-light text-[.65rem] p-3 border">
              {data.payer}
            </td>
            <td className="font-light text-[.65rem] p-3 border">
              {/* //Status component for change color according to colors */}
              <DataStatus status={data.status} />
            </td>
            <td className="font-light text-[.65rem] p-3 border">
              {data.email}
            </td>
            <td className="font-light text-[.65rem] p-3 border">
              {data.payerPhone}
            </td>
            <td className="font-light text-[.65rem] p-3 border">
              {data.services}
            </td>
            <td className="font-light text-[.65rem] p-3 border">
              {data.Scheduled}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
