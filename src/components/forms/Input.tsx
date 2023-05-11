import React from "react";

type inputProps = {
  title: string;
  type: string;
  placeholder: string;
  value: string | number | undefined;
  setInputValue: React.Dispatch<React.SetStateAction<any>>;
};

export default function Input({
  title,
  type,
  placeholder,
  value,
  setInputValue,
}: inputProps) {
  return (
    <div className="w-full">
      <p className="mt-2 text-[14px] font-bold text-secondary">{title}</p>
      <div className="w-full">

      <input
        type={type}
        onChange={(e) => setInputValue(e.target.value)}
        value={value}
        className="cursor-default overflow-hidden border-[1px]  text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-35 focus-visible:ring-offset-2 sm:text-sm p-3 bg-primary-light border-gray-400 border-opacity-60 text-black m-1 w-[-webkit-fill-available]"
        />
        </div>
    </div>
  );
}
