import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Not found",
  description: "Wow",
};

export default function NotFound({}: Props) {
  return <div>Not Found </div>;
}
