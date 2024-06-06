import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const EditModal = ({ editModalOpen, setEditModalOpen }) => {
  const editColoumDatas = [
    "Order Created On",
    "Payer",
    "Status",
    "Email",
    "Payer Phone",
    "Service",
    "Scheduled",
  ];

  if (!editModalOpen) return null;
  return (
    <div className="absolute duration-300 right-4  ease-in-out mt-[.95rem]  rounded-md  p-3 w-[30%] min-w-[290px] h-[432px] bg-white border">
      <div className="flex justify-between">
        <h3 className="font-semibold my-1 text-[#000000dc]">Edit Columns</h3>
        <div
          className="cursor-pointer active:scale-[.9] duration-200 ease-in"
          onClick={() => setEditModalOpen(false)}
        >
          <CloseIcon />
        </div>
      </div>
      <h5 className="text-[.8rem] text-gray-500 my-1">
        Select the columns to rearrange
      </h5>
      <div className="flex flex-col max-h-[285px] shadow-sm overflow-y-auto my-4 gap-2">
        {editColoumDatas.map((data, index) => (
          <div key={index} className="flex items-center gap-2">
            <input className="accent-black w-4 h-4" type="checkbox" id={data} />
            <label
              htmlFor={data}
              className="text-[.77rem] p-3 border flex-1 rounded-md cursor-pointer"
            >
              {data}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-2">
        <button className="text-[.8rem] p-2 border cursor-pointer active:scale-[.95] duration-300 ease-in-out">
          Reset to Default
        </button>
        <button className="text-[.8rem] p-2 border bg-[black] text-white w-24 rounded-sm cursor-pointer active:scale-[.95] duration-300 ease-in-out ">
          Apply
        </button>
      </div>
    </div>
  );
};

export default EditModal;
