import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import App from "@/components/App";

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
    <html lang="en">
      <body className={urbanist.className}>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}
