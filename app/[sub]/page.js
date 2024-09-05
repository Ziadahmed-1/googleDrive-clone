import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCircleExclamation,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import MainTable from "@/components/MainTable";
import FilesList from "@/components/FilesList";

export default function Home({ params }) {
  let tabs = ["Type", "People", "Modified"];

  console.log(params.sub);

  return (
    <main className="flex min-h-screen flex-col rounded-3xl mt-4 bg-white text-mainFont w-full p-6 ">
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
            className="text-neutral-500 cursor-pointer size-5 p-2 hover:bg-neutral-200 rounded-full"
            icon={faCircleExclamation}
          />
        </div>
      </div>
      <div className="flex mt-6 gap-3">
        {tabs.map((tab) => (
          <div
            key={tab}
            className="flex justify-center items-center gap-2 border-[1.5px] px-3 py-1 rounded-lg border-neutral-400 cursor-pointer hover:bg-neutral-200 "
          >
            <h6>{tab}</h6>
            <FontAwesomeIcon className="size-3" icon={faCaretDown} />
          </div>
        ))}
      </div>
      <MainTable />
      <FilesList path={params.sub.split("%20").join(" ")} />
    </main>
  );
}
