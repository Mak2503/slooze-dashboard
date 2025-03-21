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
              ? "bg-primary text-white rounded-full"
              : "opacity-50"
          } w-1/2 px-5 py-1.5 uppercase transition-all duration-300 ease-in-out cursor-pointer`}
        >
          {item}
        </div>
      ))}
    </Badge>
  );
};

export default Toggle;
