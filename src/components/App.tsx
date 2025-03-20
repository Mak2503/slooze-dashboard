"use client";
import { useCallback, useState } from "react";
import SideNavbar from "./Navbar/SideNavbar";
import Navbar from "./Navbar/Navbar";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const handleToggle = useCallback(() => {
    setToggleSidebar((prevToggleSidebar) => !prevToggleSidebar);
  }, []);

  return (
    <div className="flex h-screen">
      <SideNavbar toggleSidebar={toggleSidebar} />
      <div className={`w-full ${toggleSidebar ? "pl-[160px]" : "pl-[70px]"}`}>
        <Navbar handleToggle={handleToggle} />
        {children}
      </div>
    </div>
  );
};

export default App;
