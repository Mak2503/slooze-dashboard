import { ReactNode, useContext } from "react";
import { ThemeContext } from "../App";

const NavItem: React.FC<{
  active?: boolean;
  icon: ReactNode;
  name?: string;
  toggleSidebar: boolean;
}> = ({ active = false, icon, name, toggleSidebar }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex cursor-pointer gap-2 items-center">
      <div
        className={`${
          active && "text-white"
        } text-[#0000007A] p-1.5 rounded-md`}
        style={{ backgroundColor: active ? theme : "" }}
      >
        {icon}
      </div>
      {toggleSidebar && (
        <p
          className={`${
            active && "font-semibold"
          } text-sm hover:scale-105 transition-all`}
          style={{ color: active ? theme : "", }}
        >
          {name}
        </p>
      )}
    </div>
  );
};

export default NavItem;
