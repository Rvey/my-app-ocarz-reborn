import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

const SortCard = ({nbrAnnounce}) => {
  const sort = [{'value':1,'name':'by date'}, {'value':2,'name':'by price'}]
  const [Model, setModel] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [queryModel, setQueryModel] = useState("");
  const filteredModel =
    queryModel === ""
      ? sort
      : sort?.filter((model: any) =>
          model.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queryModel.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className=" w-[70%]">
      <Combobox value={selectedModel} onChange={(e)=>{
          setModel(e['@id'])
          console.log(Model);
          
        }}>
        <div className="relative mt-1">
          <div className="focus-visible:ring-offset-teal-300 relative w-full cursor-default  overflow-hidden border-[1px] border-black  text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
            <Combobox.Input
              className="text-gray-900 w-full border-none  py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0"
              displayValue={(model: any) => model.name}
              onChange={(event) => setQueryModel(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="text-gray-400 h-5 w-5"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQueryModel("")}
          >
            <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredModel?.length === 0 && queryModel !== "" ? (
                <div className="text-gray-700 relative cursor-default select-none px-4 py-2">
                  Nothing found.
                </div>
              ) : (
                filteredModel?.map((model: any) => (
                  <Combobox.Option
                    key={model.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-primary-light text-black"
                          : "text-secondary"
                      }`
                    }
                    value={model}
                  >
                    {({ selectedModel, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selectedModel ? "font-medium" : "font-normal"
                          }`}
                        >
                          {model.name}
                        </span>
                        {selectedModel ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
      <div className="flex items-center">
        
      </div>
      <div className=" text-end me-10">
          <p className="2xl:text-4xl xl:text-[30px] md:text-[29px] text-primary"> {nbrAnnounce} <span className="text-sm  md:text-[10px] text-secondary	"> annonces automobile</span></p>
      </div>
    </div>
  );
};
export default SortCard;
