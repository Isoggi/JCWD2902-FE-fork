/** @format */
"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/../public/kfc-logo.svg";
import Link from "next/link";
import "./navbar.css";
import { Menu } from "lucide-react";
// import { signOut } from "@/auth";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { actionLogOut } from "@/action/auth.action";

type Props = {};
export default function NavbarDesktop({}: Props) {
  const { data: session } = useSession();
  // const router = useRouter();
  // const logOut = async () => {
  //   await signOut({ redirect: false }).then(() => {
  //     toast("Logout berhasil");
  //     router.push("/login");
  //   });
  // };
  const logOut = async () => {
    await actionLogOut().then(() => {
      toast("Logout Berhasil");
    });
  };
  return (
    <div className="w-full shadow sticky top-0 bg-white z-50">
      <div className="  max-w-[1220px]  2xl:max-w-[1440px] m-auto w-full p-3 px-[15px] flex justify-between">
        <div className="flex">
          <Image
            src={Logo}
            alt=""
            width={150}
            height={78}
            className="w-[150px] h-[78px]"
          />
          <Link
            href="/"
            className="flex items-center w-[85px] text-lg  justify-end font-bold"
          >
            MENU
          </Link>
          <Link
            href="/"
            className="flex items-center w-[85px] text-lg  justify-end font-bold"
          >
            {session?.user.full_name}
          </Link>
        </div>

        <div className="flex max-w-[465px] w-full text-[15px] items-center justify-end">
          <Link href={"#"} className="text-[#e4002b] font-bold mr-[6px]">
            Kode Promosi
          </Link>
          <Link href={"#"} className="font-bold">
            English
          </Link>

          <div className="flex items-center">
            <div className="avatar"></div>
            <div className="cart">1</div>
          </div>

          <button
            title="Menu"
            type="button"
            className="ml-[14px]"
            onClick={logOut}
          >
            <Menu width={25} height={33} />
          </button>
        </div>
      </div>
    </div>
  );
}
