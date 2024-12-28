"use client";
import {Mails, Menu} from "lucide-react";
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
    {
      href: "/",
      text: "Home",
      icon: "/icn.png",
    },
    {
      href: "/about",
      text: "About",
      icon: "/icn.png",
    },
    {
      href: "/services",
      text: "Services",
      icon: "/icn.png",
    },
    {
      href: "/contact",
      text: "Contact",
      icon: "/icn.png",
    },
    {
      href: "/blog",
      text: "Blog",
      icon: "/icn.png",
    },
    {
      href: "/faq",
      text: "FAQ",
      icon: "/icn.png",
    },
    {
      href: "/careers",
      text: "Careers",
      icon: "/icn.png",
    },
  ];
  return (
    <div className="dark:bg-[#131313] bg-gray-100 sticky top-0 z-50 border border-[#d5d5d5] dark:border-[#858484] border-b">
      <div id="nav" className="py-5">
      <Container>
      <div className=" flex items-center justify-between z-40">
          <Link href="" className="flex items-center gap-3 uppercase">
            <Image src="/icn.png" alt="logo image" width={40} height={40} className="" />
            mainuddin
          </Link>

          <ul className="items-center hidden gap-6 lg:flex">
            {navlink.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={`${pathName === item.href && "text-green-600 dark:text-green-500"} hover:text-green-600 dark:hover:text-green-600 dark:text-white text-sm transition-all duration-700 capitalize`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:flex items-center gap-x-3 hidden">
            <div className="md:text-3xl text-xl text-green-600">
              <Mails className="moveup" />
            </div>
            <div className="info">
              <p className="text-sm ">Have any Questions?</p>
                <a
                  className="text-[#282828] dark:text-white font-normal"
                  href="mailto:devmdmainuddin@gmail.com"
                >
                  devmdmainuddin@gmail.com
                </a>
            </div>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                {" "}
                <Menu className="text-2xl -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div>
                      <Link href="" className="flex items-center gap-3 uppercase">
                        <Image
                          src="/icn.png"
                          alt="logo image"
                          width={40}
                          height={40}
                          className=""
                        />
                        mainuddin
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className=" z-10  w-full">
                  <div className="p-5  border rounded shadow-sm mt-6">
                    <nav>
                      <ul className="  flex items-center  gap-6 flex-col ">
                        {navlink.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className={`${pathName === item.href && "text-green-600 dark:text-green-500"} hover:text-green-600 dark:hover:text-green-600 dark:text-white text-sm transition-all duration-700 capitalize`}
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
