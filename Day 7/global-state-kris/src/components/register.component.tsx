/** @format */
"use client";
import { UserContext } from "@/providers/context.provider";
import React, { useContext } from "react";

type Props = {};

export default function RegisterComponent({}: Props) {
  const { user, changeName } = useContext(UserContext)!;
  return (
    <div className="flex gap-2">
      <div>{user?.name}</div>
      <button
        className="bg-green-600 text-white p-5"
        onClick={() => changeName("Wowo")}
      >
        Nama jadi Wowo
      </button>
      <button
        className="bg-green-600 text-white p-5"
        onClick={() => changeName("Owi")}
      >
        nama jadi Owi
      </button>
    </div>
  );
}
