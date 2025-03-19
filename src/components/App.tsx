"use client";
import React, { useCallback, useState } from "react";
import SideNavbar from "./navbar/SideNavbar";
import Navbar from "./navbar/Navbar";

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
      <div className="w-full">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default App;
