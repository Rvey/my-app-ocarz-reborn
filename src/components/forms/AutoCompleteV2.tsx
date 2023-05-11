import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import Select from "react-select";

type Props = {
  data: any;
  setSelectedOption: (value: any) => void;
  param: string | number | null | undefined;
  title?: string;
};
export default function AutoCompleteV2({
  data,
  setSelectedOption,
  param,
  title = "marque",
}: any) {
  let selected = data?.find((item: any) => item.id == param);

  const styleConfig = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "transparent",
      borderRadius: "0",
      margin: "4px",
      fontSize: "12px",
      padding: "5px",
    }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        color: !isSelected ? "#000" : "#fff",
        cursor: isDisabled ? "not-allowed" : "default",
        fontSize: "12px",
        borderRadius: "0px",
        marginTop: "5px",
        padding: "10px",
      };
    },
    menu: (styles: any) => ({
      ...styles,
      borderRadius: "0px",
    }),
  };
  return (
    <>
      <div className="flex flex-wrap justify-between p-2">
        <div className="w-[7rem]">
          <p className="mt-2 font-bold text-secondary">{title}</p>
        </div>
        <div className="w-full">
          {data ? (
            <Select
              key={selected}
              styles={styleConfig}
              classNamePrefix="react-select"
              defaultValue={{
                label: selected?.name,
                value: selected?.id,
              }}
              isDisabled={false}
              isLoading={false}
              isClearable
              isSearchable
              onChange={(e) => {
                setSelectedOption(e?.value);
              }}
              options={data?.map((el: any) => ({
                label: el.name,
                value: el.id,
              }))}
            />
          ) : (
            <div>
              <Select
                styles={styleConfig}
                isLoading={true}
                placeholder="Chargement"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
