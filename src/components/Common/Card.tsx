import React, { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`p-3.5 w-full border border-[#E5E5E5] rounded-xl bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
