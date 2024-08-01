import React from "react";
// import "../global.css";
import type { Metadata } from "next";
import NavbarDesktop from "@/components/navbar/navbar.desktop";
import Footer from "@/components/footer/footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "KFC Chicken Indonesia",
  description: "Jagonya Ayam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
