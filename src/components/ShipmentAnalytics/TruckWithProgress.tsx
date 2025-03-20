import Image from "next/image";
import React from "react";

const TruckWithProgress = ({ progress }: { progress: number }) => {
  return (
    <div className="relative">
      <Image src="/truck.svg" alt="truck" width={110} height={55} />
      {/* <Image src='/progress-mask.svg' alt='progress' width={50} height={35} layout='fixed' className='absolute left-8 top-2.5 z-10' /> */}
      <div
        className="flex bg-primary h-[35px] justify-center absolute items-center left-8 top-2"
        style={{ width: `${(progress / 100) * 80}px` }}
      >
        <p className="text-[7px] text-white z-20">{progress}%</p>
      </div>
    </div>
  );
};

export default TruckWithProgress;
