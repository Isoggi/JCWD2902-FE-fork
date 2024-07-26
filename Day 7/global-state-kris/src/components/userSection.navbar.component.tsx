"use client";
import { UserContext } from "@/providers/context.provider";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { init } from "@/constant/user.constant";

type Props = {};

export default function UserSection({}: Props) {
  const userContext = useContext(UserContext);
  // userContext?.changeName("Kris");
  // userContext?.changeAvatar("/vercel.svg");
  return (
    <div className={"gap-2 flex"}>
      {userContext?.user ? (
        <div>
          <div className="flex items-center"> {userContext?.user?.name}</div>
          <img
            src={userContext?.user?.avatar_url ?? ""}
            alt="Avatar"
            className="w-6 aspect-square rounded-full bg-white"
          />
        </div>
      ) : (
        <div>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </div>
      )}
    </div>
  );
}
