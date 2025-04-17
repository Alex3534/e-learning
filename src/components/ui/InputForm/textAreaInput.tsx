// components/inputs/TextareaInput.tsx
import React from "react";

type TextareaInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextareaInput: React.FC<TextareaInputProps> = ({ label, name, value, placeholder, onChange }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextareaInput;
