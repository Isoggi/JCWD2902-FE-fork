"use client";
import { TContextUser, TContextUserArrays } from "@/types/user.types";
import { useUser } from "@/hooks/useUser.hooks";
import React, { createContext } from "react";

type Props = {
  children: React.ReactNode;
};
export const UserContext = createContext<TContextUser>(null);
export default function ContextProvider({ children }: Props) {
  const value: TContextUser = useUser();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
