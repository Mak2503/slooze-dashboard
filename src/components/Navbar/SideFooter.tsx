import { Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideFooter = ({ minimize }: { minimize: boolean }) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1">
        <div className="p-2 rounded-md">
          <Image src={"/help.svg"} alt="help" width={24} height={24} />
        </div>
        {minimize && <p>Help</p>}
      </div>
      <div className="h-0.5 bg-[#0000001A]"></div>
      <div className="flex items-center gap-1">
        <div className="bg-[#F4F4F4] p-2 rounded-md">
          <Settings />
        </div>
        {minimize && <p>Settings</p>}
      </div>
    </div>
  );
};

export default SideFooter;
