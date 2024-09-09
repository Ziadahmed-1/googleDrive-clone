import { faFolder, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import Details from "./showDetailsPages/Details";
import Activities from "./showDetailsPages/Activities";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";

function ShowDetails({ toggleDetails, entity }) {
  const [selectedTab, setSelectedTab] = useState("details");
  return (
    <div className="flex flex-col max-h-screen ">
      <div className="flex justify-between items-center px-6 py-4 mt-1">
        <div className="flex gap-4 justify-center items-center">
          {entity.type ? (
            entity.type === "file" ? (
              <Image src={entity.src} width={17} height={17} alt="Icon" />
            ) : (
              <FontAwesomeIcon className="size-4" icon={faFolder} />
            )
          ) : (
            <FontAwesomeIcon className="size-4" icon={faGoogleDrive} />
          )}
          <span className="truncate">{entity.name || "My Drive"}</span>
        </div>
        <FontAwesomeIcon
          className="text-neutral-600 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full"
          title="Support"
          icon={faXmark}
          onClick={() => toggleDetails(false)}
        />
      </div>
      <div className="mt-2">
        <button
          className={`w-1/2 py-4 text-center font-semibold text-sm transition-all duration-200 ${
            selectedTab === "details"
              ? "text-[#0B57D0] underline underline-offset-[18px] decoration-4"
              : "hover:bg-neutral-200"
          } `}
          onClick={() => setSelectedTab("details")}
        >
          Details
        </button>
        <button
          className={`w-1/2 py-4 text-center font-semibold text-sm transition-all duration-200 ${
            selectedTab === "activity"
              ? "text-[#0B57D0] underline underline-offset-[18px] decoration-4"
              : "hover:bg-neutral-200"
          } `}
          onClick={() => setSelectedTab("activity")}
        >
          Activity
        </button>
      </div>
      <hr />
      {entity.type ? (
        selectedTab === "details" ? (
          <Details entity={entity} />
        ) : (
          <Activities entity={entity} />
        )
      ) : (
        <div className="flex flex-col justify-center items-center mt-10">
          <Image src="/selectedError.png" width={150} height={20} alt="" />
          <p className=" mt-8">Select an item to see the details </p>
        </div>
      )}
    </div>
  );
}

export default ShowDetails;
