import React from "react";

const Select = ({ label, value, options, onChange, ...props }) => {
  return (
    <span {...props}>
      <span>{label}: </span>
      <select value={value} onChange={onChange}>
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </span>
  );
};

export default Select;
