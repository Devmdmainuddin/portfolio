import Container from "@/components/shared/Container";
import {Magnetic} from "@/components/ui/magnetic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const springOptions = {bounce: 0.1};
  return (
    <div className="my-[120px]">
      <Container>
      <div className="flex justify-between items-center flex-col lg:flex-row gap-6">
        <div className=" w-[425px]">
          <Image
            width={500}
            height={500}
            className="max-w-[400px] h-[400px] "
            src="https://i.ibb.co/qRtvz2p/mdmain-uddin-1703923937-1.png"
            alt=""
          />
        </div>

        <div>
          <h2 className="font-normal tracking-[3px] uppercase font-Montserrat">about ME</h2>
          <p className="text-sm text-gray-600 leading-8 font-Montserrat max-w-[480px] mt-6">
            Hello there, myself Md.Mainuddin . My vision is to create solution to grow your
            business. I{`'`}m working with react , node.js, mongodb, Wordpress, Elementor,
            Ecommerce, blog, portfolio, business, booking, real-estate & startup website design from
            scratch and fixing website bug & error.
          </p>
          <ul className="menus capitalize mt-6">
          {/* <li className="mb-2.5"><Link className="inline-block text-lg font-medium text-gray-400 hover:text-green-600 transition duration-300" href="#">Service</Link></li> */}
            <li className=" text-sm leading-8 font-Montserrat ">
              <span className="text-black dark:text-[#858585] text-[16px] font-semibold">
                Name :{" "}
              </span>{" "}
              md.main uddin
            </li>
            <li className=" text-sm leading-8 font-Montserrat">
              <span className="text-black dark:text-[#858585] text-[16px] font-semibold">
                Date of birth :{" "}
              </span>{" "}
              octobar 25,1994{" "}
            </li>
            <li className=" text-sm leading-8 font-Montserrat ">
              <span className="text-black dark:text-[#858585] text-[16px] font-semibold">
                Address :{" "}
              </span>{" "}
              madhabpur , habigonj , sylhet{" "}
            </li>
            <li className=" text-sm leading-8 font-Montserrat ">
              <span className="text-black dark:text-[#858585] text-[16px] font-semibold">
                Zip code :{" "}
              </span>{" "}
              3331{" "}
            </li>
            <li className=" text-sm leading-8 font-Montserrat">
              <span className="text-black dark:text-[#858585] text-[16px] font-semibold">
                Email :{" "}
              </span>
              <a href="mailto:devmdmainuddin@gmail.com"> devmdmainuddin@gmail.com </a>{" "}
            </li>
            <li className=" text-sm leading-8 font-Montserrat">
              <span className="text-black dark:text-[#858585] text-[16px] font-semibold">
                Phone :{" "}
              </span>
              <a href="tel:+8801759483544"> 01759483544</a>{" "}
            </li>
          </ul>
          <Magnetic intensity={0.2} springOptions={springOptions} actionArea="global" range={200}>
            <a
              href="/CV-MD.MAINUDDIN.pdf"
              download="CV-MD-MAINUDDIN"
              target="_blank"
              className="text-xl font-medium capitalize py-3 px-7 border text-green-600 inline-block mt-6  transition-all duration-300 border-green-600 hover:bg-green-600 hover:text-white"
            >
              <Magnetic
                intensity={0.1}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <span>dowanload cv</span>
              </Magnetic>
            </a>
          </Magnetic>
        </div>
      </div>
      </Container>
      
    </div>
  );
};

export default About;
