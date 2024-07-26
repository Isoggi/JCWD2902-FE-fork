"use client";
import { UserContext } from "@/providers/context.provider";
import { TUser } from "@/types/user.types";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";

type Props = {};

export default function LoginComponent({}: Props) {
  const [input, setInput] = useState<TUser>(null);
  const context = useContext(UserContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.id]: e.target.value } as TUser);
  };

  useEffect(() => {
    console.log(input);
    localStorage.setItem("input", JSON.stringify(input));
  }, [input]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>
          <input
            title="inputName"
            type="text"
            id="name"
            className="border dark:bg-gray-300 dark:text-gray-700"
            onChange={handleChange}
          />{" "}
          <button
            className="bg-black text-white px-2 py-1"
            onClick={() => context?.changeName(input?.name!)}
          >
            Change name
          </button>
        </div>

        <div>
          <input
            title="inputAvatarUrl"
            type="text"
            id="avatar_url"
            className="border  dark:bg-gray-300 dark:text-gray-700"
            onChange={handleChange}
          />{" "}
          <button
            className="bg-black text-white px-2 py-1"
            onClick={() => context?.changeAvatar(input?.avatar_url!)}
          >
            Change avatar
          </button>
        </div>
        <div>
          <button
            className="bg-black text-white px-2 py-1"
            onClick={() => context?.reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
