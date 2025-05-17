import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  return (
    <div className="flex justify-between max-sm:flex-col gap-6">
      <form className="flex bg-primary shadow min-w-1/3 p-4 space-x-3 rounded dark:bg-dark-primary ">
        <button type="submit" className="cursor-pointer ">
          <AiOutlineSearch className="text-2xl text-Text" />
        </button>
        <input
          type="text"
          placeholder="enter the country"
          className="focus:outline-0 capitalize dark:text-Text"
        />
      </form>
      <div
        onClick={() => {
          document.querySelector(".dropDown").classList.toggle("scale-100");
          document.querySelector(".arrow").classList.toggle("rotate-180");
        }}
        className="relative  cursor-pointer pointer-events-auto dark:bg-dark-primary dark:text-white w-[250px] flex items-center justify-between bg-primary  rounded shadow px-8 h-14"
      >
        <p>{"Filter By Region"}</p>
        <IoIosArrowDown className="mt-1 arrow transform rotate-0 transition-all duration-200" />
        <div className="absolute overflow-hidden dark:bg-dark-primary dark:text-white *:hover:dark:bg-dark-secondary *:hover:bg-secondary dropDown shadow transition-all duration-150 transform origin-top scale-0 z-10  bg-primary  top-16 left-0  h-fit w-1/1 rounded">
          <p className="cursor-pointer px-4 py-2 pt-3">All</p>
          <p className="cursor-pointer px-4 py-2">Africa</p>
          <p className="cursor-pointer px-4 py-2">America</p>
          <p className="cursor-pointer px-4 py-2">Asia</p>
          <p className="cursor-pointer px-4 py-2">Europe</p>
          <p className="cursor-pointer px-4 py-2 pb-3">Oceania</p>
        </div>
      </div>
    </div>
  );
}
