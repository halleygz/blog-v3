import React from "react";

const InputFields = ({
  content,
  name,
  id,
  type,
  value,
  onChange,
  placeholder = "",
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-1" htmlFor={id}>{content}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#E6B9A6] bg-transarent"
      />
    </div>
  );
};

export default InputFields;
