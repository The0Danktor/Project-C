import { NavSide } from "../components/Shared/NavSide";
import React from "react";
import { ProblemMenu } from "../components/Customer/ProblemMenu";
import { Disclosure, Transition } from "@headlessui/react";

export function TestPage() {
  return (
    <div className="bg-white dark:bg-gray-900 transition flex duration-300">
      <NavSide />
      <div className="bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>Toggle</Disclosure.Button>
              <Transition
                show={open}
                as={React.Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel>Panel</Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
