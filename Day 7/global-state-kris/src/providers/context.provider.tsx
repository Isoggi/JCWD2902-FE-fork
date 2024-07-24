"use client";
import { TContextUser } from "@/constant/userConstant";
import { useUser } from "@/hooks/useUser.hooks";
import React, { createContext } from "react";

type Props = {
  children: React.ReactNode;
};
export const UserContext = createContext<TContextUser>(null);
export default function ContextProvider({ children }: Props) {
  const [user, reset, changeName, changeAvatar] = useUser();
  return (
    <UserContext.Provider value={{ user, reset, changeName, changeAvatar }}>
      {children}
    </UserContext.Provider>
  );
}
