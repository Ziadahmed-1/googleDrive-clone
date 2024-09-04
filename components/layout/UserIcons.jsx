"use client";
import {
  faCircleCheck,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import { faBraille, faGear } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function UserIcons() {
  const icons = [
    { src: "/icons/userIcons/1.svg", title: "Ready for offline" },
    { src: "/icons/userIcons/2.svg", title: "Support" },
    { src: "/icons/userIcons/3.svg", title: "Settings" },
    { src: "/icons/userIcons/4.svg", title: "Google Apps" },
  ];
  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="flex gap-1 ">
        <FontAwesomeIcon
          className="text-neutral-500 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full"
          title="Ready for offline"
          icon={faCircleCheck}
        />
        <FontAwesomeIcon
          className="text-neutral-500 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full"
          title="Support"
          icon={faCircleQuestion}
        />
        <FontAwesomeIcon
          className="text-neutral-500 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full"
          title="Settings"
          icon={faGear}
        />
        <FontAwesomeIcon
          className="text-neutral-500 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full"
          title="Google apps"
          icon={faBraille}
        />
      </div>
      <div className="inline-block p-1 hover:bg-neutral-200  hover:cursor-pointer rounded-full transition duration-300">
        <Image
          src="/icons/userIcons/5.svg"
          layout="fixed"
          width={30}
          height={10}
          alt="User Name"
          title="User Name"
        />
      </div>
    </div>
  );
}

export default UserIcons;
