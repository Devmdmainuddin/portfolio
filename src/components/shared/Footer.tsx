"use server";
import Image from "next/image";
import Link from "next/link";
import {Facebook, Github, Instagram, Linkedin} from "lucide-react";
import Container from "./Container";
const Footer = () => {
  return (
    <footer>
      <section className="bg-[#D9E8F3] dark:bg-black overflow-hidden">
        <div className="py-24">
          <Container>
            <div className="flex flex-wrap justify-center -m-8 mb-12">
              <div className="w-full md:w-1/2 lg:w-3/12 p-4">
                <div className="md:max-w-xs">
                  <Link href="" className="flex items-center gap-3 uppercase dark:text-white">
                    <Image src="/icn.png" alt="" width={220} height={220} className="w-10 h-10  " />
                    mainuddin
                  </Link>
                  <h4 className="font-normal tracking-[3px] uppercase font-Montserrat">
                    Welcome to my world
                  </h4>
                  <p className="text-sm leading-5 font-Montserrat mt-3">
                    You{`'`}ll get 100% quality work and on-time delivery with hand-holding support.
                    If need I try to call, meeting for discussion to understand project requirements
                    & also try to teach how you can manage the website by yourself easily. So, if
                    you have any query in mind please message me.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/12 p-4">
                <h3 className="mb-6 text-lg text-black font-medium uppercase dark:text-white">
                  useful links
                </h3>
                <ul className="menus">
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300"
                      href="#"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300"
                      href="#"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300"
                      href="#"
                    >
                      Project
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300"
                      href="#"
                    >
                      About
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300"
                      href="#"
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-3/12 p-4">
                <h3 className="mb-6 text-lg text-black font-medium uppercase dark:text-white">
                  service
                </h3>
                <ul className="menus">
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300 capitalize"
                      href="#"
                    >
                      professional work
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300 capitalize"
                      href="#"
                    >
                      100% responsive design
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300 capitalize"
                      href="#"
                    >
                      user friendly design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300 capitalize  "
                      href="#"
                    >
                      cross-browser compatible
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300 capitalize"
                      href="#"
                    >
                      speed & seo optimized website
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-4/12 p-4 ">
                <div className="flex flex-wrap -m-2">
                  <div className="w-full p-2">
                    <Link
                      href="https://www.facebook.com/profile.php?id=100006959283779"
                      className="block py-3 px-8 bg-[#03a8f436] dark:bg-white rounded-full hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500"
                    >
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <Facebook className="secleup text-[40px] leading-[120px]  text-[#03a9f4]  sm:leading-[90px] fa fa-instagram hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Follow us on Facebook for updates</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="w-full p-2 ">
                    <Link
                      href="https://github.com/Devmdmainuddin/"
                      className="block py-3 px-8 bg-[#1f232825] dark:bg-white rounded-full hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500"
                    >
                      <div className="flex flex-wrap items-center -m-2 ">
                        <div className="w-auto p-2">
                          <Github className="secleup text-[40px] leading-[120px] text-[#1f2328]  sm:leading-[90px] fa fa-linkedin" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black ">Follow us on github for updates</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full p-2">
                    <Link
                      href="https://www.linkedin.com/in/devmainuddin/"
                      className="block py-3 px-8 bg-[#2375c83d] dark:bg-white rounded-full hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500"
                    >
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <Linkedin className="secleup text-[40px] leading-[120px] text-[#2375c8]  sm:leading-[90px] fa fa-instagram" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Follow us on Linkedin for updates</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="w-full p-2 ">
                    <Link
                      className="block py-3 px-8 bg-[#fe076230] dark:bg-white rounded-full hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500"
                      href="#"
                    >
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <Instagram className="secleup text-[40px] leading-[120px]  text-[#fe0761]  sm:leading-[90px] fa fa-instagram" />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Follow us on Instagram for updates</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <p className="text-center text-sm text-gray-500 pt-8 px-4 border-t w-full">
            All rights reserved © <span className="text-green-600 text-xl">Md.Mainuddin</span> 2024
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
