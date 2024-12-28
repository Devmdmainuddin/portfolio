"use client";
import {PhoneCall, MailPlus, MapPinPlus} from "lucide-react";
import {Magnetic} from "../ui/magnetic";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Facebook, Github, Instagram, Linkedin} from "lucide-react";
import Link from "next/link";
import Container from "./Container";
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const springOptions = {bounce: 0.1};

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong while submitting the form.");
      }

      const responseData = await response.json();
      alert(responseData.message || "Form submitted successfully!");
      reset();
    } catch (error) {
      console.log(error);
    
    }
  };

  return (
    <div className=" bg-[#E7F6F9] dark:bg-[#738188] py-7" id="contact">
     <Container>
     <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="w-full p-8 my-4 mr-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl">
          <div className="flex">
            <h1 className="text-5xl text-[#282828] font-bold">Hire Me</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
            <input
              {...register("firstName")}
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline"
              placeholder="First Name"
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}

            <input
              {...register("lastName")}
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Last Name"
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}

            <input
              {...register("email")}
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Email"
              type="email"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            <input
              {...register("phone")}
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Phone"
              type="tel"
            />
            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
          </div>

          <div className="my-4">
            <textarea
              {...register("message")}
              placeholder="Message"
              className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline resize-none"
            />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>

          <div className="my-2 ">
            <Magnetic intensity={0.2} springOptions={springOptions} actionArea="global" range={200}>
              <button type="submit" className="btn inline-block">
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
          </div>
        </div>
      </form>

      <div className="w-full h-[426px] px-8 py-12 ml-auto bg-[url('/contact.jpg')] bg-cover bg-top bg-no-repeat lg:-mt-96 lg:w-2/6 rounded-sm">
        <div className="flex flex-col text-white">
          <div className="my-4">
            <h2 className="text-2xl flex gap-2">
              <PhoneCall className="secleup" /> Call
            </h2>
            <p className="text-gray-200">Tel: +801759483544</p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl flex gap-2">
              {/* <Image src="/message.gif" alt="Message GIF" width={500} height={500} className="w-8 h-8 bg-transparent"/> */}
              <MailPlus className="secleup" /> Email
            </h2>
            <p className="text-gray-200">Email: devmdmainuddin@gmail.com</p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl flex gap-2">
              <MapPinPlus className="secleup" /> Location
            </h2>
            <p className="text-gray-200">27B Grassfield, Lumely</p>
          </div>
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
     </Container>
     
    </div>
  );
};

export default Contact;
