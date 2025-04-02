import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import App from "@/components/App";
import HTML from "@/components/HTML";
import I18nProvider from "@/components/I18nProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slooze",
  description: "A comprehensive dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HTML>
      <I18nProvider />
      <body className={urbanist.className}>
        <App>
          {children}
        </App>
      </body>
    </HTML>
  );
}
