import Container from "./Container";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  const works = [
    {
      title: "Ecommerce Website",
      description:
        "We worked on a revolutionary ecommerce website for a luxury fashion brand. Our team of experts created a visually stunning and user-friendly interface.",
      image: "/trandy.jpeg",
      link: "https://www.example.com/ecommerce",
      tags: ["Ecommerce", "Fashion", "Responsive", "React"],
      liveLink: "https://ecommerce-live.example.com",
      clientLink: "https://github.com/user/ecommerce-client",
      serverLink: "https://github.com/user/ecommerce-server",
    },
    {
      title: "Travel Agency",
      description:
        "We developed a travel agency website for a travel blog. Our team of experts created a visually stunning and user-friendly interface.",
      image: "/res.jpeg",
      link: "https://www.example.com/travel",
      tags: ["Travel", "Agency", "Next.js", "SEO"],
      liveLink: "https://travel-agency-live.example.com",
      clientLink: "https://github.com/user/travel-client",
      serverLink: "https://github.com/user/travel-server",
    },
    {
      title: "Portfolio Website",
      description:
        "We developed a portfolio website for a photographer. Our team of experts created a visually stunning and user-friendly interface.",
      image: "/images/portfolio.jpg",
      link: "https://www.example.com/portfolio",
      tags: ["Portfolio", "Photography", "Minimalistic", "HTML/CSS"],
      liveLink: "https://portfolio-live.example.com",
      clientLink: "https://github.com/user/portfolio-client",
      serverLink: "https://github.com/user/portfolio-server",
    },
    {
      title: "Blogs Website",
      description:
        "We developed a blog website for a fashion blog. Our team of experts created a visually stunning and user-friendly interface.",
      image: "/blogy.jpeg",
      link: "https://www.example.com/blogs",
      tags: ["Blogs", "Content", "CMS", "TailwindCSS"],
      liveLink: "https://blogs-live.example.com",
      clientLink: "https://github.com/user/blogs-client",
      serverLink: "https://github.com/user/blogs-server",
    },
    {
      title: "Fashion Website",
      description:
        "We developed a fashion website for a fashion store. Our team of experts created a visually stunning and user-friendly interface.",
      image: "/images/fashion.jpg",
      link: "https://www.example.com/fashion",
      tags: ["Fashion", "Ecommerce", "UI/UX", "React"],
      liveLink: "https://fashion-live.example.com",
      clientLink: "https://github.com/user/fashion-client",
      serverLink: "https://github.com/user/fashion-server",
    },
  ];

  return (
    <div>
      <Container>
        <h2 className="relative text-3xl font-light tracking-[3px] uppercase text-[#282828]  text-center  after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[80px] after:h-[2px] after:content-[''] after:bg-[#00CECB]">
          Our Best Works
        </h2>
        <p className="text-[#565B5E] max-w-[480px] text-center mx-auto mt-6">
          I help you build brand for your business at an affordable price. Thousands of clients have
          procured exceptional results while working with Me.
        </p>

        <div>
          <Tabs defaultValue="account" className=" mt-[30px]">
            <TabsList className="mx-auto w-full bg-transparent">
              <TabsTrigger value="All" className="tab data-[state=active]:bg-[#acf6f455] ">All</TabsTrigger>
              <TabsTrigger value="Ecommerce" className="tab data-[state=active]:bg-[#acf6f455]">Ecommerce</TabsTrigger>
              <TabsTrigger value="Blogs" className="tab data-[state=active]:bg-[#acf6f455]">Blogs</TabsTrigger>
              <TabsTrigger value="Travels" className="tab data-[state=active]:bg-[#acf6f455]">Travels</TabsTrigger>
              <TabsTrigger value="Portfolio" className="tab data-[state=active]:bg-[#acf6f455]">Portfolio</TabsTrigger>
            </TabsList>
            <TabsContent value="All" className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6 mt-[50px]">
              {works.map((item, idx) => (
                <article
                  key={idx}
                  className="flex md:flex-row flex-col bg-white transition-all duration-300 hover:shadow-xl"
                >
                  <div className=" sm:block sm:basis-56">
                    <Image
                      alt=""
                      width={1024}
                      height={1024}
                      src={item.image}
                      className="aspect-square h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <h3 className="font-bold uppercase text-gray-900">{item.title}</h3>

                      <div className="my-3">
                        <ul className="flex gap-3  items-center flex-wrap">
                          {item.tags.map((tag, idx) => (
                            <li key={idx} className="py-1 px-2 border capitalize">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 p-4">
                      <div className="flex justify-center items-center mb-3">
                        <Link
                          href={item.liveLink}
                          className="flex  justify-center items-center bg-blue-500 text-white border hover:border-blue-500 hover:text-blue-500 hover:bg-white px-5 py-3 text-center text-xs font-bold uppercase  transition "
                        >
                          {/* <MdOutlineRemoveRedEye className="mr-2 text-xs" />    Preview */}
                        </Link>
                      </div>
                      <div className="flex justify-center items-center mb-3">
                        <Link
                          href={item.clientLink}
                          className="flex  justify-center items-center text-blue-500 hover:text-white  border border-blue-500 bg-white hover:bg-blue-500 px-5 py-3 text-center text-xs font-bold uppercase  transition "
                        >
                          {/* <MdOutlineRemoveRedEye className="mr-2 text-xs" /> client */}
                        </Link>
                      </div>
                      {item.serverLink && (
                        <div className="flex justify-center items-center mb-3">
                          <Link
                            href={item.serverLink}
                            className="flex  justify-center items-center text-blue-500 hover:text-white  border border-blue-500 bg-white hover:bg-blue-500 px-5 py-3 text-center text-xs font-bold uppercase  transition "
                          >
                            {/* <MdOutlineRemoveRedEye className="mr-2 text-xs" /> server */}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </TabsContent>
           
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Works;
