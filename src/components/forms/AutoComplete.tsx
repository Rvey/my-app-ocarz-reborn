import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect } from "react";
import React from "react";
import SpinnerLoader from "../shared/SpinnerLoader";
import { useSearchParams } from "next/navigation";

type AutoCompleteProps = {
  value: string | any;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  isLoading?: boolean;
};

export default function AutoComplete({
  value,
  setValue,
  data,
  isLoading,
  searchQuery,
  setSearchQuery,
  title,
}: AutoCompleteProps) {
  const filteredData =
    searchQuery === ""
      ? data
      : data?.filter((el: any) =>
          el.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
        );

        const searchParams = useSearchParams();
  const selectedBrand = data?.find(
    (item: any) => item["@id"] === searchParams.get("brand")
  );
  return (
    <div className="flex flex-wrap justify-between p-2">
      <div className="w-[7rem]">
        <p className="mt-2 text-[14px] font-bold text-secondary">{title}</p>
      </div>
      <div className="w-[12rem]">
        <Combobox defaultValue={selectedBrand?.name} disabled={isLoading}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden bg-primary-light text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-normal focus-visible:ring-opacity-35 focus-visible:ring-offset-2 sm:text-sm">
              <Combobox.Input
                className={`text-gray-900 w-full border-[1px] border-primary-normal py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none  focus-visible:ring-2 focus-visible:ring-primary-normal focus-visible:ring-opacity-35 focus-visible:ring-offset-2 ${
                  isLoading
                    ? "bg-white text-secondary-light border-primary-normal"
                    : "bg-primary-light"
                }`}
                displayValue={(brand: any) => brand}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                {isLoading ? (
                  <SpinnerLoader />
                ) : (
                  <ChevronUpDownIcon
                    className="text-gray-400 h-5 w-5"
                    aria-hidden="true"
                  />
                )}
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setSearchQuery("")}
            >
              <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto bg-primary-light py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredData?.length === 0 && searchQuery !== "" ? (
                  <div className="text-gray-700 relative cursor-default select-none px-4 py-2">
                    Nothing found.
                  </div>
                ) : (
                  filteredData?.map((el: any) => (
                    <Combobox.Option
                      key={el.id}
                      value={el.name}
                      onClick={() => {
                        setValue(el["@id"]);
                        setSearchQuery("");
                      }}
                      className={({ active, selected }) =>
                        `${active ? "bg-primary-normal" : "text-gray-900"}
                            cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                    >
                      {({ active, selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium " : "font-normal"
                            }`}
                          >
                            {el.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              {selected && (
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
}
