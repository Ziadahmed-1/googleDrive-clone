import React from "react";

function SettingsDropDown({ showSettingsDropDown }) {
  return (
    showSettingsDropDown && (
      <div className="absolute right-2 top-10 bg-white w-[20rem] rounded-md py-2 drop-shadow-xl">
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4 mb-[0.2rem] ">
          <div className="flex  items-center justify-center gap-4">
            <p className="text-sm">Settings</p>
          </div>
        </div>
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4 mb-[0.2rem] ">
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">Get Drive for desktop</p>
          </div>
        </div>

        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4  ">
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">Keybord shortcuts</p>
          </div>
        </div>
      </div>
    )
  );
}

export default SettingsDropDown;
