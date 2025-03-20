import PaymentInfoCard from "@/components/Common/PaymentInfoCard";
import Header from "@/components/Header";
import InventoryOverview from "@/components/InventoryOverview/InventoryOverview";
import ShipmentAnalysis from "@/components/ShipmentAnalytics/ShipmentAnalytics";
import Spotlight from "@/components/Spotlight/Spotlight";
import { paymentInfo } from "@/utils/mock-data";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Payment Info Cards */}
      <div className="px-6 py-10 space-y-4">
        <div className="flex w-full justify-between items-center gap-4">
          {paymentInfo.map((info) => (
            <PaymentInfoCard
              key={info.id}
              title={info.title}
              iconPath={info.iconPath}
              amount={info.amount}
              percentage={info.percentage}
              subText={info.subText}
              iconBgColor={info.iconBgColor}
            />
          ))}
        </div>
        {/* Inventory & Shipment */}
        <div className="flex justify-between gap-4">
          <div className="w-2/5">
            <InventoryOverview />
          </div>
          <div className="w-3/5">
            <ShipmentAnalysis />
          </div>
        </div>
        {/* Spotlight */}
        <Spotlight />
      </div>
    </main>
  );
}
