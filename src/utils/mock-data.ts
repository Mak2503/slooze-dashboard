import { Item } from "@/components/Spotlight/TopItemsList";

export const paymentInfo = [
  {
    id: 1,
    title: "Payment Receivables",
    iconPath: "/money-bag.svg",
    amount: 1240000,
    percentage: 3.87,
    subText: "Overdue payments: 1,40,000",
    iconBgColor: "#05BF8F1A",
  },
  {
    id: 2,
    title: "Payment Made",
    iconPath: "/cash.svg",
    amount: 950000,
    percentage: undefined,
    subText: "next payment due: 1 week",
    iconBgColor: "#4F45E41A",
  },
  {
    id: 3,
    title: "Total Purchases",
    iconPath: "/shopping-cart.svg",
    amount: 1520000,
    percentage: -5.89,
    subText: "suppliers: 6",
    iconBgColor: "#FF900D1A",
  },
  {
    id: 4,
    title: "Total Sales",
    iconPath: "/chart-line.svg",
    amount: 1800000,
    percentage: 3.87,
    subText: "top selling product: electronics",
    iconBgColor: "#7A21EB1A",
  },
];

export const shipmentList = [
  {
    shipmentId: "#003455MNP",
    from: "87 Some Address",
    to: "15 Some Address",
    progress: 63
  },
  {
    shipmentId: "#001432LDP",
    from: "90 Some Address",
    to: "20 Some Address",
    progress: 20
  },
  {
    shipmentId: "#009822MKS",
    from: "87 Some Address",
    to: "15 Some Address",
    progress: 90
  },
  {
    shipmentId: "#009873KSP",
    from: "87 Some Address",
    to: "15 Some Address",
    progress: 70
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

const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
export const weeklyData = weekDays.map((day) => ({
  name: day,
  sales: Math.floor(Math.random() * 5000),
  purchases: Math.floor(Math.random() * 5000),
}));
  
const dailyTimings = ["6:00AM", "9:00AM", "12:00PM", "3:00PM", "6:00PM", "9:00PM"];
export const dailyData = dailyTimings.map((time) => ({
  name: time,
  sales: Math.floor(Math.random() * 5000),
  purchases: Math.floor(Math.random() * 5000),
}));

export const colorOptions = [
  {
    label: "Blue",
    value: "#4F45E4",
    options: {
      light: "#D6D4F5",
      dark: "#3830B7",
    }
  },
  {
    label: "Green",
    value: "green",
    options: {
      light: "lightgreen",
      dark: "darkgreen",
    }
  },
  {
    label: "Red",
    value: "red",
    options: {
      light: "#FFCCCB",
      // dark: "darkred",
      dark: "#cc0000"
    }
  },
];