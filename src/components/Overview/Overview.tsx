import { paymentInfo } from "@/utils/mock-data";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className="flex justify-between w-full gap-4 items-center">
      {paymentInfo.map((info) => (
        <OverviewCard key={info.id} {...info} />
      ))}
    </div>
  );
};

export default Overview;
