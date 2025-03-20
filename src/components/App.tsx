"use client";
import React, { useCallback, useState } from "react";
import SideNavbar from "./Navbar/SideNavbar";
import Navbar from "./Navbar/Navbar";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [minimizeSidebar, setMinimizeSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    setMinimizeSidebar((prev) => !prev);
  }, []);

  return (
    <div className="flex h-screen">
      <SideNavbar minimize={minimizeSidebar} />
      <div className="w-full pl-[70px]">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default App;
