import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar.component";
import ContextProvider from "@/providers/context.provider";
import ReduxProvider from "@/providers/redux.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global State",
  description: "Spontan Uhuy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-black dark:text-white bg-gray-100 dark:bg-gray-700`}
      >
        <ReduxProvider>
          <ContextProvider>
            <Navbar />
            <div className="flex justify-center w-full">
              <div className="w-full max-w-screen-xl mt-16 mx-5">
                {children}
              </div>
            </div>
          </ContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
