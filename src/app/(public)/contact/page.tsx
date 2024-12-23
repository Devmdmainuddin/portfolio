import Container from "@/components/shared/Container";
import {Magnetic} from "@/components/ui/magnetic";
import {Mail, MapPin, MessageCircleHeart, PhoneCall} from "lucide-react";
import React from "react";

const Contact = () => {
  const springOptions = {bounce: 0.1};
  return (
    <div className="py-[107px] px-6 lg:px-[114px] bg-[#e3e5e7ec]">
      <Container className="overflow-hidden">
        <div className="flex justify-end flex-col lg:flex-row relative w-full lg:w-[761px] lg:ml-auto">
          <div className="bg-[url('/contact.jpg')] p-6 w-full lg:w-[408px] h-[380px] lg:h-[480px] bg-cover bg-center bg-no-repeat lg:absolute  lg:top-1/2 lg:-translate-y-1/2 lg:-left-[5%] z-30">
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
          </div>
          <div className="w-full lg:w-[486px] lg:h-[617px]  py-12  lg:pl-[115px] px-6  bg-white relative">
            <h1 className="text-3xl text-[#282828] font-bold ">Contact Me</h1>
            <form action="" className="mt-[50px]">
              <input
                type="text"
                className="border-b-2 border-gray-300 w-full py-2  text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Name"
              />
              <input
                type="text"
                className="border-b-2 border-gray-300 w-full py-2  mt-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Email"
              />
              <textarea
                className="border-b-2 border-gray-300 w-full py-2  mt-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 h-[120px] resize-none"
                placeholder="Message"
              />

              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <button
                  type="submit"
                  className=" py-2.5 px-[22px] mt-8 text-white bg-[#003B6A] border-0 rounded-sm  transition-all duration-300 inline-block"
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={springOptions}
                    actionArea="global"
                    range={200}
                  >
                    <span>Send Message</span>
                  </Magnetic>
                </button>
              </Magnetic>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
