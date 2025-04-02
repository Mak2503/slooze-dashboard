"use client";
import { paymentInfo } from "@/utils/mock-data";
import OverviewCard from "./OverviewCard";
import { useContext } from "react";
import { LocaleContext } from "../App";

const Overview = () => {
  const { t } = useContext(LocaleContext);
  console.log(t(`overview.subText.${paymentInfo[0].subText}`), paymentInfo[0].subText)
  return (
    <div className="flex justify-between w-full gap-4 items-center">
      {paymentInfo.map((info) => (
        <OverviewCard
          {...info}
          key={info.id}
          title={t(`overview.title.${info.title}`)}
          subText={t(`overview.subText.${info.subText}.text`)}
          subItem={t(`overview.subText.${info.subText}.subItem`)}
        />
      ))}
    </div>
  );
};

export default Overview;
