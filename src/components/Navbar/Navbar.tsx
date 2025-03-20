import { Bell, Calendar, PanelLeftDashedIcon, Settings } from "lucide-react";
import React from "react";
import Input from "../Common/Input";
import Image from "next/image";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="py-3.5 px-6 bg-[#4F45E4] flex justify-between items-center">
      <div className="flex items-center gap-4">
        <PanelLeftDashedIcon
          color="white"
          size={20}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
        <Input placeholder="Search" />
      </div>
      <div className="flex items-center gap-4">
        <Calendar color="white" size={20} />
        <Bell color="white" size={20} />
        <Settings color="white" size={20} />
        <div className="py-2 px-4 rounded-lg bg-[#3830B7] flex items-center gap-2">
          <div className="text-[11px] text-white">
            <p>rohan@etis.xyz</p>
            <p>ETLS PVT. LTD.</p>
          </div>
          <Image src={"/avatar.svg"} alt="avatar" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
