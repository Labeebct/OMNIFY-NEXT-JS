import React from "react";
import Select from "react-select";

const SelectBar = ({ name, options, changeHandler, selectedOption }) => {
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: 232,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 232,
      overflowY: "auto",
    }),
  };

  return (
    <Select
      name={name}
      options={options}
      value={selectedOption}
      onChange={changeHandler}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default SelectBar;
