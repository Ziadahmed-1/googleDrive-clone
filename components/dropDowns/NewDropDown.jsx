import {
  faFileArrowUp,
  faFolderOpen,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function NewDropDown({ showNewDropDown }) {
  return (
    showNewDropDown && (
      <div className="absolute bg-white w-[19rem] z-10 rounded-md py-3 drop-shadow-xl">
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4">
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon className="size-4" icon={faFolderPlus} />
            <p className="text-sm">New folder</p>
          </div>
          <p className="text-xs ">Alt+C then F</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4">
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon className="size-4" icon={faFileArrowUp} />
            <p className="text-sm">File upload</p>
          </div>
          <p className="text-xs ">Alt+C then U</p>
        </div>
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4">
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon className="size-4" icon={faFolderOpen} />
            <p className="text-sm">Folder upload</p>
          </div>
          <p className="text-xs ">Alt+C then I</p>
        </div>
      </div>
    )
  );
}

export default NewDropDown;
