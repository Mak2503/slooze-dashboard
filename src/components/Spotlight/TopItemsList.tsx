"use client";
import React, { useCallback, useState } from "react";
import Toggle from "../Common/Toggle";
import ItemCard from "./ItemCard";

export type Item = {
  id: number;
  name: string;
  units: number;
  value: string;
};

interface TopItemsListProps {
  title: string;
  items: Item[];
}

const TopItemsList: React.FC<TopItemsListProps> = ({ title, items }) => {
  const [tab, setTab] = useState("value");

  const toggleTab = useCallback(() => {
    setTab((prev) => (prev === "value" ? "vol." : "value"));
  }, []);

  return (
    <div className="w-1/2 border-l border-gray-300 pl-4 space-y-4">
      <div className="flex items-center justify-between w-full">
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
