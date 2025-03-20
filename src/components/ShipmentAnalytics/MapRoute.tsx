import Image from "next/image";
import React from "react";

const MapRoute = () => {
  return (
    // Just a demo image with routes and pinpoints
    <div className="relative">
      <Image src="/map.svg" alt="map" width={450} height={200} />
      <Image
        src="/from-point.svg"
        alt="route-blue"
        width={15}
        height={15}
        className="absolute bottom-8 left-3"
      />
      <Image
        src="/to-point.svg"
        alt="route-blue"
        width={15}
        height={15}
        className="absolute bottom-[58px] left-28 z-10"
      />
      <Image
        src="/to-pinpoint.svg"
        alt="route-blue"
        width={15}
        height={15}
        className="absolute left-[245px] top-3 z-10"
      />
      <Image
        src="/to-pinpoint.svg"
        alt="route-blue"
        width={15}
        height={15}
        className="absolute right-[105px] top-9 z-10"
      />
      <Image
        src="/route-green.svg"
        alt="route-green"
        width={313}
        height={111}
        className="absolute left-5 top-3"
      />
      <Image
        src="/route-blue.svg"
        alt="route-blue"
        width={212}
        height={80}
        className="absolute left-[120px] top-[18px]"
      />
    </div>
  );
};

export default MapRoute;
