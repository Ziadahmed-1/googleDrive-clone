import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className="flex bg-[#E9EEF6] focus-within:bg-white focus-within:shadow-lg  rounded-3xl mt-2 py-1 px-4 ">
      <FontAwesomeIcon
        className="text-neutral-500 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full mr-2"
        icon={faMagnifyingGlass}
      />

      <input
        placeholder="Search in Drive"
        className="peer bg-transparent focus:bg-transparent outline-none min-w-40 w-96 max-w-96"
      />

      <FontAwesomeIcon
        className="text-neutral-500 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full"
        icon={faSliders}
      />
    </div>
  );
}

export default SearchBar;
