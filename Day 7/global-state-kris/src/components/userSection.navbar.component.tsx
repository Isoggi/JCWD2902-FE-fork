"use client";
import { UserContext } from "@/providers/context.provider";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";

type Props = {};

export default function UserSection({}: Props) {
  const userContext = useContext(UserContext);
  userContext?.changeAvatar("/vercel.svg");
  userContext?.changeName("Kris");
  return (
    <div className={`gap-2 ${userContext?.user ? "hidden" : "flex"}`}>
      {userContext?.user ? (
        <div>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </div>
      ) : (
        <div>
          <div>{userContext?.user?.name}</div>
          <Image src={userContext?.user?.avatar_url ?? ""} alt="Avatar" />
        </div>
      )}
    </div>
  );
}
