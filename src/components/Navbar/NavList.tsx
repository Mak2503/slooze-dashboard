"use client";
import { useContext, useState } from "react";
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
import NavItem from "./NavItem";
import { LocaleContext } from "../App";

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
    name: "Suppliers",
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

const NavList = ({ toggleSidebar }: { toggleSidebar: boolean }) => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const { t } = useContext(LocaleContext);
  return (
    <div className="space-y-4">
      {navItems.map((item, index) => (
        <div key={index} onClick={() => setSelectedTab(item.name)}>
          <NavItem
            {...item}
            name={t(`navlist.${item.name.toLocaleLowerCase()}`)}
            active={selectedTab === item.name}
            toggleSidebar={toggleSidebar}
          />
        </div>
      ))}
    </div>
  );
};

export default NavList;
