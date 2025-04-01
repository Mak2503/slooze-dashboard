import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { ThemeContext } from "../App";
import { useContext } from "react";
import { themeSelector } from "@/utils/utils";

type InventoryOverviewChartDataType = {
  name: string;
  sales: number;
  purchases: number;
};

interface InventoryOverviewChartProps {
  data: InventoryOverviewChartDataType[];
}

const InventoryOverviewChart: React.FC<InventoryOverviewChartProps> = ({
  data,
}) => {
  const { theme } = useContext(ThemeContext);
  const lightTheme = themeSelector(theme, "light");
  return (
    <>
      <div className="flex items-center relative">
        <p className="h-max text-nowrap text-xs w-max absolute left-[-50px] opacity-50 rotate-270 top-[50%] transform z-10">
          Total items (in 1000s)
        </p>
        <ResponsiveContainer width="100%" height={205}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis
              dataKey="name"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar
              dataKey="sales"
              barSize={15}
              fill={theme}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="purchases"
              barSize={15}
              fill={lightTheme}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-end text-xxs gap-4 items-center" style={{ color: theme }}>
        <div className="flex gap-1 items-center">
          <div className="h-2 rounded-full w-2" style={{ backgroundColor: theme }}></div>
          <span>Sales</span>
        </div>
        <div className="flex gap-1 items-center">
          <div className="h-2 rounded-full w-2" style={{ backgroundColor: lightTheme }}></div>
          <span>Purchases</span>
        </div>
      </div>
    </>
  );
};

export default InventoryOverviewChart;
