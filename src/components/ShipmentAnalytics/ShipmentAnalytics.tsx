"use client";
import Card from "../Common/Card";
import Badge from "../Common/Badge";
import { SlidersHorizontal } from "lucide-react";
import ShipmentList from "./ShipmentList";
import TrackLocation from "./TrackLocation";
import { LocaleContext } from "../App";
import { useContext } from "react";

const ShipmentAnalytics = () => {
  const { t } = useContext(LocaleContext);
  return (
    <Card className="w-3/5">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="w-1/3 font-bold">{t("shipmentanalytics.title")}</h3>
          <div className="flex w-2/3 gap-4 items-center">
            <Badge className="p-2 rounded-md">
              <SlidersHorizontal size={16} />
              <h4 className="text-xs font-bold uppercase">{t("common.filters")}</h4>
            </Badge>
            <Badge className="px-3.5 py-1.5">
              <p className="text-xs opacity-60 uppercase">
                ID: <strong>#003455MNP</strong>
              </p>
            </Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <ShipmentList />
          <TrackLocation />
        </div>
      </div>
    </Card>
  );
};

export default ShipmentAnalytics;
