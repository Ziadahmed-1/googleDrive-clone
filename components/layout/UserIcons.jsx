"use client";
import {
  faCircleCheck,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import { faBraille, faGear } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import SupportDropDown from "../dropDowns/SupportDropDown";
import SettingsDropDown from "../dropDowns/SettingsDropDown";
import OfflineDropDown from "../dropDowns/OfflineDropDown";

function UserIcons() {
  const icons = [
    { src: "/icons/userIcons/1.svg", title: "Ready for offline" },
    { src: "/icons/userIcons/2.svg", title: "Support" },
    { src: "/icons/userIcons/3.svg", title: "Settings" },
    { src: "/icons/userIcons/4.svg", title: "Google Apps" },
  ];
  const [showSupportDropDown, setSupportDropDown] = useState(false);
  const [showSettingsDropDown, setShowSettingsDropDown] = useState(false);
  const [showOfflineDropDown, setShowOfflineDropDown] = useState(false);

  function handleSuppDropDown() {
    setSupportDropDown((prev) => !prev);
    setShowSettingsDropDown(false);
    setShowOfflineDropDown(false);
  }

  function handleSettingsDropDown() {
    setShowSettingsDropDown((prev) => !prev);
    setSupportDropDown(false);
    setShowOfflineDropDown(false);
  }

  function handleOfflineDropDown() {
    setShowOfflineDropDown((prev) => !prev);
    setSupportDropDown(false);
    setShowSettingsDropDown(false);
  }

  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="flex gap-1 ">
        <div className="relative">
          <FontAwesomeIcon
            className={`text-neutral-700 cursor-pointer size-5 p-2 rounded-full ${
              showOfflineDropDown ? "bg-neutral-200" : "hover:bg-neutral-200"
            }`}
            title="Ready for offline"
            icon={faCircleCheck}
            onClick={handleOfflineDropDown}
          />
          <OfflineDropDown showOfflineDropDown={showOfflineDropDown} />
        </div>

        <div className="relative">
          <FontAwesomeIcon
            className={`text-neutral-700 cursor-pointer size-5 p-2 rounded-full ${
              showSupportDropDown ? "bg-neutral-200" : "hover:bg-neutral-200"
            }`}
            title="Support"
            icon={faCircleQuestion}
            onClick={handleSuppDropDown}
          />
          <SupportDropDown showSupportDropDown={showSupportDropDown} />
        </div>

        <div className="relative">
          <FontAwesomeIcon
            className={`text-neutral-700 cursor-pointer size-5 p-2 rounded-full ${
              showSettingsDropDown ? "bg-neutral-200" : "hover:bg-neutral-200"
            }`}
            title="Settings"
            icon={faGear}
            onClick={handleSettingsDropDown}
          />
          <SettingsDropDown showSettingsDropDown={showSettingsDropDown} />
        </div>
        <FontAwesomeIcon
          className="text-neutral-700 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full"
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
