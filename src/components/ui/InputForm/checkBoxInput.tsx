// components/inputs/CheckboxInput.tsx
import React from "react";

type CheckboxInputProps = {
  label: string;
  checked?: boolean;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, checked }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600 border border-gray-200"
      />
      <label className="text-gray-700">{label}</label>
    </div>
  );
};

export default CheckboxInput;
