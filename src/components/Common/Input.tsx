import { Search } from "lucide-react";
import { ThemeContext } from "../App";
import { useContext } from "react";
import { themeSelector } from "@/utils/utils";

const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  const { theme } = useContext(ThemeContext);
  const darkTheme = themeSelector(theme, "dark");
  return (
    <div className="flex rounded-lg text-white gap-2 items-center px-2 py-1.5" style={{ background: darkTheme }}>
      <Search size={20} />
      <input
        type="text"
        className="border-none text-[17px] focus:ring-0 min-w-[350px] outline-none placeholder:text-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
