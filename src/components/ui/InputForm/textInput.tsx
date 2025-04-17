import React from "react";

type TextInputProps = {
  label: string;
  name?: string;
  value?: string;
  placeholder?: string;
  handlechange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const TextInput: React.FC<TextInputProps> = ({ label, name, value, placeholder, handlechange }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange= {handlechange}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextInput;
