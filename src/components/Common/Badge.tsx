import React, { ReactNode } from "react";

const Badge = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex h-max items-center gap-1 text-[11px] font-bold bg-[#F7F9FB] border border-[#E5E5E5] p-1 rounded-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
