"use client";
import React, { useCallback, useState } from "react";
import Toggle from "../Common/Toggle";

const SupplierClient = () => {
  const [toggle, setToggle] = useState("clients");

  const handleToggle = useCallback(() => {
    setToggle((prev) => (prev === "clients" ? "suppliers" : "clients"));
  }, []);

  return (
    <div className="space-y-4">
      <div className="w-max">
        <Toggle
          items={["suppliers", "clients"]}
          activeItem={toggle}
          toggle={handleToggle}
        />
      </div>
      <div className="bg-primaryBg p-3 rounded-lg flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <p className="font-semibold">#1</p>
          <p className="text-sm font-bold">Amit Sethi</p>
        </div>
        <p>{"\u20B9"}2,09,632</p>
        <p>39% Win/Loss</p>
        <p>118 Orders</p>
      </div>
    </div>
  );
};

export default SupplierClient;
