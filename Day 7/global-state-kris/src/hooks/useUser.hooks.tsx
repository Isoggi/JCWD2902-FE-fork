"use client";
import { TContextUserState, TUser } from "@/constant/userConstant";
import { useState } from "react";

export const useUser = (): TContextUserState => {
  const init: TUser = {
    name: "",
    avatar_url: "/vercel.svg",
  };
  //   const [user, setUser] = useState<TUser>({ ...init });
  const [user, setUser] = useState<TUser>(null);

  const reset = () => setUser(init);
  const changeName = (name: string) => {
    setUser({ ...user, name } as TUser);
  };
  const changeAvatar = (avatar_url: string) => {
    setUser({ ...user, avatar_url } as TUser);
  };

  return [user, reset, changeName, changeAvatar];
};
