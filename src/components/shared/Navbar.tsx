"use client";
import {Menu} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {usePathname} from "next/navigation";
import Container from "./Container";

type NavLink = {
  href: string;
  text: string;
  icon: string;
};

const Navbar = () => {
  const pathName = usePathname();

  const navlink: NavLink[] = [
    {href: "/", text: "Home", icon: "/icn.png"},
    {href: "/about", text: "About", icon: "/icn.png"},
    {href: "/services", text: "Services", icon: "/icn.png"},
    {href: "/projects", text: "Projects", icon: "/icn.png"},
    {href: "/blog", text: "Blog", icon: "/icn.png"},
    {href: "/contact", text: "Contact", icon: "/icn.png"},
  ];

  const dashboardlink: NavLink[] = [
    {href: "/", text: "Home", icon: "/icn.png"},
    {href: "/admin/project", text: "Manage Projects", icon: "/icn.png"},
    {href: "/admin/addProject", text: "Add Project", icon: "/icn.png"},
    {href: "/admin/contacts", text: "Manage Contact", icon: "/icn.png"},
    {href: "/admin/reviews", text: "Manage Reviews", icon: "/icn.png"},
    {href: "/admin/services", text: "Manage Services", icon: "/icn.png"},
    {href: "/admin/addServices", text: "Add Services", icon: "/icn.png"},
  ];

  // Check if the current path is an admin route
  const isAdminRoute = pathName.includes("admin");

  if (isAdminRoute) {
    return (
      <div className="bg-gray-100 sticky top-0 z-50 border-b">
        <div className="py-4 px-6 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <Menu className="text-2xl -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50" />
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <div>
                        <Link href="/" className="flex items-center gap-3 uppercase">
                          <Image src="/icn.png" alt="logo image" width={40} height={40} />
                          Mainuddin
                        </Link>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="z-10 w-full">
                    <div className="p-5 border rounded shadow-sm mt-6">
                      <nav>
                        <ul className="flex items-start justify-start gap-6 flex-col">
                          {dashboardlink.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                href={item.href}
                                className={`${
                                  pathName === item.href ? "text-green-600 dark:text-green-500" : ""
                                } hover:text-green-600 dark:hover:text-green-600 dark:text-white text-sm transition-all duration-700 capitalize`}
                              >
                                {item.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/icn.png" alt="Logo" width={40} height={40} />
              <span className="font-bold">Mainuddin</span>
            </Link>
          </div>
          <ul className="hidden lg:flex items-center gap-6"></ul>
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-[#131313] bg-gray-100 sticky top-0 z-50 border border-[#d5d5d5] dark:border-[#858484] border-b">
      <div id="nav" className="py-5">
        <Container>
          <div className="flex items-center justify-between z-40">
            <Link href="/" className="flex items-center gap-3 uppercase">
              <Image src="/icn.png" alt="logo image" width={40} height={40} />
              Mainuddin
            </Link>

            <ul className="items-center hidden gap-6 lg:flex">
              {navlink.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className={`${
                      pathName === item.href ? "text-green-600 dark:text-green-500" : ""
                    } hover:text-green-600 dark:hover:text-green-600 dark:text-white text-sm transition-all duration-700 capitalize`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <Menu className="text-2xl -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50" />
                </SheetTrigger>
                <SheetContent >
                  <SheetHeader>
                    <SheetTitle>
                      <div>
                        <Link href="/" className="flex items-center gap-3 uppercase">
                          <Image src="/icn.png" alt="logo image" width={40} height={40} />
                          Mainuddin
                        </Link>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="z-10 w-full">
                    <div className="p-5 border rounded shadow-sm mt-6">
                      <nav>
                        <ul className="flex items-start justify-start gap-6 flex-col">
                          {navlink.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                href={item.href}
                                className={`${
                                  pathName === item.href ? "text-green-600 dark:text-green-500" : ""
                                } hover:text-green-600 dark:hover:text-green-600 dark:text-white text-sm transition-all duration-700 capitalize`}
                              >
                                {item.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
