import ListItem from "./ListItem";
import { useState } from "react";

const Column = ({
  label,
  employeeButtonSelect,
  ITDPList,
  userDetailName,
  matchButtonSelect,
}) => {
  return (
    <div className="h-4/6 mx-8 bg-gray-100 border border-slate-400 overflow-auto">
      {ITDPList.map((ITList) => (
        <div>
          {/* managers */}
          {employeeButtonSelect == "Manager" &&
            ITList.type == "Manager" &&
            (matchButtonSelect == "All" || matchButtonSelect == null) && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
                {matchButtonSelect == "matched" && (
                  <div className="w-5 h-5 bg-red-100"></div>
                )}
              </div>
            )}
          {employeeButtonSelect == "Manager" &&
            ITList.type == "Manager" &&
            matchButtonSelect == "matched" &&
            ITList.status == "matched" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
          {employeeButtonSelect == "Manager" &&
            ITList.type == "Manager" &&
            matchButtonSelect == "unmatched" &&
            ITList.status == "unmatched" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
          {employeeButtonSelect == "Manager" &&
            ITList.type == "Manager" &&
            matchButtonSelect == "all" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
          {/* ITDP */}
          {employeeButtonSelect == "ITDP" &&
            ITList.type == "ITDP" &&
            (matchButtonSelect == "All" || matchButtonSelect == null) && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
                {matchButtonSelect == "matched" && (
                  <div className="w-5 h-5 bg-red-100"></div>
                )}
              </div>
            )}
          {employeeButtonSelect == "ITDP" &&
            ITList.type == "ITDP" &&
            matchButtonSelect == "matched" &&
            ITList.status == "matched" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
          {employeeButtonSelect == "ITDP" &&
            ITList.type == "ITDP" &&
            matchButtonSelect == "unmatched" &&
            ITList.status == "unmatched" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
          {employeeButtonSelect == "ITDP" &&
            ITList.type == "ITDP" &&
            matchButtonSelect == "all" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
          {/* All */}
          {(employeeButtonSelect == "All" || employeeButtonSelect == null) &&
            (matchButtonSelect == "All" || matchButtonSelect == null) && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
                {matchButtonSelect == "matched" && (
                  <div className="w-5 h-5 bg-red-100"></div>
                )}
              </div>
            )}
          {(employeeButtonSelect == "All" || employeeButtonSelect == null) &&
            matchButtonSelect == "matched" &&
            ITList.status == "matched" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
          {(employeeButtonSelect == "All" || employeeButtonSelect == null) &&
            matchButtonSelect == "unmatched" &&
            ITList.status == "unmatched" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
          {(employeeButtonSelect == "All" || employeeButtonSelect == null) &&
            matchButtonSelect == "all" && (
              <div onClick={() => userDetailName(ITList.name)}>
                <ListItem
                  numMatches="10+"
                  name={ITList.name}
                  type={ITList.type}
                  ITDPList={ITDPList}
                  status={ITList.status}
                />
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default Column;
