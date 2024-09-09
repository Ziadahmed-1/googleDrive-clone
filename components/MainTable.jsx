import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faCaretDown,
  faCircleUser,
  faDownload,
  faEllipsisVertical,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
faCircleUser;
faTrash;
faDownload;
faStar;

function MainTable({ nameSorting, setNameSorting }) {
  function handleSorting() {
    if (nameSorting === "" || nameSorting === "des") {
      setNameSorting("asc");
    } else {
      setNameSorting("des");
    }
  }
  return (
    <div className="flex  justify-center cursor-default flex-col w-full pr-4 mt-4 ">
      <div className="flex items-center  justify-between py-1 ">
        <div className="flex w-1/4 min-w-52 mr-4 ">
          <div
            className="flex gap-4 justify-center items-center hover:bg-neutral-200 rounded-2xl px-2 py-1 cursor-pointer "
            onClick={handleSorting}
          >
            <h5>Name</h5>
            {nameSorting === "asc" ? (
              <FontAwesomeIcon icon={faArrowUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-20 2xl:gap-32">
            <div className="flex justify-center items-center gap-2">
              <h6>Owner</h6>
            </div>

            <div className=" flex hover:bg-neutral-200 rounded-2xl px-2 py-1 cursor-pointer ">
              <h6 className="mr-2">Last modified</h6>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <h6 className="ml-4 w-3 ">Location</h6>
            <div className=" invisible flex gap-2">
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer p-1 hover:bg-neutral-300 rounded-full"
              />
              <FontAwesomeIcon
                icon={faDownload}
                className="cursor-pointer p-1 hover:bg-neutral-300 rounded-full"
              />
              <FontAwesomeIcon
                className="cursor-pointer p-1 hover:bg-neutral-300 rounded-full "
                icon={faStar}
              />
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              className="hover:bg-neutral-200 rounded-3xl cursor-pointer px-[0.9rem] py-2"
              icon={faEllipsisVertical}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default MainTable;
