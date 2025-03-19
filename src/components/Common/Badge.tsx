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
      className={`flex items-center gap-2 text-[11px] font-bold bg-[#F7F9FB] border border-[#E5E5E5] rounded-full p-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
