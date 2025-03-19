import PaymentInfoCard from "@/components/common/PaymentInfoCard";
import Header from "@/components/Header";
import { paymentInfo } from "@/utils/mock-data";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Payment Info Cards */}
      <div className="px-6 py-10 flex w-full justify-between items-center gap-4">
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
    </main>
  );
}
