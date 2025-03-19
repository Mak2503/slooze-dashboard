import { Bell, Calendar, PanelLeftDashedIcon, Settings } from "lucide-react";
import React from "react";
import Input from "../common/Input";
import Image from "next/image";

const Navbar = ({ handleMinimize }: { handleMinimize: () => void }) => {
  return (
    <div className="p-3.5 bg-[#4F45E4] flex justify-between items-center">
      <div className="flex items-center gap-4">
        <PanelLeftDashedIcon
          color="white"
          className="cursor-pointer"
          onClick={handleMinimize}
        />
        <Input placeholder="Search" />
      </div>
      <div className="flex items-center gap-4">
        <Calendar color="white" />
        <Bell color="white" />
        <Settings color="white" />
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
