import {
  faFileImage,
  faFileLines,
  faFilePdf,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TypeDropDown = function ({
  showTypeDropDown,
  setShowTypeDropDown,
  setTypeFilter,
}) {
  function handleFilterSelection(filter) {
    setTypeFilter(filter);
    setShowTypeDropDown(false);
  }
  return (
    showTypeDropDown && (
      <div className="absolute left-0 top-9 bg-white w-[12rem] rounded-md py-2 shadow-custom-medium ">
        <div
          className="flex justify-between items-center hover:bg-neutral-100 py-2 cursor-pointer px-4 mb-1"
          onClick={() => handleFilterSelection("images")}
        >
          <div className="flex  items-center justify-center gap-4">
            <FontAwesomeIcon className="size-4" icon={faFileImage} />
            <p className="text-sm">Photos & images</p>
          </div>
        </div>
        <div
          className="flex justify-between items-center hover:bg-neutral-100 py-2 cursor-pointer px-4 mb-1"
          onClick={() => handleFilterSelection("pdfs")}
        >
          <div className="flex  items-center justify-center gap-4">
            <FontAwesomeIcon className="size-4" icon={faFilePdf} />
            <p className="text-sm">PDFs</p>
          </div>
        </div>
        <div
          className="flex justify-between items-center hover:bg-neutral-100 py-2 cursor-pointer px-4 mb-1"
          onClick={() => handleFilterSelection("textFiles")}
        >
          <div className="flex  items-center justify-center gap-4">
            <FontAwesomeIcon className="size-4" icon={faFileLines} />
            <p className="text-sm">Text files</p>
          </div>
        </div>
        <div
          className="flex justify-between items-center hover:bg-neutral-100 py-2 cursor-pointer px-4 "
          onClick={() => handleFilterSelection("folders")}
        >
          <div className="flex  items-center justify-center gap-4">
            <FontAwesomeIcon className="size-4" icon={faFolder} />
            <p className="text-sm">Folders</p>
          </div>
        </div>
      </div>
    )
  );
};

export default TypeDropDown;
