"use server"
import Image from "next/image";
import Container from "./Container";
import {BorderTrail} from "@/components/ui/border-trail";

const Different = () => {
  const different = [
    {
      id: 1,
      title: "Unique and Creative Designs",
      description:
        "I bring your ideas to life with designs that are one-of-a-kind, visually stunning, and aligned with your brand’s identity. Every detail is meticulously crafted to stand out from the competition.",
      image: "/software.gif",
    },
    {
      id: 2,
      title: "Fully Customizable Solutions",
      description:
        "No cookie-cutter templates here! Your website will be a flexible, scalable solution tailored specifically to your business needs, making future updates seamless and hassle-free.",
      image: "/programmer.gif",
    },
    {
      id: 3,
      title: "Innovative and Modern Layouts",
      description:
        "I specialize in creating diverse, modern, and intuitive layouts that keep users engaged while ensuring easy navigation and a delightful browsing experience.",
      image: "/layout.gif",
    },
    {
      id: 4,
      title: "Responsive Across All Devices",
      description:
        "In today’s mobile-first world, your website will look perfect on any device—desktops, tablets, and smartphones—offering a smooth experience for all users.",
      image: "/4.gif",
    },
    {
      id: 5,
      title: "Speed and Performance Optimized",
      description:
        "A fast website means happier users. I ensure that every project is optimized for speed and performance, improving SEO rankings and user retention.",
      image: "/3.gif",
    },
    {
      id: 6,
      title: "SEO-Friendly Design",
      description:
        "My websites are built with SEO in mind, helping your business rank higher on search engines and attract more organic traffic.",
      image: "/6.gif",
    },
    {
      id: 7,
      title: "Scalable and Future-Proof",
      description:
        "I design with growth in mind. Your website will be scalable and ready to handle future expansions or new features effortlessly.",
      image: "/2.gif",
    },

    {
      id: 8,
      title: "Focused on User Experience (UX)",
      description:
        "My designs aren’t just about aesthetics—I prioritize usability to ensure your audience finds what they need quickly and effortlessly.",
      image: "/5.gif",
    },
    {
      id: 9,
      title: "Bug-Free and Smooth Functionality",
      description:
        "I thoroughly test every project to ensure a bug-free experience. Your website will  work flawlessly, delivering a professional impression to your audience.",
      image: "/antivirus.gif",
    },
    {
      id: 10,
      title: "Dedicated Support and Guidance",
      description:
        "From start to finish, I’m here for you. Need help after launch? I provide ongoing support to ensure your website continues to perform at its best.",
      image: "/launch.gif",
    },
  ];
  return (
    <div className="py-[120px] dark:bg-gradient-to-r dark:from-[#272B2F] dark:to-[#77828A]  bg-gradient-to-r from-[#BDE5ED] to-[#DCF1F6]">
      <Container>
        <div className="w-full mx-auto">
          <h2 className="text-3xl font-light tracking-[3px] uppercase text-[#282828] dark:text-white">
            Why I&apos;m Different?
          </h2>
          <p className="mt-2 text-sm">
            We&apos;re smart, we&apos;re hard working, we&apos;re easy to talk to, and we love a
            challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">
          {different.map((Item, idx) => (
            <div
              key={idx}
              className="borderTrail hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500"
            >
              <div className="image">
                <Image
                  src={Item.image}
                  alt="Image"
                  width={80}
                  height={80}
                  className=" rounded-full"
                ></Image>
              </div>
              <div className="content mt-6">
                <h2 className="text-[20px] mb-2.5 font-semibold leading-[1.2] ">{Item.title}</h2>
                <p className="text-sm text-[#282828] dark:text-[#ebeaea]">{Item.description} </p>
              </div>

              <BorderTrail
                className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
                size={120}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Different;
