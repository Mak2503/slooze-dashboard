import Image from "next/image";
import React from "react";
import NavList from "./NavList";
import SideFooter from "./SideFooter";

const SideNavbar = ({ minimize }: { minimize: boolean }) => {
  return (
    <div className="fixed left-0 top-0 w-[70px] h-full z-20 bg-white py-6 px-3 border-r border-[#0000001A] flex flex-col justify-between">
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <Image src={"/slooze-logo.svg"} width={40} height={40} alt="logo" />
          {minimize && <h2 className="font-semibold text-2xl">Slooze</h2>}
        </div>
        <NavList minimize={minimize} />
      </div>
      <SideFooter minimize={minimize} />
    </div>
  );
};

export default SideNavbar;
