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
    <div className="w-[12rem] ">
      <p className="mt-2 text-[14px] font-bold text-secondary">{title}</p>
      <input
        type={type}
        onChange={(e) => setInputValue(e.target.value)}
        value={value}
        className="cursor-default overflow-hidden border-[1px] border-black bg-primary-light text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-normal focus-visible:ring-opacity-35 focus-visible:ring-offset-2 sm:text-sm py-2 px-2"
      />
    </div>
  );
}
