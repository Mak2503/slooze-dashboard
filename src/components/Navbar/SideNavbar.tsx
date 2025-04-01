import Image from "next/image";
import NavList from "./NavList";
import SideFooter from "./SideFooter";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { colorOptions } from "@/utils/mock-data";

const SideNavbar = ({
  toggleSidebar,
  
}: {
  toggleSidebar: boolean;
}) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`fixed left-0 top-0 ${
        toggleSidebar ? "w-[160px]" : "w-[70px]"
      } h-full z-20 bg-white py-5 px-3 border-r border-[#0000001A] flex flex-col justify-between`}
    >
      <div className="space-y-8">
        <div className="flex gap-2 items-center">
          <Image src="/slooze-logo.svg" width={40} height={40} alt="logo" />
          {toggleSidebar && <h2 className="text-2xl font-semibold">Slooze</h2>}
        </div>
        <NavList toggleSidebar={toggleSidebar} />
      </div>
      <select
        className="border border-borderPrimary p-2 rounded-md text-xs font-bold"
        value={theme}
        onChange={(e) => handleTheme(e.target.value)}
      >
        {colorOptions.map((color) => (
          <option value={color.value} key={color.value}>
            {color.label}
          </option>
        ))}
      </select>
      <SideFooter toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default SideNavbar;
