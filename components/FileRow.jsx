"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faCircleUser,
  faDownload,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { usePathname } from "next/navigation";

function FileRow({ fileName, fileExtention, path }) {
  const [url, setUrl] = useState(null);
  const pathName = usePathname();
  useEffect(() => {
    const fetchDownloadUrl = async () => {
      const imageRef = ref(storage, `${path}${fileName}`);
      const url = await getDownloadURL(imageRef);
      console.log(url);
      setUrl(url);
    };

    fetchDownloadUrl();
  }, [fileName, path]);

  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "tiff",
    "webp",
    "svg",
    "ico",
    "heic",
    "heif",
  ];
  function selectingFileIcon(fileExt) {
    if (imageExtensions.some((ext) => ext === fileExt)) {
      return "/filesIcons/img.svg";
    } else if (fileExt === "pdf") {
      return "/filesIcons/pdf.svg";
    } else if (fileExt === "txt") {
      return "/filesIcons/txt.svg";
    } else {
      return "/filesIcons/file.svg";
    }
  }
  const handleMoveToStarred = async (downloadUrl, destinationPath) => {
    if (pathName === "/starred") {
      handleDeletion();
      return;
    }
    try {
      const response = await fetch("/api/movingToStarred", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ downloadUrl, destinationPath }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error copying file:", error);
    }
  };

  const handleDeletion = async () => {
    try {
      const imageRef = ref(storage, `${path}/${fileName}`);
      await deleteObject(imageRef);
      console.log("deletion done");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="group  flex hover:bg-neutral-200 cursor-default justify-center flex-col w-full pl-8 pr-4">
      <div className="flex items-center justify-between py-1 ">
        <div className="flex w-1/4">
          <div className="flex gap-4 justify-center items-center ">
            <Image
              src={selectingFileIcon(fileExtention)}
              width={15}
              height={15}
              alt="Icon"
            />
            <h5>{fileName}</h5>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-20 2xl:gap-32">
            <div className="flex justify-center items-center gap-2">
              <FontAwesomeIcon className="size-5" icon={faCircleUser} />
              <h6>me</h6>
            </div>

            <div className="   px-3 py-1 ">
              <h6 className="mr-2">Dec 9,2021 me</h6>
            </div>
            <h6 className="ml-4 ">-</h6>
            <div className="gap-2 flex  invisible group-hover:visible">
              <FontAwesomeIcon
                onClick={handleDeletion}
                icon={faTrash}
                className="cursor-pointer p-1 hover:bg-neutral-300 rounded-full"
              />
              <Link href={url || ""} target="_blank">
                <FontAwesomeIcon
                  icon={faDownload}
                  className="cursor-pointer p-1 hover:bg-neutral-300 rounded-full"
                />
              </Link>
              <FontAwesomeIcon
                onClick={() => handleMoveToStarred(url, `starred/${fileName}`)}
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

export default FileRow;
