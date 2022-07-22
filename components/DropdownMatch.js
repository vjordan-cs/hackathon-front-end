import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropdownMatch = ({ setMatchButtonSelect, matchButtonSelect }) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex justify-center w-48 text-xs md:w-64 rounded-md shadow px-6 py-3 bg-[#eeeeee] md:text-sm font-medium text-gray-700 hover:bg-gray-50 hover:ring-2 hover:ring-[#C8C9C7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#41B6E6]">
          {matchButtonSelect == null && "Select Match Status"}
          {matchButtonSelect == "matched" && "Matched"}
          {matchButtonSelect == "unmatched" && "Unmatched"}
          {matchButtonSelect == "all" && "Matched & Unmatched"}

          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item onClick={() => setMatchButtonSelect("matched")}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Matched
                </a>
              )}
            </Menu.Item>
            <Menu.Item onClick={() => setMatchButtonSelect("unmatched")}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Unmatched
                </a>
              )}
            </Menu.Item>
            <Menu.Item onClick={() => setMatchButtonSelect("all")}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  All
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMatch;
