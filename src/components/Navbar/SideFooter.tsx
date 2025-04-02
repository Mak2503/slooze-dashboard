import { Settings } from "lucide-react";
import { LocaleContext, ThemeContext } from "../App";
import { useContext } from "react";

const SideFooter = ({ toggleSidebar }: { toggleSidebar: boolean }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LocaleContext);
  return (
    <div className="space-y-4">
      <div className="flex border-b-2 border-black/10 gap-1 items-center py-4">
        <svg
          width="24"
          className="rounded-md mx-2"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.08 15.395 11.2007 15.0993 11.2 14.75C11.1993 14.4007 11.0787 14.1047 10.838 13.862C10.5973 13.6193 10.3013 13.4987 9.95 13.5C9.59867 13.5013 9.303 13.6223 9.063 13.863C8.823 14.1037 8.702 14.3993 8.7 14.75C8.698 15.1007 8.819 15.3967 9.063 15.638C9.307 15.8793 9.60267 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9627 11.1667 11.088 10.85C11.2133 10.5333 11.5673 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70401 13.175 8.31201C13.425 7.92 13.55 7.44934 13.55 6.9C13.55 5.96667 13.2083 5.25001 12.525 4.75001C11.8417 4.25001 11.0333 4.00001 10.1 4.00001C9.15 4.00001 8.37933 4.25001 7.788 4.75001C7.19667 5.25001 6.784 5.85001 6.55 6.55001L8.2 7.20001C8.28333 6.9 8.471 6.57501 8.763 6.22501C9.055 5.87501 9.50067 5.70001 10.1 5.70001C10.6333 5.70001 11.0333 5.846 11.3 6.138C11.5667 6.43 11.7 6.75067 11.7 7.10001C11.7 7.43334 11.6 7.74601 11.4 8.038C11.2 8.33 10.95 8.60067 10.65 8.85001C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7377 6.1 19.213C4.88334 18.6883 3.825 17.9757 2.925 17.075C2.025 16.1743 1.31267 15.116 0.788001 13.9C0.263335 12.684 0.000667933 11.384 1.26582e-06 10C-0.000665401 8.616 0.262001 7.31601 0.788001 6.10001C1.314 4.88401 2.02633 3.82567 2.925 2.92501C3.82367 2.02434 4.882 1.31201 6.1 0.788005C7.318 0.264005 8.618 0.00133838 10 5.0505e-06C11.382 -0.00132828 12.682 0.261339 13.9 0.788005C15.118 1.31467 16.1763 2.02701 17.075 2.92501C17.9737 3.82301 18.6863 4.88134 19.213 6.10001C19.7397 7.31867 20.002 8.61867 20 10C19.998 11.3813 19.7353 12.6813 19.212 13.9C18.6887 15.1187 17.9763 16.177 17.075 17.075C16.1737 17.973 15.1153 18.6857 13.9 19.213C12.6847 19.7403 11.3847 20.0027 10 20Z"
            fill={theme}
          />
        </svg>
        {toggleSidebar && <p>{t("navlist.help")}</p>}
      </div>
      <div className="flex gap-1 items-center">
        <div className="bg-[#F4F4F4] p-2 rounded-md">
          <Settings />
        </div>
        {toggleSidebar && <p className="overflow-hidden">{t("navlist.settings")}</p>}
      </div>
    </div>
  );
};

export default SideFooter;
