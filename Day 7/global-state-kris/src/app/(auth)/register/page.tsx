import RegisterComponent from "@/components/register.component";
import React from "react";

type Props = {};

export default function Register({}: Props) {
  return (
    <>
      <div>SSR Part</div>
      <RegisterComponent />
    </>
  );
}
