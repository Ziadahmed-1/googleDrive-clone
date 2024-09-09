import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { DocumentViewer } from "react-documents";

const Details = function ({ entity }) {
  return (
    <div className="overflow-x-hidden overflow-y-scroll pb-10  ">
      {entity.type === "file" ? (
        <DocumentViewer
          className="m-2 rounded-lg"
          queryParams="hl=Nl"
          url={entity.link}
        ></DocumentViewer>
      ) : (
        <FontAwesomeIcon
          className="size-20 my-[2.3rem] mx-auto w-full"
          icon={faFolder}
        />
      )}
      <div className="flex mt-6 flex-col gap-2 ml-4">
        <p className="font-medium">Who can access</p>
        <div className="inline-block  w-fit  rounded-full transition duration-300">
          <Image
            src="/icons/userIcons/5.svg"
            layout="fixed"
            width={30}
            height={10}
            alt="User Name"
            title="User Name"
          />
        </div>
        <p className="text-sm text-neutral-500 ">Private to you</p>
        <button className="mt-1 text-[#2757D0] hover:bg-slate-200 text-sm rounded-3xl w-fit border-[1.5px] py-2 px-4 font-medium border-neutral-500 transition-all duration-300">
          Manage access
        </button>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col ml-4">
        <p className="font-medium mb-2">
          {entity.type === "file" ? "File details" : "Folder details"}
        </p>

        <p className="text-xs font-medium mt-1">Type</p>
        <p className="text-neutral-500 text-xs mb-4">
          {entity.entityExtention}
        </p>
        <p className="text-xs font-medium mt-2">Size</p>
        <p className="text-neutral-500 text-sm mb-4">-</p>
        <p className="text-xs font-medium mt-2">Storage used</p>
        <p className="text-neutral-500 text-sm mb-4">-</p>
        <p className="text-xs font-medium mt-2">Location</p>
        <div className="flex justify-center items-center gap-2 border-[1.5px] px-4 py-[0.25rem] rounded-lg border-neutral-400 cursor-pointer hover:bg-neutral-200 w-fit mb-4 mt-1  ">
          <FontAwesomeIcon className="size-3" icon={faGoogleDrive} />
          <h6 className="text-sm font-medium ">My drive</h6>
        </div>
        <p className="text-xs font-medium mt-2">Owner</p>
        <p className="text-neutral-500 text-sm mb-4">me</p>
        <p className="text-xs font-medium mt-2">Created</p>
        <p className="text-neutral-500 text-sm mb-4">Dec 9,2021</p>
      </div>
    </div>
  );
};

export default Details;
