"use client";
import Image from "next/image";
import { useContext } from "react";
import { LocaleContext, ThemeContext } from "./App";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LocaleContext);

  return (
    <div className="flex border-b border-borderPrimary justify-between p-5 items-center">
      <div className="flex gap-4">
        <div className="flex bg-white justify-center p-2 rounded-md items-center">
          <Image
            src="business-logo.svg"
            alt="business logo"
            width={30}
            height={30}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{t("common.hello")}, Rahul</h2>
          <p className="text-gray-500 text-sm">ORUE PVT. LTD.</p>
        </div>
        <button
          className="h-max rounded-lg text-white text-xxs font-bold ml-2 px-4 py-2 uppercase"
          style={{ backgroundColor: theme }}
        >
          {t("header.customer")}
        </button>
      </div>
      <select className="border border-borderPrimary p-2 rounded-md text-xs font-bold">
        <option>{t("common.last")} 15 {t("common.days")}</option>
        <option>{t("common.last")} 30 {t("common.days")}</option>
        <option>{t("common.last")} 60 {t("common.days")}</option>
      </select>
    </div>
  );
};

export default Header;
