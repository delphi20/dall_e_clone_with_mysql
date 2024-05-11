import React from "react";

const FormField = ({
  LabelName,
  name,
  type,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center mb-2 gap-2">
        <label
          htmlFor={name}
          className="block text-sm text-gray-900 font-medium"
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        id={name}
        value={value}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus: ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
      
    </div>
  );
};

export default FormField;
