"use client";
import { createContext, useCallback, useState } from "react";
import SideNavbar from "./Navbar/SideNavbar";
import Navbar from "./Navbar/Navbar";

interface ThemeContextProps {
  theme: string;
  handleTheme: (color: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "#4F45E4",
  handleTheme: () => {},
});

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, setTheme] = useState("#4F45E4");
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const handleToggle = useCallback(() => {
    setToggleSidebar((prevToggleSidebar) => !prevToggleSidebar);
  }, []);

  const handleTheme = useCallback((color: string) => {
    setTheme(color);
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className={`flex h-screen ${theme}`}>
        <SideNavbar toggleSidebar={toggleSidebar} />
        <div className={`w-full ${toggleSidebar ? "pl-[160px]" : "pl-[70px]"}`}>
          <Navbar handleToggle={handleToggle} />
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
