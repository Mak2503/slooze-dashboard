"use client";
import { createContext, useCallback, useState } from "react";
import SideNavbar from "./Navbar/SideNavbar";
import Navbar from "./Navbar/Navbar";
import { useParams } from "next/navigation";
import useDictionary from "@/hooks/useDictionary";

interface ThemeContextProps {
  theme: string;
  handleTheme: (color: string) => void;
}

interface LocaleContextProps {
  t: (key: string) => string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "#4F45E4",
  handleTheme: () => {},
});

export const LocaleContext = createContext<LocaleContextProps>({
  t: () => "",
});

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, setTheme] = useState("#4F45E4");
  const [toggleSidebar, setToggleSidebar] = useState(true);
  
  const { locale } = useParams();
  const { t } = useDictionary(locale ? locale.toString() : "en");

  const handleToggle = useCallback(() => {
    setToggleSidebar((prevToggleSidebar) => !prevToggleSidebar);
  }, []);

  const handleTheme = useCallback((color: string) => {
    setTheme(color);
  }, [])

  console.log("Language", locale, t("common.hello"));

  return (
    <LocaleContext.Provider value={{ t }}>
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className={`flex h-screen ${theme}`}>
        <SideNavbar toggleSidebar={toggleSidebar} />
        <div className={`w-full ${toggleSidebar ? "pl-[160px]" : "pl-[70px]"}`}>
          <Navbar handleToggle={handleToggle} />
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
};

export default App;
