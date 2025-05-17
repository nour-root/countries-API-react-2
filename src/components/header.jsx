import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
export default function Header() {
  return (
    <header className="shadow max-sm:px-6 px-8 py-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl max-sm:text-xl font-bold">
          where in the world?
        </h1>
      </div>
      <button className="flex items-center space-x-2 cursor-pointer">
        <IoMoonOutline className="text-xl" />
        <p className="text-xl font-semibold max-sm:text-lg">dark Mode</p>
      </button>
    </header>
  );
}
