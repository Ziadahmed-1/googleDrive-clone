import React from "react";
import Image from "next/image";
import SearchBar from "../layout/SearchBar";
import UserIcons from "../layout/UserIcons";

function NavBar() {
  return (
    <nav className="bg-mainBg text-slate-950 px-6">
      <div className="flex">
        <div className="flex items-center mr-40">
          <Image
            className="my-2"
            src="/logo.webp"
            width={40}
            height={200}
            alt="Logo"
            title="Drive"
          />
          <span className="text-[#444746] text-2xl ml-3">Drive</span>
        </div>
        <div className="flex justify-between w-full items-center">
          <SearchBar />
          <UserIcons />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
