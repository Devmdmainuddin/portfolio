"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    href: string;
    text: string;
    icon: string;
  };
const Sidebar = () => {
     const pathName = usePathname();
    const dashboardlink: NavLink[] = [
        {
          href: "/",
          text: "Home",
          icon: "/icn.png",
        },
        {
          href: "/admin/project",
          text: "Manage Projects",
          icon: "/icn.png",
        },
        {
          href: "/admin/addProject",
          text: "AddProject",
          icon: "/icn.png",
        },
        {
          href: "/admin/contacts",
          text: "Manage Contact",
          icon: "/icn.png",
        },
        {
          href: "/admin/reviews",
          text: "Manage Reviews",
          icon: "/icn.png",
        },
        {
          href: "/admin/services",
          text: "Manage Services",
          icon: "/icn.png",
        },
        {
          href: "/admin/addServices",
          text: "Add Services",
          icon: "/icn.png",
        },
      ];
    return (
        <div className='border-t min-h-screen hidden md:inline-block w-64 p-4 pl-16 bg-slate-300 dark:bg-gray-800 dark:text-gray-50 text-center'>
            <nav>
                        <ul className="  flex items-start justify-start   gap-6 flex-col ">
                          {dashboardlink.map((item, idx) => (
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
    );
};

export default Sidebar;
