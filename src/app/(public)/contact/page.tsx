import Container from "@/components/shared/Container";
import {Mail, MapPin, MessageCircleHeart, PhoneCall} from "lucide-react";
import React from "react";
import {Facebook, Github, Instagram, Linkedin} from "lucide-react";
import Link from "next/link";
import Form from "@/components/shared/Form";
const Contact = () => {
  return (
    <div className="py-[107px] px-6 lg:px-[114px] bg-[#E7F6F9] dark:bg-gradient-to-r dark:from-[#708188] dark:to-[#555F65]">
      <Container className="overflow-hidden">
        <div className="flex justify-end flex-col lg:flex-row relative w-full lg:w-[761px] lg:ml-auto">
          <div className="bg-[url('/contact.jpg')] p-6 w-full lg:w-[408px] h-auto lg:h-[450px] bg-cover bg-center bg-no-repeat lg:absolute  lg:top-1/2 lg:-translate-y-1/2 lg:-left-[5%] z-30">
            <h2 className="font-bold text-2xl text-white ">Contact Information</h2>
            <p className="font-normal text-[12px] text-[#C9C9C9]">Chat with our team</p>
            <div className="flex gap-2 text-[16px] mt-8 text-white">
              <PhoneCall className="text-2xl w-6 h-6" /> <p>01759483544</p>
            </div>
            <div className="flex gap-2 text-[16px] mt-8 text-white">
              <MessageCircleHeart className="text-2xl w-6 h-6" /> <p>01759483544</p>
              <p className="border-l pl-3">01741206541</p>
            </div>
            <div className="flex gap-2 text-[16px] mt-8 text-white">
              <Mail className="text-2xl w-6 h-6" /> <p>devmdmainuddin@gmail.com</p>
            </div>
            <div className="flex gap-2 text-[16px] mt-8 text-white">
              <MapPin className="text-2xl w-6 h-6" />{" "}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </div>
            <div className=" w-80 ">
              <h3 className="text-white text-2xl dark:text-gray-300 ">Follow us</h3>

              <div className="flex mt-4 -mx-1.5 ">
                <Link
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400  duration-300 transform hover:text-[#03a9f4] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-5px] transition-all"
                  href="#"
                >
                  <Facebook className="w-8 h-8"></Facebook>
                </Link>

                <Link
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400  duration-300 transform hover:text-[#007aaa] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-5px] transition-all"
                  href="#"
                >
                  <Linkedin className="w-8 h-8"></Linkedin>
                </Link>

                <Link
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400  duration-300 transform hover:text-[#1f2328] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-5px] transition-all"
                  href="#"
                >
                  <Github className="w-8 h-8"></Github>
                </Link>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400  duration-300 transform hover:text-[#ea4c89] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-5px] transition-all"
                  href="#"
                >
                  <Instagram className="w-8 h-8"></Instagram>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[486px] lg:h-[617px]  py-12  lg:pl-[115px] px-6  bg-white relative">
            <Form />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
