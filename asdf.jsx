import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCaretDown,
  faDownload,
  faEllipsisVertical,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
function MainTable() {
  return (
    <div className="flex mt-4 flex-col w-full px-4">
      <div className="flex items-center justify-between  ">
        <div className="flex 2xl:w-1/2  --mr-[20.6rem] 2xl:mr-[25.5rem]">
          <div className="flex justify-center items-center  ">
            <h5 className="hover:bg-neutral-200 rounded-3xl cursor-pointer px-1 py-1">
              Name
            </h5>
            <FontAwesomeIcon
              className="hover:bg-neutral-200 rounded-3xl cursor-pointer px-3 py-2"
              icon={faArrowDown}
            />
          </div>
        </div>
        <div className="flex w-[58%]  justify-between items-center ">
          <div className="flex justify-between  ">
            <h6 className="w-28 py-2 mr-6 2xl:mr-4 2xl:ml-14">Owner</h6>
            <div className="flex justify-center items-center cursor-pointer 2xl:ml-14  px-3 py-1 mr-14 2xl:mr-2 hover:bg-neutral-200 rounded-3xl ">
              <h6 className="mr-2 rounded-3xl  ">Last modidfied</h6>
              <FontAwesomeIcon className=" " icon={faCaretDown} />
            </div>
            <h6 className="mr-18 py-2 2xl:ml-28">File size</h6>
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
