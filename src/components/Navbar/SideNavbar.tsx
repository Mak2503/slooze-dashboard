import Image from "next/image";
import React from "react";
import NavList from "./NavList";
import SideFooter from "./SideFooter";

const SideNavbar = ({ minimize }: { minimize: boolean }) => {
  return (
    <div
      className={`fixed left-0 top-0 ${
        minimize ? "w-[160px]" : "w-[70px]"
      } h-full z-20 bg-white py-5 px-3 border-r border-[#0000001A] flex flex-col justify-between`}
    >
      <div className="space-y-8">
        <div className="flex gap-2 items-center">
          <Image src={"/slooze-logo.svg"} width={40} height={40} alt="logo" />
          {minimize && <h2 className="text-2xl font-semibold">Slooze</h2>}
        </div>
        <NavList minimize={minimize} />
      </div>
      <SideFooter minimize={minimize} />
    </div>
  );
};

export default SideNavbar;
