import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Badge = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(`flex h-max items-center gap-1 text-[11px] font-bold bg-[#F7F9FB] border border-[#E5E5E5] p-1 rounded-full`, className)}
    >
      {children}
    </div>
  );
};

export default Badge;
