"use client";
import { TContextUser, TContextUserArrays, TUser } from "@/types/user.types";
import { useState } from "react";

export const useUser = (): TContextUser => {
  const [user, setUser] = useState<TUser>(null);

  const reset = () => setUser(null);
  const changeName = (name: string) => setUser({ ...user, name } as TUser);
  const changeAvatar = (avatar_url: string) =>
    setUser({ ...user, avatar_url } as TUser);
  return { user, reset, changeName, changeAvatar } as TContextUser;
};
// export const useUser = (): [
//   user: TUser,
//   reset: () => void,
//   changeName: (name: string) => void,
//   changeAvatar: (avatar_url: string) => void
// ] => {
//   const [user, setUser] = useState<TUser>(null); //declare state user

//   const reset = () => setUser(null); //reset data user
//   const changeName = (name: string) => setUser({ ...user, name } as TUser); //untuk ganti nama
//   const changeAvatar = (avatar_url: string) =>
//     setUser({ ...user, avatar_url } as TUser); //untuk ganti avatar

//   return [user, reset, changeName, changeAvatar];
// };
