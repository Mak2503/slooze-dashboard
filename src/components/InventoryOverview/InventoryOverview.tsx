"use client";
import { useCallback, useContext, useState } from "react";
import Card from "../Common/Card";
import Toggle from "../Common/Toggle";
import InventoryOverviewChart from "./InventoryChart";
import { dailyData, weeklyData } from "@/utils/mock-data";
import { LocaleContext } from "../App";

const InventoryOverview = () => {
  const { t } = useContext(LocaleContext);
  const [timeLine, setTimeLine] = useState("weekly");

  const toggleTimeLine = useCallback(() => {
    setTimeLine((prevTimeLine) =>
      prevTimeLine === "daily" ? "weekly" : "daily"
    );
  }, []);

  return (
    <Card className="w-2/5">
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="space-y-1">
            <h3 className="font-bold">{t("inventoryoverview.title")}</h3>
            <p className="text-xs opacity-60">
              {t("inventoryoverview.instockproducts")}: <strong>3,200 {t("inventoryoverview.units")}</strong>
            </p>
          </div>
          <Toggle
            items={["daily", "weekly"]}
            activeItem={timeLine}
            toggle={toggleTimeLine}
          />
        </div>
        <InventoryOverviewChart
          data={timeLine === "weekly" ? weeklyData : dailyData}
        />
      </div>
    </Card>
  );
};

export default InventoryOverview;
