// components/inputs/RadioGroupInput.tsx
import React from "react";

type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupInputProps = {
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioGroupInput: React.FC<RadioGroupInputProps> = ({ name, value, options, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold text-gray-700 mb-1">{name}</label>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt.value} className="inline-flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroupInput;
