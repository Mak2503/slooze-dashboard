import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        `p-3.5 w-full border border-borderPrimary bg-white rounded-xl`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
