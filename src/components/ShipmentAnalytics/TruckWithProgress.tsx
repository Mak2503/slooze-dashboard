"use client";
import Image from "next/image";
import { ThemeContext } from "../App";
import { useContext } from "react";

const TruckWithProgress = ({ progress }: { progress: number }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="relative">
      <Image src="/truck.svg" alt="truck" width={110} height={55} />
      <div
        className="flex h-[35px] justify-center absolute items-center left-8 top-2"
        style={{ width: `${(progress / 100) * 80}px`, backgroundColor: theme }}
      >
        <p className="text-[7px] text-white z-20">{progress}%</p>
      </div>
    </div>
  );
};

export default TruckWithProgress;
