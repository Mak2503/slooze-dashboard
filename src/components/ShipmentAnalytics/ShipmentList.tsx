"use client";
import React from "react";
import TrackShipment from "./TrackShipment";

const ShipmentList = () => {
  const shipmentList = [
    {
      shipmentId: "#003455MNP",
      from: "87 Some Address",
      to: "15 Some Address",
    },
    {
      shipmentId: "#001432LDP",
      from: "90 Some Address",
      to: "20 Some Address",
    },
    {
      shipmentId: "#009822MKS",
      from: "87 Some Address",
      to: "15 Some Address",
    },
    {
      shipmentId: "#009873KSP",
      from: "87 Some Address",
      to: "15 Some Address",
    },
  ];
  return (
    <div className="w-2/5 max-h-[265px] overflow-auto space-y-4">
      {shipmentList.map((list) => (
        <TrackShipment
          key={list.shipmentId}
          shipmentId={list.shipmentId}
          from={list.from}
          to={list.to}
        />
      ))}
    </div>
  );
};

export default ShipmentList;
