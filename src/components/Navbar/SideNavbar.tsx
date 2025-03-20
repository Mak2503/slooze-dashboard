import Image from "next/image";
import NavList from "./NavList";
import SideFooter from "./SideFooter";

const SideNavbar = ({ toggleSidebar }: { toggleSidebar: boolean }) => {
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
      <SideFooter toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default SideNavbar;
