import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    sales: 4000,
    purchases: 2400,
  },
  {
    name: "Tues",
    sales: 3000,
    purchases: 1398,
  },
  {
    name: "Wed",
    sales: 2000,
    purchases: 1800,
  },
  {
    name: "Thurs",
    sales: 2780,
    purchases: 3908,
  },
  {
    name: "Fri",
    sales: 1890,
    purchases: 4800,
  },
  {
    name: "Sat",
    sales: 2390,
    purchases: 3800,
  },
  {
    name: "Sun",
    sales: 3490,
    purchases: 4300,
  },
];

const InventoryOverviewChart = () => {
  return (
    <>
      <div className="flex items-center relative">
        <p className="absolute left-[-50px] top-[50%] z-50 transform rotate-270 text-xs text-nowrap opacity-50 w-max h-max">Total items (in 1000s)</p>
        <ResponsiveContainer width={"100%"} height={250}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis
              dataKey="name"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar dataKey="sales" fill="#4F45E4" radius={[4, 4, 0, 0]} />
            <Bar dataKey="purchases" fill="#D6D4F5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-4 justify-end text-[#4F45E4] text-[10px]">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 bg-[#4F45E4] rounded-full"></div>
          <span>Sales</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 bg-[#D6D4F5] rounded-full"></div>
          <span>Purchases</span>
        </div>
      </div>
    </>
  );
};

export default InventoryOverviewChart;
