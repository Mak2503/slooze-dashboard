import React from "react";
import MapRoute from "./MapRoute";

const TrackLocation = () => {
  const shipmentDetails = [
    {
      name: "Shipment ID",
      value: "#0124BCD",
    },
    {
      name: "Category",
      value: "Electronics",
    },
    {
      name: "Total Weight",
      value: "329 kgs",
    },
    {
      name: "Destination",
      value: "Bangalore",
    },
    {
      name: "Est Arrival",
      value: "2 Hrs",
    },
  ];
  return (
    <div className="w-3/5 space-y-4">
      <MapRoute />
      <div className="flex items-center">
        {shipmentDetails.map((detail, index) => (
          <div
            key={index}
            className="border-gray-300 border-r last:border-none px-3 space-y-2"
          >
            <p className="text-xs opacity-30">{detail.name}</p>
            <p className="text-sm font-semibold">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackLocation;
