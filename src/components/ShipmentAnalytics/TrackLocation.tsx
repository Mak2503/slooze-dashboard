import Image from "next/image";
import React from "react";

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
      <div>
        <Image src="/map.svg" alt="map" width={450} height={200} />
      </div>
      <div className="flex items-center">
        {shipmentDetails.map((detail, index) => (
          <div key={index} className="space-y-2 border-r border-gray-300 last:border-none px-3">
            <p className="text-xs opacity-30">{detail.name}</p>
            <p className="text-sm font-semibold">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackLocation;
