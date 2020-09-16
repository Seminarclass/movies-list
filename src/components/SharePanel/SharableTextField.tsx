import React from 'react';

interface SharableTextFieldProps {
  generatedURL: string;
}

export default function SharableTextField({ generatedURL }: SharableTextFieldProps) {
  return (
    <div className="
      relative rounded border-gray-400 shadow
      form-input flex flex-wrap w-full bg-gray-50
    ">
      {window.location.hostname}/{generatedURL}
    </div>
  );
}