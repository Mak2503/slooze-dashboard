"use client";
import { useContext } from "react";
import Image from "next/image";
import { LocaleContext } from "../App";

const TrackLocation = () => {
  const { t } = useContext(LocaleContext);
  const shipmentDetails = [
    {
      name: "shipmentid",
      value: "#0124BCD",
    },
    {
      name: "category",
      value: "Electronics",
    },
    {
      name: "totalweight",
      value: "329 kgs",
    },
    {
      name: "destination",
      value: "Bangalore",
    },
    {
      name: "estarrival",
      value: "2 Hrs",
    },
  ];
  return (
    <div className="w-3/5 space-y-4">
      <Image src="/map-route.svg" alt="map-route" width={450} height={200} />
      <div className="flex items-center">
        {shipmentDetails.map((detail) => (
          <div
            key={detail.name}
            className="border-gray-300 border-r last:border-none px-3 space-y-2"
          >
            <p className="text-xs opacity-30">{t(`shipmentanalytics.${detail.name}`)}</p>
            <p className="text-sm font-semibold">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackLocation;
