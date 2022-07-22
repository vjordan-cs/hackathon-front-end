import { ChevronRightIcon, FireIcon } from "@heroicons/react/solid";

const ListItem = ({ numMatches, name, type, status }) => {
  return (
    <div className="flex h-12 cursor-pointer bg-[#eeeeee] hover:bg-[#C8C9C7] hover:font-bold border-b border-slate-400">
      <ChevronRightIcon
        className="ml-4 h-8 w-8 text-slate-500 my-auto"
        aria-hidden="true"
      />
      <div className="my-auto ml-2 font-roboto text-sm md:text-base">
        {name}
      </div>
      <div className="my-auto text-xs ml-4 italic font-light">{type}</div>
      <div className="grow"></div>
      {status == "unmatched" && (
        <FireIcon
          className="mr-2 h-4 w-4 text-[#EE6411] my-auto"
          aria-hidden="true"
        />
      )}
      <div className="my-auto mr-4 text-sm md:text-base">{status}</div>
    </div>
  );
};

export default ListItem;
