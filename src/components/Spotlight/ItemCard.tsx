import React from "react";

interface ItemCardProps {
  id: number;
  name: string;
  units: number;
  value: string;
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
      <div className="rounded-lg border border-[#E9E9E9] p-2 text-sm font-semibold">
        {units} Units
      </div>
    ) : (
      <div className="border border-[#F7F9FB] p-2 text-sm font-semibold">
        {"\u20B9"}
        {value}
      </div>
    );

  return (
    <div className="bg-[#F7F9FB] p-2 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold">#{id}</p>
        <p className="text-sm">{name}</p>
      </div>
      {unitsOrValue}
    </div>
  );
};

export default ItemCard;
