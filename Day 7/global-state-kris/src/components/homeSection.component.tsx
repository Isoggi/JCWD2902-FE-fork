"use client";
import { UserContext } from "@/providers/context.provider";
import { useAppSelector } from "@/redux/store";
import React, { useContext } from "react";

type Props = {};

export default function HomeSection({}: Props) {
  const context = useContext(UserContext);
  const counter = useAppSelector((state) => state.counter);
  return (
    <div>
      {context?.user?.name}
      {/* {data} */}
      {counter.value}
    </div>
  );
}
