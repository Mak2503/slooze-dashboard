"use client"
import React, { useCallback, useState } from "react";
import Toggle from "../common/Toggle";
import Card from "../common/Card";
import InventoryOverviewChart from "./InventoryChart";

const InventoryOverview = () => {
  const [timeLine, setTimeLine] = useState("weekly");

  const toggleTimeLine = useCallback(() => {
    setTimeLine((prev) => prev === "daily" ? "weekly" : "daily");
  }, [])

  return (
    <Card>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="space-y-1">
            <h3 className="font-bold">Inventory Overview</h3>
            <p className="opacity-60 text-xs">In-Stock Products: <strong>3,200 Units</strong></p>
          </div>
          <Toggle items={["daily", "weekly"]} activeItem={timeLine} toggle={toggleTimeLine} />
        </div>
        <div className="">
          <InventoryOverviewChart />
        </div>
      </div>
    </Card>
  );
};

export default InventoryOverview;
