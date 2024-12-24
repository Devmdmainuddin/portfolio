import {Facebook, Github, Instagram, Linkedin} from "lucide-react";
import {Magnetic} from "@/components/ui/magnetic";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import ContactModal from "./ContactModal";
import {Typewriter} from "react-simple-typewriter";
const Hero = () => {
  const springOptions = {bounce: 0.1};

  return (
    <div className="bg-[#f3f6f3] capitalize">
      <Container>
        <div className="relative">
          <div className=" flex flex-col lg:flex-row gap-y-10 py-[100px]  justify-between items-center  ">
            <div className="">
              <h4 className="font-normal tracking-[3px] uppercase font-Montserrat">
                Welcome to my world
              </h4>
              <h1 className="md:text-5xl text-2xl uppercase font-normal leading-[1.5] font-Montserrat">
                Hi, I’m <span className="text-green-600 font-bold">main uddin</span>
                <br />
                <span>a </span>
                <Typewriter
                  words={["Junior MERN Stack ", "Frontend ", "React ", "Next.js "]}
                  loop={true} 
                />
                <span> Developer</span>
              </h1>
              <p className="text-sm text-gray-600 leading-8 font-Montserrat max-w-[480px]">
                I can make unique and dynamic websites for you or your business. With me, you can
                rest easy knowing that your project is in professional hands. Need to consult about
                your problem before ordering? Feel free to reach out and I will try to guide you in
                right direction to the best of my ability.
              </p>
              <div className="App"></div>
              <div>
                <h2 className="leading-[1.5] font-semibold font-Montserrat uppercase mt-6">
                  find with me
                </h2>
                <div className="flex gap-x-4 my-6">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100006959283779"
                    className="shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-10px] transition duration-500 w-[40px] h-[40px]  md:w-[60px] md:h-[50px] border border-[#03a9f4] text-center  
                                            rounded-[10px]  text-[#03a9f4] flex justify-center items-center"
                  >
                    <Facebook className="secleup md:text-[40px] text-2xl leading-[120px]  sm:leading-[90px] fa fa-instagram" />
                  </Link>
                  <div
                    className="shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-10px] transition duration-500 w-[40px] h-[40px]  md:w-[60px] md:h-[50px] border border-[#ea4c89] text-center  
                                rounded-[10px]  text-[#ea4c89] flex justify-center items-center"
                  >
                    <Instagram className="secleup md:text-[40px] text-2xl leading-[120px] [40px] sm:leading-[90px] fa fa-linkedin" />
                  </div>
                  <Link
                    href="https://www.linkedin.com/in/devmainuddin/"
                    className="shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-10px] transition duration-500  md:w-[60px] w-[40px] h-[40px] md:h-[50px] border border-[#007aaa] text-center  
                                            rounded-[10px]  text-[#007aaa] flex justify-center items-center"
                  >
                    <Linkedin className="secleup md:text-[40px] text-2xl leading-[120px]  sm:leading-[90px] " />
                  </Link>
                  <Link
                    href="https://github.com/Devmdmainuddin/"
                    className="shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-10px] transition duration-500  md:w-[60px] w-[40px] h-[40px] md:h-[50px] border border-[#1f2328] text-center  
                                            rounded-[10px]  text-[#1f2328] flex justify-center items-center"
                  >
                    <Github className="secleup md:text-[40px] text-2xl leading-[120px]  sm:leading-[90px] fa fa-linkedin" />
                    <i
                      className="text-[80px] leading-[120px] sm:text-[50px] sm:leading-[90px] fa fa-linkedin"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
              <div className="flex gap-x-6 mt-8 ">
                <div>
                  <ContactModal title="hire me" />
                </div>
                {/* <Link onClick={onButtonClick} className="text-xl font-medium py-3 px-7 border text-green-600  transition-all border-green-600 hover:bg-green-600 hover:text-white">dowanload cv</Link> */}
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <a
                    href="/CV-MD.MAINUDDIN.pdf"
                    download="CV-MD-MAINUDDIN"
                    target="_blank"
                    className="text-xl font-medium capitalize py-3 px-7 border text-green-600 inline-block   transition-all duration-300 border-green-600 hover:bg-green-600 hover:text-white"
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
            <div className="border-emerald-300 rounded-lg border-[10px] overflow-hidden">
              <Image
                src="https://i.ibb.co/qRtvz2p/mdmain-uddin-1703923937-1.png"
                alt="Description of the image"
                width={500}
                height={300}
                className="max-w-[400px] h-[400px] p-2 secleup  transition-all duration-300"
              />
            </div>

            {/* <span className="absolute top-4 right-0">
              <Image
                src="/meteor-rain.png"
                width={150}
                height={150}
                alt="image"
                className="bg-transparent"
              ></Image>
            </span> */}
          </div>

          <div className="w-2/3 -mt-[166] absolute -bottom-12 right-0">
            <div className="relative w-full md:w-[672px] md:ml-auto ">
              <div className=" w-[124px] h-[41px] absolute left-1 top-10 bg-green-600 [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]"></div>
              <div className="flex justify-center items-center gap-x-2 bg-[#e6f8eb] py-7 md:pr-2 md:pl-[96px] [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]">
                <div className=" md:block hidden">
                  <h5 className="text-green-600 text-xl before:content-[''] before:w-[60px] before:border before:border-dotted before:border-green-600 mr-2 before:inline-block ">
                    Let{`'`}s Get in touch
                  </h5>
                  <h3 className="text-xl tracking-[.5px] text-[#0d1013] font-normal">
                    We{`'`}re Ready Develop Your Site!
                  </h3>
                </div>
                <ContactModal title="Make An Appointment" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
