import { memo, useContext } from "react";
import { useRouter, useParams } from "next/navigation";
import { Bell, Calendar, PanelLeftDashedIcon, Settings } from "lucide-react";
import Input from "../Common/Input";
import Image from "next/image";
import { LocaleContext, ThemeContext } from "../App";
import { themeSelector } from "@/utils/utils";

const Navbar = ({ handleToggle }: { handleToggle: () => void }) => {
  const router = useRouter();
  const { locale } = useParams();
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LocaleContext);
  const darkTheme = themeSelector(theme, "dark");
  

  // Handle Language Change
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;
    router.push(`/${selectedLocale}`);
  };

  return (
    <div
      className="flex justify-between items-center px-6 py-3.5"
      style={{ backgroundColor: theme }}
    >
      <div className="flex gap-4 items-center">
        <PanelLeftDashedIcon
          color="white"
          size={20}
          className="cursor-pointer"
          onClick={handleToggle}
        />
        <Input placeholder={t("navbar.search")} />
      </div>
      <div className="flex items-center gap-4">
        {/* Language Selection Dropdown */}
        <select
          value={locale}
          onChange={handleLanguageChange}
          className="bg-transparent text-white border border-white rounded px-2 py-1"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <div className="flex gap-4 items-center">
          <Calendar color="white" size={20} />
          <Bell color="white" size={20} />
          <Settings color="white" size={20} />
          <div
            className="flex rounded-lg gap-2 items-center px-4 py-2"
            style={{ backgroundColor: darkTheme }}
          >
            <div className="text-white text-xxs">
              <p>rohan@etis.xyz</p>
              <p>ETLS PVT. LTD.</p>
            </div>
            <Image src="/avatar.svg" alt="avatar" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
