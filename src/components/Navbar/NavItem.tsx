import { ReactNode } from "react";

const NavItem: React.FC<{
  active?: boolean;
  icon: ReactNode;
  name?: string;
  toggleSidebar: boolean;
}> = ({ active = false, icon, name, toggleSidebar }) => {
  return (
    <div className="flex cursor-pointer gap-2 items-center">
      <div
        className={`${
          active && "text-white bg-primary"
        } text-[#0000007A] p-1.5 rounded-md`}
      >
        {icon}
      </div>
      {toggleSidebar && (
        <p
          className={`${
            active && "text-primary font-semibold"
          } text-sm hover:scale-105 hover:text-primary transition-all`}
        >
          {name}
        </p>
      )}
    </div>
  );
};

export default NavItem;
