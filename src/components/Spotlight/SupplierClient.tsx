"use client";
import React, { useCallback, useState } from "react";
import Toggle from "../Common/Toggle";
import { rupeeConverter } from "@/utils/utils";

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
      <div className="flex bg-primaryBg justify-between p-3 rounded-lg text-xs items-center">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">#1</p>
          <p className="text-sm font-bold">Amit Sethi</p>
        </div>
        <p>{rupeeConverter(209632)}</p>
        <p>39% Win/Loss</p>
        <p>118 Orders</p>
      </div>
    </div>
  );
};

export default SupplierClient;
