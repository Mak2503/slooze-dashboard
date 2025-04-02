"use client";
import { useContext } from "react";
import { LocaleContext } from "../App";
import Card from "../Common/Card";
import SpotlightMap from "./SpotlightMap";
import TopItemsList from "./TopItemsList";
import { topItems } from "@/utils/mock-data";

const Spotlight = () => {
  const { t } = useContext(LocaleContext);
  return (
    <Card className="rounded-3xl">
      <div className="flex w-full gap-4">
        <SpotlightMap />
        <div className="flex w-7/12 gap-4">
          <TopItemsList
            title={`${t("spotlight.topitems.title")} ${t(
              "spotlight.topitems.sold"
            )}`}
            items={topItems}
          />
          <TopItemsList
            title={`${t("spotlight.topitems.title")} ${t(
              "spotlight.topitems.purchased"
            )}`}
            items={topItems}
          />
        </div>
      </div>
    </Card>
  );
};

export default Spotlight;
