"use client";
import React, { useCallback, useState } from "react";
import Toggle from "../Common/Toggle";
import Card from "../Common/Card";
import InventoryOverviewChart from "./InventoryChart";
import { dailyData, weeklyData } from "@/utils/mock-data";

const InventoryOverview = () => {
  const [timeLine, setTimeLine] = useState("weekly");

  const toggleTimeLine = useCallback(() => {
    setTimeLine((prev) => (prev === "daily" ? "weekly" : "daily"));
  }, []);

  return (
    <Card>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="space-y-1">
            <h3 className="font-bold">Inventory Overview</h3>
            <p className="text-xs opacity-60">
              In-Stock Products: <strong>3,200 Units</strong>
            </p>
          </div>
          <Toggle
            items={["daily", "weekly"]}
            activeItem={timeLine}
            toggle={toggleTimeLine}
          />
        </div>
        <div className="">
          <InventoryOverviewChart
            data={timeLine === "weekly" ? weeklyData : dailyData}
          />
        </div>
      </div>
    </Card>
  );
};

export default InventoryOverview;
