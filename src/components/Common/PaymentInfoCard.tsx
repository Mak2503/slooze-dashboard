import React from "react";
import Card from "./Card";
import Image from "next/image";
import { MoveDownRight, MoveUpRight } from "lucide-react";

interface PaymentInfoCardProps {
  title: string;
  iconPath: string;
  amount: string;
  percentage?: number;
  subText: string;
  iconBgColor?: string;
}

const ShowTrend = ({ percentage }: { percentage: number }) => {
  return percentage! > 0 ? (
    <>
      +{percentage}
      <MoveUpRight size={12} />
    </>
  ) : (
    <>
      {percentage}
      <MoveDownRight size={12} />
    </>
  );
};

const PaymentInfoCard: React.FC<PaymentInfoCardProps> = ({
  title,
  iconPath,
  amount,
  percentage,
  subText,
  iconBgColor,
}) => {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="space-y-1.5">
          <p className="opacity-50">{title}</p>
          <div className="flex gap-2">
            <p className="text-[26px] font-bold text-primary">
              {"\u20B9"}
              {amount}
            </p>
            <span
              className={`${
                percentage! > 0 ? "text-green-600" : "text-red-600"
              } text-xxs flex items-center mt-2`}
            >
              {percentage !== undefined && (
                <ShowTrend percentage={percentage} />
              )}
            </span>
          </div>
          <p className="opacity-30 uppercase text-xs font-semibold">{subText}</p>
        </div>
        <div className={`p-2 ${iconBgColor} rounded-md h-max`}>
          <Image src={iconPath} alt={iconPath} width={18} height={18} />
        </div>
      </div>
    </Card>
  );
};

export default PaymentInfoCard;
