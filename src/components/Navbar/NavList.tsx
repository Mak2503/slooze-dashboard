import {
  BookUser,
  Box,
  ChartColumn,
  ChartNoAxesCombined,
  File,
  FileText,
  Newspaper,
  ShoppingBag,
  SquareCode,
} from "lucide-react";
import React, { ReactNode } from "react";

const navItems = [
  {
    name: "Dashboard",
    icon: <Box />,
  },
  {
    name: "Contacts",
    icon: <BookUser />,
  },
  {
    name: "Documents",
    icon: <FileText />,
  },
  {
    name: "Analysis",
    icon: <ChartNoAxesCombined />,
  },
  {
    name: "Files",
    icon: <File />,
  },
  {
    name: "Reports",
    icon: <ChartColumn />,
  },
  {
    name: "Analysis",
    icon: <Newspaper />,
  },
  {
    name: "Shop",
    icon: <ShoppingBag />,
  },
  {
    name: "Code",
    icon: <SquareCode />,
  },
];

const NavItem: React.FC<{
  active?: boolean;
  icon: ReactNode;
  name?: string;
  minimize: boolean;
}> = ({ active = false, icon, name, minimize }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div
        className={`${
          active && "text-white bg-[#4F45E4]"
        } text-[#0000007A] p-1.5 rounded-md`}
      >
        {icon}
      </div>
      {minimize && (
        <p className={`${active && "text-[#4F45E4] font-semibold"}`}>{name}</p>
      )}
    </div>
  );
};

const NavList = ({ minimize }: { minimize: boolean }) => {
  return (
    <div className="space-y-3">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          active={index === 0 && true}
          icon={item.icon}
          name={item.name}
          minimize={minimize}
        />
      ))}
    </div>
  );
};

export default NavList;
