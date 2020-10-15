import React from 'react';

interface SharableTextFieldProps {
  generatedURL: string;
}

export default function SharableTextField({ generatedURL }: SharableTextFieldProps) {
  return (
    <div className="
      relative rounded border-gray-400 shadow
      form-input flex w-full bg-gray-50 whitespace-no-wrap overflow-x-auto
    ">
      https://{window.location.hostname}/{generatedURL}
    </div>
  );
}