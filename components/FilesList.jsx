"use client";
import { useEffect, useMemo, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import FolderRow from "./FolderRow";
import FileRow from "./FileRow";

const FilesList = ({
  path,
  setSelected,
  selected,
  nameSorting,
  typeFilter,
  setTypeFilter,
}) => {
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [originalFiles, setOriginalFiles] = useState([]);
  const [originalFolders, setOriginalFolders] = useState([]);
  let targetPath = path ? `${path}/` : "/";
  const imageExtensions = useMemo(
    () => [
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
    ],
    []
  );

  useEffect(() => {
    const fetchFiles = async () => {
      const filesRef = ref(storage, targetPath);
      const res = await listAll(filesRef);

      if (nameSorting === "") {
        setFiles(res.items);
        setOriginalFiles(res.items);
        setFolders(res.prefixes);
        setOriginalFolders(res.prefixes);
      } else if (nameSorting === "asc") {
        let ascFiles = res.items.toSorted((a, b) =>
          a.name.localeCompare(b.name)
        );
        let ascFolders = res.prefixes.toSorted((a, b) =>
          a.name.localeCompare(b.name)
        );
        setFiles(ascFiles);
        setOriginalFiles(ascFiles);
        setFolders(ascFolders);
        setOriginalFolders(ascFolders);
      } else {
        let desFiles = res.items.toSorted((a, b) =>
          b.name.localeCompare(a.name)
        );
        let desFolders = res.prefixes.toSorted((a, b) =>
          b.name.localeCompare(a.name)
        );
        setFiles(desFiles);
        setOriginalFiles(desFiles);
        setFolders(desFolders);
        setOriginalFolders(desFolders);
      }

      if (typeFilter) {
        if (typeFilter === "folders") {
          setFiles([]);
        } else if (typeFilter === "images") {
          let images = originalFiles.filter((file) => {
            return imageExtensions.some(
              (ext) => ext === file.name.split(".").pop().toLowerCase()
            );
          });
          setFiles(images);
          setFolders([]);
        } else if (typeFilter === "pdfs") {
          let pdfs = originalFiles.filter((file) => {
            return file.name.split(".").pop().toLowerCase() === "pdf";
          });
          setFiles(pdfs);
          setFolders([]);
        } else if (typeFilter === "textFiles") {
          let txtFiles = originalFiles.filter((file) => {
            return file.name.split(".").pop().toLowerCase() === "txt";
          });
          setFiles(txtFiles);
          setFolders([]);
        }
      }
    };

    fetchFiles();
  }, [targetPath, nameSorting, typeFilter]);

  return (
    <div>
      <ul>
        {folders?.map((folder) => {
          if (folder.name === "starred") {
            return;
          }
          return (
            <li key={folder.name}>
              <FolderRow
                selected={selected}
                setSelected={setSelected}
                folderName={folder.name}
              />
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
                selected={selected}
                fileName={file.name}
                path={targetPath}
                fileExtention={fileExtention}
                setSelected={setSelected}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilesList;
