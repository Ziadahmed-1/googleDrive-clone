import {
  faDownload,
  faEllipsisVertical,
  faFolderPlus,
  faLink,
  faTrashCan,
  faUserPlus,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

FontAwesomeIcon;
const EditingRow = function ({ setSelected }) {
  return (
    <div className="w-full p-1 flex gap-2 items-center  rounded-3xl bg-[#F0F4F9]">
      <FontAwesomeIcon
        className="size-4 p-2 rounded-full hover:bg-neutral-200 cursor-pointer"
        onClick={() => setSelected({})}
        title="Clear selection"
        icon={faX}
      />
      <p className="text-sm">1 Selected</p>
      <FontAwesomeIcon
        className="size-4 p-2 rounded-full hover:bg-neutral-200 cursor-pointer"
        icon={faUserPlus}
      />
      <FontAwesomeIcon
        className="size-4 p-2 rounded-full hover:bg-neutral-200 cursor-pointer"
        icon={faDownload}
      />
      <FontAwesomeIcon
        className="size-4 p-2 rounded-full hover:bg-neutral-200 cursor-pointer"
        icon={faFolderPlus}
      />
      <FontAwesomeIcon
        className="size-4 p-2 rounded-full hover:bg-neutral-200 cursor-pointer"
        icon={faTrashCan}
      />
      <FontAwesomeIcon
        className="size-4 p-2 rounded-full hover:bg-neutral-200 cursor-pointer"
        icon={faLink}
      />
      <FontAwesomeIcon
        className="size-4 p-2 rounded-full hover:bg-neutral-200 cursor-pointer"
        icon={faEllipsisVertical}
      />
    </div>
  );
};

export default EditingRow;
