/** @format */
"use server";
import { api } from "@/config/axios.config";
import { loginSchema, registerSchema } from "@/schemas/auth.schema";
import { cookies } from "next/headers";
import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  // try {
  //   const res = await api.get("/users", {
  //     params: {
  //       phone_number: values.phone_number,
  //       password: values.password,
  //     },
  //   });

  //   if (res.data.length === 0) throw new Error("Login Gagal");
  //   const user = res.data[0];
  //   delete user.password;
  //   delete user.confirm_password;

  //   cookies().set("user", JSON.stringify(user));
  //   return {
  //     message: "Login Berhasil",
  //   };
  // } catch (error) {
  //   throw error;
  // }
  try {
    await signIn("credentials", {
      phone_number: values.phone_number,
      password: values.password,
    });
    return { message: "Login Berhasil" };
  } catch (error) {
    throw error;
  }
};

export const actionRegister = async (
  values: z.infer<typeof registerSchema>
) => {
  try {
    await api.post("/users", values);
    return {
      message: "Register Berhasil",
    };
  } catch (error) {
    return {
      message: "Register Gagal",
    };
  }
};

export const actionLogOut = async () => {
  try {
    return await signOut({ redirect: false, redirectTo: "/login" });
    // return {
    //   message: "Logout Berhasil",
    // };
  } catch (error) {
    return {
      message: "Logout Gagal",
    };
  }
};
