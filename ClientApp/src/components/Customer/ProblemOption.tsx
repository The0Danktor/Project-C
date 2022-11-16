import { Disclosure, Transition } from "@headlessui/react";
import React from "react";

interface ProblemMenuProps {
  title: string;
  machineType: string;
  description?: string;
  solutions: string[];
}

export function ProblemOption(props: ProblemMenuProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="border-b-2 border-gray-100 dark:border-gray-800 py-4 px-4 w-full transition duration-300">
            <Disclosure.Button className="flex  justify-between w-full p-2 transition duration-300">
              <p className="text-black dark:text-gray-400 transition duration-300">{props.title}</p>
              <p className="px-2 rounded-xl  border-2  text-black dark:text-gray-400 text-sm bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-800 transition duration-300">
                {props.machineType}
              </p>
            </Disclosure.Button>
            <Transition
              show={open}
              as={React.Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel>
                {/*ul with solutions */}
                <div className="border-t-2 border-gray-100 dark:border-gray-800 py-4 px-4 w-full transition duration-300">
                  <p className="text-black dark:text-gray-400 ">
                    Mogelijke oplossingen:
                  </p>
                  <ul className="list-disc list-inside">
                    {props.solutions.map((solution) => (
                      <li className="text-black dark:text-gray-400 ">
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  );
}
