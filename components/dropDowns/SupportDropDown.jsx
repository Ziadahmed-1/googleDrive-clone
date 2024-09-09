import React from "react";

function SupportDropDown({ showSupportDropDown }) {
  return (
    showSupportDropDown && (
      <div className="absolute right-2 top-10 bg-white w-[15rem] rounded-md py-2 drop-shadow-xl">
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4 mb-1 pl-8">
          <div className="flex  items-center justify-center gap-4">
            <p className="text-sm">Help</p>
          </div>
        </div>
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4 pl-8">
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">Training</p>
          </div>
        </div>

        <hr className="my-2" />
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4 pl-8">
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">Terms and Policy</p>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4 pl-8">
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">Send feedback to google</p>
          </div>
        </div>
      </div>
    )
  );
}

export default SupportDropDown;
