import React from "react";

function OfflineDropDown({ showOfflineDropDown }) {
  return (
    showOfflineDropDown && (
      <div className="absolute right-2 top-10 bg-white w-[20rem] rounded-md py-2 drop-shadow-xl">
        <div className="flex justify-between items-center hover:bg-neutral-100 py-1 cursor-pointer px-4  ">
          <div className="flex  items-center justify-center gap-4 pl-6">
            <p className="text-sm">Offline preview</p>
          </div>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-300    rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-400"></div>
          </label>
        </div>
      </div>
    )
  );
}

export default OfflineDropDown;
