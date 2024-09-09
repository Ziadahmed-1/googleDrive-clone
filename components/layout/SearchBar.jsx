"use client";
import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImage,
  faFileLines,
  faFilePdf,
  faFolder,
  faMagnifyingGlass,
  faSliders,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { listAll, ref } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import { usePathname } from "next/navigation";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [filesView, setFilesView] = useState([]);
  const [foldersView, setFoldersView] = useState([]);

  const pathname = usePathname();

  function handleInputChange(e) {
    setInputValue(e.target.value);
    const normalizedSearchString = inputValue.toLowerCase();

    const matchingFiles = files.filter((file) =>
      file.name.toLowerCase().includes(normalizedSearchString)
    );

    const matchingFolders = folders.filter((folder) =>
      folder.name.toLowerCase().includes(normalizedSearchString)
    );
    setFilesView(matchingFiles);
    setFoldersView(matchingFolders);
  }

  useEffect(() => {
    const fetchFiles = async () => {
      const filesRef = ref(storage, pathname);
      const res = await listAll(filesRef);
      setFiles(res.items);
      setFolders(res.prefixes);
    };
    fetchFiles();
  }, [pathname]);

  return (
    <div
      className={`relative flex bg-[#E9EEF6] focus-within:bg-white rounded-3xl focus-within:shadow-lg mt-2 py-1 px-2 ${
        inputValue ? "focus-within:rounded-b-none" : "rounded-b-3xl"
      }`}
    >
      <div className="flex">
        <FontAwesomeIcon
          className="text-neutral-700 cursor-pointer size-4 p-[0.6rem] hover:bg-gray-200 rounded-full mr-2"
          icon={faMagnifyingGlass}
        />
        <input
          value={inputValue}
          placeholder="Search in Drive"
          className="peer bg-transparent focus:bg-transparent outline-none min-w-40 w-[30rem] max-w-[30rem]"
          onChange={(e) => handleInputChange(e)}
        />
        {inputValue && (
          <FontAwesomeIcon
            className="absolute right-10 text-neutral-700 cursor-pointer size-4 p-[0.6rem] hover:bg-gray-200 rounded-full mr-2"
            onClick={() => setInputValue("")}
            icon={faX}
          />
        )}
        <FontAwesomeIcon
          className="text-neutral-700 cursor-pointer size-4 p-[0.6rem] hover:bg-gray-200 rounded-full"
          icon={faSliders}
        />
        {inputValue && (
          <div className="hidden absolute w-full z-20 top-full left-0  bg-white shadow-lg py-4 px-1 rounded-b-3xl peer-focus:block">
            <hr />
            {inputValue && foldersView.length == 0 && filesView.length == 0 && (
              <p className="text-xs pt-3">
                No matching files or folders found for your search.
              </p>
            )}
            {foldersView?.map((folder) => (
              <div
                key={folder.name}
                className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-neutral-200 border-l-2 border-white hover:border-blue-700 "
              >
                <div className="flex gap-2 items-center justify-center">
                  <FontAwesomeIcon className="mr-2 size-4" icon={faFolder} />
                  <p>{folder.name}</p>
                </div>
                <p className="text-xs">Dec 21</p>
              </div>
            ))}
            {filesView?.map((file) => (
              <div
                key={file.name}
                className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-neutral-200 border-l-2 border-white hover:border-blue-700 "
              >
                <div className="flex gap-2 items-center justify-center">
                  {file.name.split(".").pop() === "pdf" && (
                    <FontAwesomeIcon className="mr-2 size-4" icon={faFilePdf} />
                  )}
                  {file.name.split(".").pop() === "txt" && (
                    <FontAwesomeIcon
                      className="mr-2 size-4"
                      icon={faFileLines}
                    />
                  )}
                  {file.name.split(".").pop() !== "pdf" &&
                    file.name.split(".").pop() !== "txt" && (
                      <FontAwesomeIcon
                        className="mr-2 size-4"
                        icon={faFileImage}
                      />
                    )}
                  <p>{file.name}</p>
                </div>
                <p className="text-xs">Dec 21</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
