import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface information {
  info: string[];
  selected: string;
}

export function Dropdown(props: information) {
  const [selectedValue, setSelected] = useState(props.selected);
  return (
    <div className="sm:w-72 mb-3 w-full">
      <Listbox value={selectedValue} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className="relative w-full dark:!text-white rounded-lg dark:hover:!bg-gray-900 bg-white dark:!bg-gray-800 
          py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-gray-300 focus-visible:ring-2 
          focus-visible:ring-white dark:focus-visible:ring-gray-900 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 
          focus-visible:ring-offset-gray-300 dark:focus-visible:ring-offset-white sm:text-sm"
          >
            <span className="block truncate">{selectedValue}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 " aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg !ring-1 
            ring-black !ring-opacity-5 focus:outline-none sm:text-sm dark:bg-gray-700 dark:ring-white">
              {props.info.map((Listitem, ListitemIdx) => (
                <Listbox.Option
                  key={ListitemIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-200 dark:bg-gray-900" : "text-gray-900"
                    }`
                  }
                  value={Listitem}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate dark:!text-white ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {Listitem}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900 dark:text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
