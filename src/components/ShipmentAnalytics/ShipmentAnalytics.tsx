import React from "react";
import Card from "../Common/Card";
import Badge from "../Common/Badge";
import { SlidersHorizontal } from "lucide-react";
import ShipmentList from "./ShipmentList";
import TrackLocation from "./TrackLocation";

const ShipmentAnalytics = () => {
  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="w-1/3 font-bold">Shipment Analytics</h3>
          <div className="w-2/3 flex items-center gap-4">
            <Badge className="rounded-md p-2">
              <SlidersHorizontal size={16} />
              <h4 className="uppercase font-bold text-xs">filters</h4>
            </Badge>
            <Badge className="px-3.5 py-1.5">
              <p className="opacity-60 uppercase text-xs">
                ID: <strong>#003455MNP</strong>
              </p>
            </Badge>
          </div>
        </div>
        <div className="flex gap-4">
          <ShipmentList />
          <TrackLocation />
        </div>
      </div>
    </Card>
  );
};

export default ShipmentAnalytics;
