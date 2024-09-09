"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCircleExclamation,
  faTableCellsLarge,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import MainTable from "@/components/MainTable";
import FilesList from "@/components/FilesList";
import { useState } from "react";
import StarredShowDetails from "@/components/StarredShowDetails";
import EditingRow from "@/components/EditingRow";
import TypeDropDown from "@/components/dropDowns/TypeDropDown";
faXmark;

export default function Home({ params }) {
  let tabs = ["Type", "People", "Modified"];
  const [selected, setSelected] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [nameSorting, setNameSorting] = useState("");
  const [showTypeDropDown, setShowTypeDropDown] = useState(false);
  const [typeFilter, setTypeFilter] = useState("");

  function handleShowTypeDropDown(tab) {
    if (tab === "Type") {
      setShowTypeDropDown((prev) => !prev);
    }
  }

  function handleClearFilters() {
    setShowTypeDropDown(false);
    setTypeFilter("");
  }

  return (
    <>
      <main className="max-h-screen mb-4 flex-col rounded-2xl mt-[0.6rem] bg-white text-mainFont w-full p-6 pb-10">
        <div className="flex justify-between w-full ">
          <div className="flex gap-4 justify-center items-center">
            <h5 className="text-2xl">
              {params.sub === "starred"
                ? "Starred"
                : `My Drive /${params.sub.split("%20").join(" ")}`}
            </h5>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <div className="flex rounded-3xl border-[1.5px] border-neutral-400 ">
              <FontAwesomeIcon
                className="size-5 py-[0.3rem] px-4 border-e-[1.5px] border-neutral-400 bg-[#C2E7FF] cursor-pointer rounded-l-3xl "
                icon={faBars}
              />
              <FontAwesomeIcon
                className="size-5 py-[0.3rem] px-4 cursor-pointer hover:bg-neutral-200 rounded-r-3xl"
                icon={faTableCellsLarge}
              />
            </div>
            <FontAwesomeIcon
              className={`text-neutral-700 cursor-pointer size-5 p-2  rounded-full  ${
                showDetails ? "bg-[#C2E7FF]" : "hover:bg-neutral-200"
              }`}
              icon={faCircleExclamation}
              title="view details"
              onClick={() => setShowDetails((prev) => !prev)}
            />
          </div>
        </div>

        <div className="flex mt-6 gap-3">
          {selected.type ? (
            <EditingRow setSelected={setSelected} />
          ) : (
            tabs.map((tab) => (
              <div
                key={tab}
                className="mt-[0.4rem]  border-[1.5px] rounded-lg   border-neutral-400 cursor-pointer  relative  "
              >
                {typeFilter && tab === "Type" ? (
                  <div className="flex justify-center  rounded-lg  items-center gap-[0.1rem] ">
                    <div
                      className="flex items-center gap-1 bg-[#B3D7EF] hover:bg-[#aac9dd] rounded-l-md p-1 px-2"
                      onClick={() => handleShowTypeDropDown(tab)}
                    >
                      <h6>{typeFilter}</h6>
                      <FontAwesomeIcon className="size-3" icon={faCaretDown} />
                    </div>
                    <div
                      className="bg-[#B3D7EF] hover:bg-[#aac9dd] py-1 px-2 rounded-r-md"
                      onClick={handleClearFilters}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex justify-center px-3 rounded-lg py-1 items-center gap-2 hover:bg-neutral-200"
                    onClick={() => handleShowTypeDropDown(tab)}
                  >
                    <h6>{tab}</h6>
                    <FontAwesomeIcon className="size-3" icon={faCaretDown} />
                  </div>
                )}

                {tab === "Type" && (
                  <TypeDropDown
                    setTypeFilter={setTypeFilter}
                    showTypeDropDown={showTypeDropDown}
                    setShowTypeDropDown={setShowTypeDropDown}
                  />
                )}
              </div>
            ))
          )}
        </div>

        <MainTable nameSorting={nameSorting} setNameSorting={setNameSorting} />
        <FilesList
          setTypeFilter={setTypeFilter}
          typeFilter={typeFilter}
          path={params.sub.split("%20").join(" ")}
          selected={selected}
          setSelected={setSelected}
          nameSorting={nameSorting}
        />
      </main>
      {showDetails && (
        <div className="m-4 w-[35rem] rounded-2xl mt-[0.6rem] bg-white text-mainFont">
          <StarredShowDetails
            toggleDetails={setShowDetails}
            entity={selected}
          />
        </div>
      )}
    </>
  );
}
