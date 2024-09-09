"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faEllipsisVertical,
  faCircleUser,
  faDownload,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

function FolderRow({ folderName, setSelected, selected }) {
  const router = useRouter();
  function handleNavigating() {
    router.push(`/${folderName}`);
  }

  function handleFolderSelection() {
    let type = "folder";
    let name = folderName;
    let entityExtention = "Google Drive Folder";

    setSelected({
      type,
      name,
      entityExtention,
    });
  }

  return (
    <div
      className={`group  flex  cursor-default justify-center flex-col w-full pl-[1.3rem] pr-4 ${
        selected?.name === folderName ? "bg-[#C2E7FF]" : "hover:bg-neutral-200"
      } `}
      onDoubleClick={handleNavigating}
      onClick={handleFolderSelection}
    >
      <div className="flex items-center  justify-between py-1  ">
        <div className="flex w-1/4 mr-4 min-w-52">
          <div className="flex gap-4 justify-center items-center ">
            <FontAwesomeIcon icon={faFolder} />
            <h5 className="truncate">{folderName}</h5>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-20 2xl:gap-32">
            <div className="flex justify-center items-center gap-2">
              <FontAwesomeIcon className="size-5" icon={faCircleUser} />
              <h6>me</h6>
            </div>

            <div className="px-3 py-1  ">
              <h6 className="mr-2 truncate">Dec 9,2021 me</h6>
            </div>
            <h6 className="ml-4 ">-</h6>
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
              className="hover:bg-neutral-300 rounded-3xl cursor-pointer px-[0.9rem] py-2"
              icon={faEllipsisVertical}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default FolderRow;
