import {Facebook, Github, Instagram, Linkedin} from "lucide-react";
import {Magnetic} from "@/components/ui/magnetic";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {DialogClose} from "@radix-ui/react-dialog";

const Hero = () => {
  const springOptions = {bounce: 0.1};

  return (
    <div className="bg-[#f3f6f3] capitalize">
      <Container>
        <div className="relative">
          <div className=" flex flex-col lg:flex-row  py-[100px]  justify-between items-center  ">
            <div className="">
              <h4 className="font-normal tracking-[3px] uppercase font-Montserrat">
                Welcome to my world
              </h4>
              <h1 className="md:text-5xl text-2xl uppercase font-normal leading-[1.5] font-Montserrat">
                Hi, I’m <span className="text-green-600 font-bold">main uddin</span>
                <br />
                <span>a </span>
                {/* <Typewriter words={['Junior MERN Stack Developer', 'Frontend Developer', 'React Developer', 'Web Designar']}
                            loop={'ture'} /> */}
                {/* <span>Junior MERN Stack Developer</span> */}
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
                    <Facebook className="md:text-[40px] text-2xl leading-[120px]  sm:leading-[90px] fa fa-instagram" />
                  </Link>
                  <div
                    className="shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-10px] transition duration-500 w-[40px] h-[40px]  md:w-[60px] md:h-[50px] border border-[#ea4c89] text-center  
                                rounded-[10px]  text-[#ea4c89] flex justify-center items-center"
                  >
                    <Instagram className="md:text-[40px] text-2xl leading-[120px] [40px] sm:leading-[90px] fa fa-linkedin" />
                  </div>
                  <Link
                    href="https://www.linkedin.com/in/devmainuddin/"
                    className="shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-10px] transition duration-500  md:w-[60px] w-[40px] h-[40px] md:h-[50px] border border-[#007aaa] text-center  
                                            rounded-[10px]  text-[#007aaa] flex justify-center items-center"
                  >
                    <Linkedin className="md:text-[40px] text-2xl leading-[120px]  sm:leading-[90px] " />
                  </Link>
                  <Link
                    href="https://github.com/Devmdmainuddin/"
                    className="shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_150px_0_rgba(196,206,213,0.7)]  dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] hover:translate-y-[-10px] transition duration-500  md:w-[60px] w-[40px] h-[40px] md:h-[50px] border border-[#1f2328] text-center  
                                            rounded-[10px]  text-[#1f2328] flex justify-center items-center"
                  >
                    <Github className="md:text-[40px] text-2xl leading-[120px]  sm:leading-[90px] fa fa-linkedin" />
                    <i
                      className="text-[80px] leading-[120px] sm:text-[50px] sm:leading-[90px] fa fa-linkedin"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
              <div className="flex gap-x-6 mt-8 ">
                <div>
                  <Dialog>
                    <DialogTrigger className="inline-block text-xl font-medium py-3 px-7 border bg-green-600 text-white transition-all border-green-600 hover:bg-white hover:text-green-600 rounded-md">
                      hire me
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-md bg-white p-6 dark:bg-zinc-900">
                      <DialogHeader>
                        <DialogTitle className="text-zinc-900 dark:text-white">
                          Have any Questions?
                        </DialogTitle>
                        <DialogDescription className="text-zinc-600 dark:text-zinc-400">
                          meet me
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6 flex flex-col space-y-4">
                        <label htmlFor="name" className="sr-only">
                          name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="h-9 w-full rounded-sm border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
                          placeholder="Enter your fullname"
                        />
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="h-9 w-full rounded-sm border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
                          placeholder="Enter your email"
                        />
                        <label htmlFor="email" className="sr-only">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Enter your Message"
                          className="h-32 w-full py-3 resize-none rounded-sm border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white "
                        />

                        <DialogClose asChild>
                          <Button type="button" variant="secondary">
                            submit now
                          </Button>
                        </DialogClose>
                      
                      </div>
                    </DialogContent>
                  </Dialog>
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
            <div className="">
              <Image
                width={500}
                height={500}
                className="max-w-[400px] h-[400px] p-2 border-2 border-emerald-300 rounded-lg"
                src="https://i.ibb.co/qRtvz2p/mdmain-uddin-1703923937-1.png"
                alt=""
              />
            </div>
          </div>

          {/* <div className="-mt-[166] absolute -bottom-12 right-0">
            <div className="relative md:w-[672px] ml-auto ">
              <div className="w-[124px] h-[41px] absolute left-1 top-10 bg-green-600 [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]"></div>
              <div className="flex justify items-center gap-x-2 bg-[#e6f8eb] py-7 md:pr-2 md:pl-[96px] [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]">
                <div className=" sm:block hidden">
                  <h5 className="text-green-600 text-xl before:content-[''] before:w-[60px] before:border before:border-dotted before:border-green-600 mr-2 before:inline-block ">
                    Let{`'`}s Get in touch
                  </h5>
                  <h3 className="text-xl tracking-[.5px] text-[#0d1013] font-normal">
                    We{`'`}re Ready Develop Your Site!
                  </h3>
                </div>

                <Link
                  href=""
                  className="bg-green-600 text-xl font-medium py-3 md:px-7 px-3 text-white rounded-sm shadow  transition hover:shadow-lg secleup"
                >
                  Make An Appointment
                </Link>

            

                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <form method="dialog" className="flex justify-end">
                      <button></button>
                    </form>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-sm ">Have any Questions?</p>
                      <h2 className="text-[16px] tracking-[.5px] mt-2 capitalize">meet me</h2>
                    </div>

                  
                  </div>
                </dialog>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
