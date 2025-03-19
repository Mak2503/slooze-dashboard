import React from "react";
import Badge from "./Badge";

interface ToggleProps {
  items: string[];
  activeItem: string;
  toggle?: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ items, activeItem, toggle }) => {
  return (
    <Badge>
      {items.map((item) => (
        <div
          key={item}
          onClick={toggle}
          className={`${
            item === activeItem
              ? "bg-[#4F45E4] text-white rounded-full"
              : "opacity-50"
          } px-4 py-1.5 uppercase transition-all duration-300 ease-in-out cursor-pointer`}
        >
          {item}
        </div>
      ))}
    </Badge>
  );
};

export default Toggle;
