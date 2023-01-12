import { Disclosure, Transition } from "@headlessui/react";
import React, { useEffect } from "react";
import { Tag } from "../Shared/Tag";
import { Problem } from "../../Types/types";

export function ProblemOption({ problem, machineName }: { problem: Problem, machineName: string}) {

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="border-b-2 border-gray-100 dark:border-gray-800 py-4 px-4 w-full transition duration-300">
            <Disclosure.Button type="submit" className="flex  justify-between w-full p-2 transition duration-300">
              <p className="text-black dark:text-gray-400 transition duration-300">{problem.description}</p>
              <Tag text={machineName} />
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
                  {problem.solutions.length > 1 ? (
                    <ul className="list-disc list-inside">
                    {problem.solutions.map((solution) => (
                      <li className="text-black dark:text-gray-400 " key={solution}>
                        {solution}
                      </li>
                    ))}
                  </ul>
                  ) : (
                    <p>suck</p>
                  )}
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  );
}
