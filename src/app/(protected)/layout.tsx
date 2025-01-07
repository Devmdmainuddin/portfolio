"use client";
import React, {ReactNode} from "react";
import Sidebar from "./components/Sidebar";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";

const Layout = ({children}: {children: ReactNode}) => {
  const session = useSession();
  if (session.status === "unauthenticated" || session?.data?.user?.type === "user")
    return redirect("/");
  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188]">
      <main className="flex max-w-[1200px]">
        <div className="">
          <Sidebar />
        </div>

        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
