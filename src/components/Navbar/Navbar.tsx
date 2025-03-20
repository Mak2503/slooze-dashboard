import { memo } from "react";
import { Bell, Calendar, PanelLeftDashedIcon, Settings } from "lucide-react";
import Input from "../Common/Input";
import Image from "next/image";

const Navbar = ({ handleToggle }: { handleToggle: () => void }) => {
  return (
    <div className="flex bg-primary justify-between items-center px-6 py-3.5">
      <div className="flex gap-4 items-center">
        <PanelLeftDashedIcon
          color="white"
          size={20}
          className="cursor-pointer"
          onClick={handleToggle}
        />
        <Input placeholder="Search" />
      </div>
      <div className="flex gap-4 items-center">
        <Calendar color="white" size={20} />
        <Bell color="white" size={20} />
        <Settings color="white" size={20} />
        <div className="flex bg-[#3830B7] rounded-lg gap-2 items-center px-4 py-2">
          <div className="text-white text-xxs">
            <p>rohan@etis.xyz</p>
            <p>ETLS PVT. LTD.</p>
          </div>
          <Image src="/avatar.svg" alt="avatar" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
