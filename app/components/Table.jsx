import React, { useState } from "react";
import DataStatus from "./dataStatus";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import TagIcon from "@mui/icons-material/Tag";

const Table = ({ tableData, showData }) => {


  return (
    <table className="w-full h-auto border">
      <thead>
        <tr>
          <td className="bg-slate-200 w-4 px-2">
            <input className="m-auto ml-[.06rem]" type="checkbox" disabled />
          </td>
          {showData.CreatedOn && (
            <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
              <div className="flex items-center space-x-1">
                <CalendarTodayIcon sx={{ fontSize: "15px" }} />
                <span>Created on</span>
              </div>
            </th>
          )}
          {showData.Payer && (
            <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
              <div className="flex items-center space-x-1">
                <PersonOutlineIcon sx={{ fontSize: "20px" }} />
                <span>Payer</span>
              </div>
            </th>
          )}
          {showData.Status && (
            <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
              <div className="flex items-center space-x-1">
                <DataUsageIcon sx={{ fontSize: "16px" }} />
                <span>Status</span>
              </div>
            </th>
          )}
          {showData.Email && (
            <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
              <div className="flex items-center space-x-1">
                <TagIcon sx={{ fontSize: "18px" }} />
                <span>Email</span>
              </div>
            </th>
          )}
          {showData.PayerPhone && (
            <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
              <div className="flex items-center space-x-1">
                <TagIcon sx={{ fontSize: "18px" }} />
                <span> Payer Phone</span>
              </div>
            </th>
          )}
          {showData.Services && (
            <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
              <div className="flex items-center space-x-1">
                <TagIcon sx={{ fontSize: "18px" }} />
                <span>Services</span>
              </div>
            </th>
          )}
          {showData.Scheduled && (
            <th className="font-light whitespace-nowrap min-w-[8rem] h-auto text-gray-700 bg-slate-200 text-[.75rem] p-2 border">
              <div className="flex items-center space-x-1">
                <CalendarTodayIcon sx={{ fontSize: "15px" }} />
                <span>Scheduled</span>
              </div>
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {/* //Mapping td datas */}
        {tableData.map((data, index) => (
          <tr key={data.id} className="border">
            <td className="m-auto">
              <input type="checkbox" className="m-auto translate-x-2" disabled />
            </td>
            {showData.CreatedOn && (
              <td className="font-medium text-[.68rem] text-black p-3 border">
                {data.createOn}
              </td>
            )}
            {showData.Payer && (
              <td className="font-medium text-[.68rem] text-black p-3 border">
                {data.payer}
              </td>
            )}
            {showData.Status && (
              <td className="font-medium text-[.68rem] text-black p-3 border">
                {/* //Status component for change color according to colors */}
                <DataStatus status={data.status} />
              </td>
            )}
            {showData.Email && (
              <td className="font-medium text-[.68rem] text-black p-3 border">
                {data.email}
              </td>
            )}
            {showData.PayerPhone && (
              <td className="font-medium text-[.68rem] text-black p-3 border">
                {data.payerPhone}
              </td>
            )}
            {showData.Services && (
              <td className="font-medium text-[.68rem] text-black p-3 border">
                {data.services}
              </td>
            )}
            {showData.Scheduled && (
              <td className="font-medium text-[.68rem] text-black p-3 border">
                {data.Scheduled}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
