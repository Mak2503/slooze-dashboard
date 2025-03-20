import React from "react";
import Badge from "../Common/Badge";
import Image from "next/image";
import SupplierClient from "./SupplierClient";

const SpotlightMap = () => {
  return (
    <div className="w-2/4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Spotlight</h3>
        <Badge className="rounded-md p-2">ALL REGIONS</Badge>
      </div>
      <div className="relative">
        <Image src="/worldmap.svg" alt="worldmap" width={630} height={270} />
        <Image
          className="absolute bottom-0"
          src="/worldmap-gradient.svg"
          alt="worldmap-gradient"
          width={630}
          height={135}
        />
      </div>
      <SupplierClient />
    </div>
  );
};

export default SpotlightMap;
