import Header from "@/components/Header";
import Overview from "@/components/Overview/Overview";
import InventoryOverview from "@/components/InventoryOverview/InventoryOverview";
import ShipmentAnalysis from "@/components/ShipmentAnalytics/ShipmentAnalytics";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-6 py-10 space-y-4">
        <Overview />
        <div className="flex justify-between gap-4">
          <InventoryOverview />
          <ShipmentAnalysis />
        </div>
        <Spotlight />
      </div>
    </>
  );
}
