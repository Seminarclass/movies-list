import React from 'react';

interface InputFieldProps {
  className?: string;
  placeholder?: string;
  value: string | number | readonly string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  className = '',
  placeholder = 'Your name here!',
  value,
  onChange
}: InputFieldProps) {
  return (
    <input
      id="name"
      className={`
        flex w-full
        border border-gray-400 rounded shadow p-2
        leading-5 bg-white
        focus:outline-none
        sm:text-sm text-dark
        ${className}
      `}
      placeholder={placeholder}
      type="name"
      value={value}
      onChange={onChange}
    />
  );
}