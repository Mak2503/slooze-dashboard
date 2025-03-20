import Image from "next/image";
import { Settings } from "lucide-react";

const SideFooter = ({ toggleSidebar }: { toggleSidebar: boolean }) => {
  return (
    <div className="space-y-4">
      <div className="flex border-b-2 border-black/10 gap-1 items-center py-4">
        <Image
          src="/help.svg"
          alt="help"
          width={24}
          height={24}
          className="rounded-md mx-2"
        />
        {toggleSidebar && <p>Help</p>}
      </div>
      <div className="flex gap-1 items-center">
        <div className="bg-[#F4F4F4] p-2 rounded-md">
          <Settings />
        </div>
        {toggleSidebar && <p>Settings</p>}
      </div>
    </div>
  );
};

export default SideFooter;
