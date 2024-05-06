import React from "react";
import "./Input.css";
const InputBox = ({
  name,
  type,
  id,
  value,
  placeholer,
  icon,
  disable = false,
}) => {
  return (
    <div className="input-cms">
      <input
        name={name}
        type={type}
        placeholder={placeholer}
        defaultValue={value}
        id={id}
        disabled={disable}
        className={name === "title" ? "input-box-title" : `input-box`}
      />
      <i className={"fa-" + icon + " input-icon"}></i>
    </div>
  );
};

export default InputBox;
