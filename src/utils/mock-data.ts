import { Item } from "@/components/Spotlight/TopItemsList";

export const paymentInfo = [
  {
    id: 1,
    title: "Payment Receivables",
    iconPath: "/money-bag.svg",
    amount: 1240000,
    percentage: 3.87,
    subText: "Overdue payments: 1,40,000",
    iconBgColor: "bg-[#05BF8F1A]",
  },
  {
    id: 2,
    title: "Payment Made",
    iconPath: "/cash.svg",
    amount: 950000,
    percentage: undefined,
    subText: "next payment due: 1 week",
    iconBgColor: "bg-[#4F45E41A]",
  },
  {
    id: 3,
    title: "Total Purchases",
    iconPath: "/shopping-cart.svg",
    amount: 1520000,
    percentage: -5.89,
    subText: "suppliers: 6",
    iconBgColor: "bg-[#FF900D1A]",
  },
  {
    id: 4,
    title: "Total Sales",
    iconPath: "/chart-line.svg",
    amount: 1800000,
    percentage: 3.87,
    subText: "top selling product: electronics",
    iconBgColor: "bg-[#7A21EB1A]",
  },
];

export const topItems: Item[] = [
  {
    id: 1,
    name: "Automotive Parts",
    units: 850,
    value: 200000
  },
  {
    id: 2,
    name: "Steel Sheets",
    units: 430,
    value: 250000
  },
  {
    id: 3,
    name: "Electronic Parts",
    units: 300,
    value: 160000
  },
  {
    id: 4,
    name: "Plastic Materials",
    units: 400,
    value: 540000
  },
  {
    id: 5,
    name: "Office Equipments",
    units: 150,
    value: 220000
  },
]