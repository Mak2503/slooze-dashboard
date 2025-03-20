"use client";
import TrackShipment from "./TrackShipment";
import { shipmentList } from "@/utils/mock-data";

const ShipmentList = () => {
  return (
    <div className="w-2/5 max-h-[220px] overflow-scroll pr-4 scroll-container space-y-4">
      {shipmentList.map((list) => (
        <TrackShipment
          key={list.shipmentId}
          {...list}
        />
      ))}
    </div>
  );
};

export default ShipmentList;
