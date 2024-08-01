declare module "next-auth" {
  interface User {
    id: number | undefined;
    email: string | undefined;
    full_name: string | undefined;
    phone_number: string | undefined;
    gender: "Pria" | "Perempuan" | undefined;
  }

  interface Session {
    user: User;
  }
}

import { JWT } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    id: number | undefined;
    email: string | undefined;
    full_name: string | undefined;
    phone_number: string | undefined;
    gender: "Pria" | "Perempuan" | undefined;
  }
}
