"use client";
import React, { useCallback, useState } from "react";
import Toggle from "../Common/Toggle";

const SupplierClient = () => {
  const [toggle, setToggle] = useState("clients");

  const handleToggle = useCallback(() => {
    setToggle((prev) => (prev === "clients" ? "suppliers" : "clients"));
  }, []);

  return (
    <div>
      <div className="w-max">
        <Toggle
          items={["suppliers", "clients"]}
          activeItem={toggle}
          toggle={handleToggle}
        />
      </div>
      <div></div>
    </div>
  );
};

export default SupplierClient;
