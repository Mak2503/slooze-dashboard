import Image from "next/image";
import Card from "../Common/Card";
import { MoveDownRight, MoveUpRight } from "lucide-react";
import { rupeeConverter } from "@/utils/utils";

interface OverviewCardProps {
  title: string;
  iconPath: string;
  amount: number;
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

const OverviewCard: React.FC<OverviewCardProps> = ({
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
            <p className="text-[26px] text-primary font-bold">
              {rupeeConverter(amount)}
            </p>
            <span
              className={`${
                percentage! > 0 ? "text-green-600" : "text-red-600"
              } text-xxs flex items-center mt-2`}
            >
              {percentage && <ShowTrend percentage={percentage} />}
            </span>
          </div>
          <p className="text-xs font-semibold opacity-30 uppercase">
            {subText}
          </p>
        </div>
        <div
          className="h-max p-2 rounded-md"
          style={{ backgroundColor: iconBgColor }}
        >
          <Image src={iconPath} alt={iconPath} width={20} height={20} />
        </div>
      </div>
    </Card>
  );
};

export default OverviewCard;
