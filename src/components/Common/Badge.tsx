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
      className={twMerge(`flex h-max items-center gap-1 text-xxs font-bold bg-primaryBg border border-borderPrimary p-1 rounded-full`, className)}
    >
      {children}
    </div>
  );
};

export default Badge;
