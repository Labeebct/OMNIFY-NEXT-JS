import React from "react";
import Select from "react-select";

const SelectBar = ({
  name,
  options,
  changeHandler,
  placeholder,
  selectedOption,
}) => {

  //Custumising the style
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: 232,
      fontSize: "13px",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 232,
      overflowY: "auto",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "13px",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "13px",
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
      placeholder={placeholder}
    />
  );
};

export default SelectBar;
