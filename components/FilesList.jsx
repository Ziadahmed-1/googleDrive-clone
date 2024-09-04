"use client";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import FolderRow from "./FolderRow";
import FileRow from "./FileRow";

const FilesList = ({ path }) => {
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  let targetPath = path ? `${path}/` : "/";

  useEffect(() => {
    const fetchFiles = async () => {
      const filesRef = ref(storage, targetPath);
      const res = await listAll(filesRef);
      setFiles(res.items);
      setFolders(res.prefixes);
    };

    fetchFiles();
  }, [targetPath]);

  return (
    <div>
      <ul>
        {folders?.map((folder) => {
          if (folder.name === "starred") {
            return;
          }
          return (
            <li key={folder.name}>
              <FolderRow folderName={folder.name} />
            </li>
          );
        })}
      </ul>
      <ul>
        {files?.map((file) => {
          let fileExtention = file.name?.split(".").pop();
          return (
            <li key={file.name}>
              <FileRow
                fileName={file.name}
                path={targetPath}
                fileExtention={fileExtention}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilesList;
