import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

const DataStatus = ({ status }) => {
  const statusBg = () => {
    switch (status) {
      case "Active":
        return "bg-[#f0fdf9]";
      case "Inactive":
        return "bg-[#f1f5f9]";
      case "Lead":
        return "bg-[#eff6ff]";
      default:
        return "bg-[black]";
    }
  };

  const statusColor = () => {
    switch (status) {
      case "Active":
        return "#15803d";
      case "Inactive":
        return "#334155";
      case "Lead":
        return "#3b82f6";
      default:
        return "black";
    }
  };

  return (
    <div
      className={`${statusBg()} p-2 rounded-2xl w-20 flex items-center gap-1 font-semibold`}
    >
      <span>
        <CircleIcon sx={{ fontSize: "11px", color: statusColor() }} />
      </span>
      <h3 style={{ color: statusColor() }}>{status}</h3>
    </div>
  );
};

export default DataStatus;
