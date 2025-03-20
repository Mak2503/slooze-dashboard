"use client";
import { useCallback, useState } from "react";
import Toggle from "../Common/Toggle";
import ItemCard from "./ItemCard";

export type Item = {
  id: number;
  name: string;
  units: number;
  value: number;
};

interface TopItemsListProps {
  title: string;
  items: Item[];
}

const TopItemsList: React.FC<TopItemsListProps> = ({ title, items }) => {
  const [tab, setTab] = useState("value");

  const toggleTab = useCallback(() => {
    setTab((prevTab) => (prevTab === "value" ? "vol." : "value"));
  }, []);

  return (
    <div className="border-gray-300 border-l w-1/2 pl-4 space-y-4">
      <div className="flex justify-between w-full items-center">
        <h3 className="font-bold">{title}</h3>
        <Toggle items={["value", "vol."]} activeItem={tab} toggle={toggleTab} />
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} activeTab={tab} />
        ))}
      </div>
    </div>
  );
};

export default TopItemsList;
