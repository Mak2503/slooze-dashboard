import { rupeeConverter } from "@/utils/utils";
import React from "react";

interface ItemCardProps {
  id: number;
  name: string;
  units: number;
  value: number;
  activeTab?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  name,
  units,
  value,
  activeTab = "value",
}) => {
  const unitsOrValue =
    activeTab === "vol." ? (
      <div className="border border-[#E9E9E9] p-2 rounded-lg text-sm font-semibold">
        {units} Units
      </div>
    ) : (
      <div className="border border-primaryBg p-2 text-sm font-semibold">
        {rupeeConverter(value)}
      </div>
    );

  return (
    <div className="flex bg-primaryBg justify-between p-2 rounded-lg items-center">
      <div className="flex gap-2 items-center">
        <p className="text-sm font-bold">#{id}</p>
        <p className="text-sm">{name}</p>
      </div>
      {unitsOrValue}
    </div>
  );
};

export default ItemCard;
