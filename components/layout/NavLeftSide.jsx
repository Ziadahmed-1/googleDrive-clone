"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faClock,
  faCloud,
  faStar,
  faTrashCan,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLeftSide() {
  const [activeTab, setActiveTab] = useState("myDrive");
  const pathname = usePathname();
  console.log(pathname);
  useEffect(() => {
    if (pathname === "/starred") {
      setActiveTab("starred");
    } else {
      setActiveTab("myDrive");
    }
  }, [pathname]);
  return (
    <div className="px-6 py-6 bg-mainBg text-mainFont ">
      <div className="flex w-fit  items-center gap-4 rounded-xl shadow-custom-light cursor-pointer hover:bg-[#E9EEF6] transition-all duration-300 bg-white px-4 py-2 text-3xl">
        <span>+</span>
        <span className="text-lg">New</span>
      </div>
      <div className="flex flex-col  mt-6 ">
        <div className="flex gap-4 cursor-pointer text hover:bg-neutral-300 w-52 px-2 py-[0.3rem] rounded-2xl">
          <FontAwesomeIcon
            className="size-4 ml-2 text-mainFont"
            icon={faHouse}
          />
          <p className="text-sm">Home</p>
        </div>
        <Link href="/">
          <div
            className={`flex gap-4 cursor-pointer text  w-52 px-2 py-[0.3rem] rounded-2xl ${
              activeTab === "myDrive" ? "bg-[#C2E7FF]" : "hover:bg-neutral-300"
            }`}
          >
            <FontAwesomeIcon
              className="size-4 ml-2 text-mainFont"
              icon={faGoogleDrive}
            />
            <p className="text-sm">My Drive</p>
          </div>
        </Link>
        <div className="flex gap-4 cursor-pointer text hover:bg-neutral-300 w-52 px-2 py-[0.3rem] rounded-2xl">
          <FontAwesomeIcon
            className="size-4 ml-2 text-mainFont"
            icon={faLaptop}
          />
          <p className="text-sm">Computers</p>
        </div>
      </div>
      <div className="flex flex-col  mt-4 ">
        <div className="flex gap-4 cursor-pointer text hover:bg-neutral-300 w-52 px-2 py-[0.3rem] rounded-2xl">
          <FontAwesomeIcon
            className="size-4 ml-2 text-mainFont"
            icon={faUserGroup}
          />
          <p className="text-sm">Shared with me</p>
        </div>
        <div className="flex gap-4 cursor-pointer text hover:bg-neutral-300 w-52 px-2 py-[0.3rem] rounded-2xl">
          <FontAwesomeIcon
            className="size-4 ml-2 text-mainFont"
            icon={faClock}
          />
          <p className="text-sm">Recent</p>
        </div>
        <Link href="/starred">
          <div
            className={`flex gap-4 cursor-pointer text  w-52 px-2 py-[0.3rem] rounded-2xl ${
              activeTab === "starred" ? "bg-[#C2E7FF]" : "hover:bg-neutral-300"
            }`}
          >
            <FontAwesomeIcon
              className="size-4 ml-2 text-mainFont"
              icon={faStar}
            />
            <p className="text-sm">Starred</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col  mt-4 ">
        <div className="flex gap-4 cursor-pointer text hover:bg-neutral-300 w-52 px-2 py-[0.3rem] rounded-2xl">
          <FontAwesomeIcon
            className="size-4 ml-2 text-mainFont"
            icon={faCircleExclamation}
          />
          <p className="text-sm">Spam</p>
        </div>
        <div className="flex gap-4 cursor-pointer text hover:bg-neutral-300 w-52 px-2 py-[0.3rem] rounded-2xl">
          <FontAwesomeIcon
            className="size-4 ml-2 text-mainFont"
            icon={faTrashCan}
          />
          <p className="text-sm">Trash</p>
        </div>
        <div className="flex gap-4 cursor-pointer text hover:bg-neutral-300 w-52 px-2 py-[0.3rem] rounded-2xl">
          <FontAwesomeIcon
            className="size-4 ml-2 text-mainFont"
            icon={faCloud}
          />
          <p className="text-sm">Storage</p>
        </div>
      </div>
      <div class="w-44 bg-gray-200 ml-2 rounded-full h-1.5 mb-3 dark:bg-gray-200">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-ne-500 mt-4"
          style={{ width: "20%" }}
        ></div>
      </div>
      <p className="ml-2 text-sm mt-1">2.51 GB of 15 GB used</p>
      <button className="mt-3 text-[#2757D0] hover:bg-slate-200 text-sm rounded-3xl border-[1.5px] py-2 px-4 ml-2 font-medium border-black transition-all duration-300">
        Get more storage
      </button>
    </div>
  );
}

export default NavLeftSide;
