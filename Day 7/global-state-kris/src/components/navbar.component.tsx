import Link from "next/link";
import React, { useContext } from "react";
import UserSection from "./userSection.navbar.component";
import HomeSection from "./homeSection.component";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full flex bg-gray-500 dark:bg-gray-900 px-4 py-3 text-gray-700 dark:text-white fixed justify-center top-0">
      <div className="w-full max-w-screen-xl font-bold flex justify-between">
        <HomeSection />
        <Link href={"/"}>Home</Link>
        <UserSection />
      </div>
    </div>
  );
}
