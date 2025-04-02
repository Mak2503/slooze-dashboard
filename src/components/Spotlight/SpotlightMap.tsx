"use client";
import Badge from "../Common/Badge";
import Image from "next/image";
import SupplierClient from "./SupplierClient";
import { LocaleContext } from "../App";
import { useContext } from "react";

const SpotlightMap = () => {
  const { t } = useContext(LocaleContext);
  return (
    <div className="w-5/12">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{t("spotlight.title")}</h3>
        <Badge className="p-2 rounded-md uppercase">
          {t("spotlight.allregions")}
        </Badge>
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
