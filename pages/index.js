import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/NavBar";
import Column from "../components/Column";
import { USERS } from "../constants/constants";
import DetailListItem from "../components/DetailListItem";
import DropdownMatch from "../components/DropdownMatch";
import Modal from "../components/Modal";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import graph from "../public/new.png";
import graph2 from "../public/new2.png";

export default function Home() {
  const [employeeButtonSelect, setEmployeeButtonSelect] = useState(null);
  const [matchButtonSelect, setMatchButtonSelect] = useState(null);
  const [userDetailName, setUserDetailName] = useState(null);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useState(null);
  const toggleView = () => {
    setOpen((current) => !current);
  };
  const [matchesList, setMatchesList] = useState([
    { name: "Sarah Dunn" },
    { name: "Joyce Henley" },
    { name: "Dan Lewis" },
  ]);
  const [ITDPList, setITDPList] = useState([
    {
      name: "Joyce Henley",
      email: "victoria@dell.com",
      badgeID: "886644",
      skills: ["React", "Next.js", "UX/UI"],
      type: "ITDP",
      status: "matched",
      matches: ["Michael Dell"],
    },
    {
      name: "Sarah Dunn",
      email: "steph@dell.com",
      badgeID: "299266",
      skills: ["Python", "Lookin' cute"],
      type: "ITDP",
      status: "unmatched",
      matches: [],
    },
    {
      name: "Rachel Gilman",
      email: "rachel@dell.com",
      badgeID: "123456",
      title: "Queen of Dell University Relations",
      type: "Manager",
      status: "matched",
      matches: ["Joyce Henley"],
    },
    {
      name: "Michael Dell",
      email: "mike@dell.com",
      badgeID: "456789",
      title: "Founder & CEO",
      type: "Manager",
      status: "matched",
      matches: ["Joyce Henley"],
    },
    {
      name: "Dan Lewis",
      email: "mike@dell.com",
      badgeID: "456789",
      title: "Founder & CEO",
      type: "Manager",
      status: "unmatched",
      matches: [],
    },
    {
      name: "Angelica Totes",
      email: "victoria@dell.com",
      badgeID: "886644",
      skills: ["React", "Next.js", "UX/UI"],
      type: "ITDP",
      status: "matched",
      matches: ["Rachel Gilman", "Michael Dell"],
    },
    {
      name: "Lorem Ipsum",
      email: "steph@dell.com",
      badgeID: "299266",
      skills: ["Python", "Lookin' cute"],
      type: "ITDP",
      status: "unmatched",
      matches: [],
    },
    {
      name: "James Cole",
      email: "rachel@dell.com",
      badgeID: "123456",
      title: "Queen of Dell University Relations",
      type: "Manager",
      status: "matched",
      matches: ["Joyce Henley", "Tiana Stuart"],
    },
    {
      name: "Nick Jace",
      email: "mike@dell.com",
      badgeID: "456789",
      title: "Founder & CEO",
      type: "Manager",
      status: "matched",
      matches: ["Joyce Henley"],
    },
    {
      name: "Anna Common",
      email: "mike@dell.com",
      badgeID: "456789",
      title: "Founder & CEO",
      type: "Manager",
      status: "unmatched",
      matches: [],
    },
    {
      name: "Tiana Stuart",
      email: "victoria@dell.com",
      badgeID: "886644",
      skills: ["React", "Next.js", "UX/UI"],
      type: "ITDP",
      status: "matched",
      matches: [
        "Rachel Gilman",
        "Michael Dell",
        "Julia Barnes",
        "Tiana Stuart",
      ],
    },
    {
      name: "Yvette Knowles",
      email: "steph@dell.com",
      badgeID: "299266",
      skills: ["Python", "Lookin' cute"],
      type: "ITDP",
      status: "unmatched",
      matches: [],
    },
    {
      name: "Julia Barnes",
      email: "rachel@dell.com",
      badgeID: "123456",
      title: "Queen of Dell University Relations",
      type: "Manager",
      status: "matched",
      matches: ["Bentley Jones", "Tiana Stuart"],
    },
    {
      name: "Kane Darwin",
      email: "mike@dell.com",
      badgeID: "456789",
      title: "Founder & CEO",
      type: "Manager",
      status: "matched",
      matches: ["Paris France", "Tiana Stuart"],
    },
    {
      name: "Bob Thebuilder",
      email: "mike@dell.com",
      badgeID: "456789",
      title: "Founder & CEO",
      type: "Manager",
      status: "unmatched",
      matches: [],
    },
    {
      name: "Bentley Jones",
      email: "victoria@dell.com",
      badgeID: "886644",
      skills: ["React", "Next.js", "UX/UI"],
      type: "ITDP",
      status: "matched",
      matches: ["Rachel Gilman"],
    },
    {
      name: "Brooklyn Lake",
      email: "steph@dell.com",
      badgeID: "299266",
      skills: ["Python", "Lookin' cute"],
      type: "ITDP",
      status: "matched",
      matches: ["Paris France"],
    },
    {
      name: "Paris France",
      email: "rachel@dell.com",
      badgeID: "123456",
      title: "Queen of Dell University Relations",
      type: "Manager",
      status: "matched",
      matches: ["Brooklyn Lake", "Tiana Stuart"],
    },
    {
      name: "Jay Larson",
      email: "mike@dell.com",
      badgeID: "456789",
      title: "Founder & CEO",
      type: "Manager",
      status: "matched",
      matches: ["Brooklyn Lake"],
    },
    {
      name: "Robert Path",
      email: "mike@dell.com",
      badgeID: "456789",
      title: "Founder & CEO",
      type: "ITDP",
      status: "unmatched",
      matches: [],
    },
  ]);
  return (
    <div className="h-screen bg-red-100">
      {/* Nav Bar */}
      <Navbar />

      {/* Content */}
      <div className="h-full bg-white flex">
        {/* Left */}
        <div className="h-full bg-white md:w-4/6 w-7/12  border-r border-slate-400">
          <div className="font-medium mt-6 ml-8">
            Use dropdown menus to view employee information and matches:
          </div>
          <div className="mt-6 flex space-x-24 justify-center">
            <Dropdown
              label="Select Employee Type"
              setEmployeeButtonSelect={setEmployeeButtonSelect}
              employeeButtonSelect={employeeButtonSelect}
            />
            <DropdownMatch
              label="Select Match Status"
              setMatchButtonSelect={setMatchButtonSelect}
              matchButtonSelect={matchButtonSelect}
            />
          </div>
          <div className="h-10 bg-[#0076ce] mx-8 mt-6 rounded-t-md text-white font-medium py-2 flex">
            <div className="ml-14">Name</div>
            <div className="ml-16 font-normal italic">Role</div>
            <div className="grow"></div>
            <div className="mr-8">Match Status</div>
          </div>
          <Column
            label="List"
            employeeButtonSelect={employeeButtonSelect}
            matchButtonSelect={matchButtonSelect}
            ITDPList={ITDPList}
            userDetailName={setUserDetailName}
          />

          <div
            className="mt-6 flex space-x-24 justify-center"
            onClick={toggleView}
          >
            <Button
              label="View Checklist"
              additionalFormatting="bg-[#F2AF00] text-white hover:bg-[#6EA204]"
              onClick={toggleView}
            />
            <Button
              label="Preview Email Template"
              additionalFormatting="bg-[#6EA204] text-white hover:bg-[#6EA204]"
              onClick={() => setmodelView(!modelView)}
            />
          </div>
        </div>
        {/* Right */}
        <div className="w-5/12 md:w-1/3 bg-[#EEEEEE]">
          <div className="text-2xl text-center mt-4 font-roboto font-bold">
            Details
          </div>
          <div className="mx-4 text-center">
            {employeeButtonSelect == "Manager" && "Manager"}
            {employeeButtonSelect == "ITDP" && "ITDP"}
          </div>
          <div className="mx-8 mt-4 pb-4 border-b border-slate-400">
            <DetailListItem label="Name:" info={userDetailName} />
            <DetailListItem label="BadgeID:" info="123456" />
            <DetailListItem label="Email:" info="user@dell.com" />
          </div>
          <div>
            <div className="text-2xl text-center mt-4 font-roboto font-bold">
              Matches
            </div>
            <div className="mx-4 text-center">
              {employeeButtonSelect == "Manager" && "ITDPs"}
              {employeeButtonSelect == "ITDP" && "Managers"}
            </div>
            <div
              className="mx-16 mt-4 pb-4 h-[30rem] border overflow-auto bg-white border-slate-400 overscroll-contain
            "
            >
              {ITDPList.map((ITList) => (
                <div className="">
                  <DetailListItem info={ITList.matches} matchStrength="M#P#" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full pt-4 px-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-4/5 h-[40rem]">
                    <div className="bg-white px-4 pt-5 sm:p-6 ">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-gray-900"
                          >
                            Preview Automated Email List
                          </Dialog.Title>
                          <div className="max-w-full h-[25rem] m-6 overflow-auto overscroll-contain">
                            <Image
                              alt="graph"
                              src={graph}
                              layout="intrinsic"
                              objectFit="contain"
                            />
                            <Image
                              alt="graph2"
                              src={graph2}
                              layout="intrinsic"
                              objectFit="contain"
                            />
                          </div>
                          <div className="mt-2">
                            <p className=" ml-6 font-medium  text-gray-800">
                              Are you ready to send out automated emails?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 pt-2 bg-[#6E2585] text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                      >
                        Send!
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}
