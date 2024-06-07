import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Loading from "./Loading";

const EditModal = ({
  editModalOpen,
  setEditModalOpen,
  showData,
  setShowData,
}) => {
  //Returing null if modal is closed
  if (!editModalOpen) return null;

  const [isLoading, setLoading] = useState(false);

  //Difining a state as temporary for not change the table content dring input onchange occur
  const [tempShowData, setTempShowData] = useState(showData);

  //Assigning actual data to temp data
  useEffect(() => {}, [editModalOpen, showData]);

  //inputs for looping
  const editColoumDatas = [
    "CreatedOn",
    "Payer",
    "Status",
    "Email",
    "PayerPhone",
    "Services",
    "Scheduled",
  ];

  //Input handle change for changing the boolean values
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setTempShowData({ ...tempShowData, [name]: checked });
  };

  //Apply button to proceed
  const handleApply = () => {
    try {
      setLoading(true);
      setShowData(tempShowData);
      setTimeout(() => {
        setLoading(false);
        setEditModalOpen(false);
      }, 700);
    } catch (error) {
      console.log("Error in handle apply of the teble column edit", error);
      setLoading(false);
    }
  };

  //Reset to uncheck all inputs and apply to see the changes
  const handleResetDefault = () => {
    try {
      const resetData = {};
      for (let key in showData) {
        resetData[key] = true;
      }
      setTempShowData(resetData);
    } catch (error) {
      console.log(
        "Error in handle reset to the default of the teble column edit",
        error
      );
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="absolute duration-300 right-4  ease-in-out mt-[.95rem]  rounded-md  p-3 w-[30%] min-w-[290px] h-[432px] bg-white border">
      <div className="flex justify-between">
        <h3 className="font-semibold my-1 text-[#000000dc]">Edit Columns</h3>
        <div
          className="cursor-pointer active:scale-[.9] duration-200 ease-in"
          //For closing the modal
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
            <input
              checked={tempShowData[data]}
              name={data}
              onChange={handleCheckboxChange}
              className="accent-black w-4 h-4"
              type="checkbox"
              id={data}
            />
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
        <button
          onClick={handleResetDefault}
          className="text-[.8rem] p-2 border cursor-pointer active:scale-[.95] duration-300 ease-in-out"
        >
          Reset to Default
        </button>
        <button
          onClick={handleApply}
          className="text-[.8rem] p-2 border bg-[black] text-white w-24 rounded-sm cursor-pointer active:scale-[.95] duration-300 ease-in-out "
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default EditModal;
