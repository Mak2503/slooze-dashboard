"use client"
import React, { useState } from "react";
import SideNavbar from "./Navbar/SideNavbar";
import Navbar from "./Navbar/Navbar";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [minimizeSidebar, setMinimizeSidebar] = useState(false);

  const handleMinimize = () => {
    setMinimizeSidebar((prev) => !prev);
  }

  return (
    <div className="flex h-screen">
      <SideNavbar minimize={minimizeSidebar} />
      <div className="w-full">
        <Navbar handleMinimize={handleMinimize} />
        {children}
      </div>
    </div>
  );
};

export default App;
