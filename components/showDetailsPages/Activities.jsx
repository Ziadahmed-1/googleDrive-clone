import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faFolder, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Activities = function ({ entity }) {
  return (
    <div className="px-6 py-4 mt-1">
      <p className="font-medium">Older</p>
      <div className="flex gap-6 items-center mt-6">
        <div className="inline-block  w-fit rounded-full transition duration-300">
          <Image
            src="/icons/userIcons/5.svg"
            layout="fixed"
            width={30}
            height={10}
            alt="User Name"
            title="User Name"
          />
        </div>
        <div className="flex flex-col text-neutral-500 text-sm">
          <p>You uploaded an item</p>
          <p>Dec 9, 2021, 2:38:42PM</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-[1.5px] px-2 py-[0.25rem] rounded-lg border-neutral-400 cursor-pointer hover:bg-neutral-200 w-fit mb-2 mt-1 ml-14  ">
        <FontAwesomeIcon className="size-3" icon={faGoogleDrive} />
        <h6 className="text-sm font-medium ">My drive</h6>
      </div>

      <div className="relative flex justify-center items-center gap-2 border-[1.5px] px-2 py-[0.25rem] rounded-lg border-neutral-400 cursor-pointer hover:bg-neutral-200 w-fit ml-[5.5rem] ">
        {entity.type === "file" ? (
          <Image src={entity.src} width={12} height={12} alt="Icon" />
        ) : (
          <FontAwesomeIcon className="size-4" icon={faFolder} />
        )}
        <h6 className="text-sm font-medium ">{entity.name}</h6>
        <FontAwesomeIcon
          className="absolute -left-5 -top-0 text-neutral-400 text-sm "
          icon={faL}
        />
      </div>
    </div>
  );
};

export default Activities;
