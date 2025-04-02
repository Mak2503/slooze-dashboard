import { useContext } from "react";
import Badge from "./Badge";
import { LocaleContext, ThemeContext } from "../App";

interface ToggleProps {
  items: string[];
  activeItem: string;
  toggle?: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ items, activeItem, toggle }) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LocaleContext);
  return (
    <Badge>
      {items.map((item) => (
        <div
          key={item}
          onClick={toggle}
          className={`${
            item === activeItem
              ? "text-white rounded-full"
              : "opacity-50"
          } w-1/2 px-5 py-1.5 uppercase transition-all duration-300 ease-in-out cursor-pointer`}
          style={{ backgroundColor: item === activeItem ? theme : "" }}
        >
          {t(`toggle.${item}`)}
        </div>
      ))}
    </Badge>
  );
};

export default Toggle;
