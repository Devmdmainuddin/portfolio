import {fetchProjects} from "@/app/actions/actions";
import Container from "./Container";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs";
import Link from "next/link";
import {CodeXml, Eye} from "lucide-react";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const Project = async () => {
  const project = await fetchProjects();
  return (
    <div className="bg-gradient-to-r from-[#E4F6F9] to-[#CDEEF3] py-[120px] dark:bg-gradient-to-r dark:from-[#77828A] dark:to-[#272B2F]">
      <Container>
        <h2 className="relative text-3xl font-light tracking-[3px] uppercase text-[#282828]  text-center  after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[80px] after:h-[2px] after:content-[''] after:bg-[#00CECB] dark:text-white">
          Our Best Works
        </h2>
        <p className="text-[#565B5E] dark:text-white max-w-[480px] text-center mx-auto mt-6">
          I help you build brand for your business at an affordable price. Thousands of clients have
          procured exceptional results while working with Me.
        </p>

        <div>
          <Tabs defaultValue="All" className=" mt-[30px]">
            <TabsList className="mx-auto w-full bg-transparent">
              <TabsTrigger
                value="All"
                className="tab data-[state=active]:bg-[#acf6f455] dark:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="Ecommerce"
                className="tab data-[state=active]:bg-[#acf6f455] dark:text-white"
              >
                Ecommerce
              </TabsTrigger>
              <TabsTrigger
                value="Blogs"
                className="tab data-[state=active]:bg-[#acf6f455] dark:text-white"
              >
                Blogs
              </TabsTrigger>
              <TabsTrigger
                value="Travels"
                className="tab data-[state=active]:bg-[#acf6f455] dark:text-white"
              >
                Travels
              </TabsTrigger>
              <TabsTrigger
                value="Portfolio"
                className="tab data-[state=active]:bg-[#acf6f455] dark:text-white"
              >
                Portfolio
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="All"
              className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6 mt-[50px]"
            >
              {project.map((item, idx) => (
                <article
                  key={idx}
                  className="flex md:flex-row flex-col bg-white dark:bg-black transition-all duration-300 hover:shadow-xl"
                >
                  <div className=" sm:block sm:basis-56">
                    <Image
                      alt=""
                      width={400}
                      height={400}
                      src={item.image}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <div className="my-3">
                        <ul className="flex gap-3  items-center flex-wrap">
                          {item.tags.map((tag, idx) => (
                            <li key={idx} className="skillsLi capitalize">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-white">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 p-4">
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {" "}
                              <Link
                                href={item.liveLink}
                                target="_blank"
                                className="flex  justify-center items-center btn"
                              >
                                <Eye />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live link</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link
                                href={item.clientLink}
                                className="flex  justify-center items-center btn"
                              >
                                <CodeXml />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Client Code</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {item.serverLink && (
                        <div className="flex justify-center items-center mb-3">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Link
                                  href={item.serverLink}
                                  className="flex  justify-center items-center btn"
                                >
                                  <CodeXml />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>server code</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </TabsContent>
            <TabsContent
              value="Ecommerce"
              className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6 "
            >
              {project.map((item, idx) => (
                <article
                  key={idx}
                  className="flex md:flex-row flex-col bg-white dark:bg-black transition-all duration-300 hover:shadow-xl"
                >
                  <div className=" sm:block sm:basis-56">
                    <Image
                      alt=""
                      width={400}
                      height={400}
                      src={item.image}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <div className="my-3">
                        <ul className="flex gap-3  items-center flex-wrap">
                          {item.tags.map((tag, idx) => (
                            <li key={idx} className="skillsLi capitalize">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-white">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 p-4">
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {" "}
                              <Link
                                href={item.liveLink}
                                target="_blank"
                                className="flex  justify-center items-center btn"
                              >
                                <Eye />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live link</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link
                                href={item.clientLink}
                                className="flex  justify-center items-center btn"
                              >
                                <CodeXml />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Client Code</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {item.serverLink && (
                        <div className="flex justify-center items-center mb-3">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Link
                                  href={item.serverLink}
                                  className="flex  justify-center items-center btn"
                                >
                                  <CodeXml />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>server code</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </TabsContent>
            <TabsContent value="Blogs" className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6 ">
              {project.map((item, idx) => (
                <article
                  key={idx}
                  className="flex md:flex-row flex-col bg-white dark:bg-black transition-all duration-300 hover:shadow-xl"
                >
                  <div className=" sm:block sm:basis-56">
                    <Image
                      alt=""
                      width={400}
                      height={400}
                      src={item.image}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <div className="my-3">
                        <ul className="flex gap-3  items-center flex-wrap">
                          {item.tags.map((tag, idx) => (
                            <li key={idx} className="skillsLi capitalize">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-white">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 p-4">
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {" "}
                              <Link
                                href={item.liveLink}
                                className="flex  justify-center items-center btn"
                              >
                                <Eye />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live link</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link
                                href={item.clientLink}
                                className="flex  justify-center items-center btn"
                              >
                                <CodeXml />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Client Code</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {item.serverLink && (
                        <div className="flex justify-center items-center mb-3">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Link
                                  href={item.serverLink}
                                  className="flex  justify-center items-center btn"
                                >
                                  <CodeXml />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>server code</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </TabsContent>
            <TabsContent value="Travels" className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6 ">
              {project.map((item, idx) => (
                <article
                  key={idx}
                  className="flex md:flex-row flex-col bg-white dark:bg-black transition-all duration-300 hover:shadow-xl"
                >
                  <div className=" sm:block sm:basis-56">
                    <Image
                      alt=""
                      width={400}
                      height={400}
                      src={item.image}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <div className="my-3">
                        <ul className="flex gap-3  items-center flex-wrap">
                          {item.tags.map((tag, idx) => (
                            <li key={idx} className="skillsLi capitalize">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-white">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 p-4">
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {" "}
                              <Link
                                href={item.liveLink}
                                className="flex  justify-center items-center btn"
                              >
                                <Eye />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live link</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link
                                href={item.clientLink}
                                className="flex  justify-center items-center btn"
                              >
                                <CodeXml />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Client Code</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {item.serverLink && (
                        <div className="flex justify-center items-center mb-3">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Link
                                  href={item.serverLink}
                                  className="flex  justify-center items-center btn"
                                >
                                  <CodeXml />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>server code</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </TabsContent>
            <TabsContent
              value="Portfolio"
              className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6 "
            >
              {project.map((item, idx) => (
                <article
                  key={idx}
                  className="flex md:flex-row flex-col bg-white dark:bg-black transition-all duration-300 hover:shadow-xl"
                >
                  <div className=" sm:block sm:basis-56">
                    <Image
                      alt=""
                      width={400}
                      height={400}
                      src={item.image}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                      <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <div className="my-3">
                        <ul className="flex gap-3  items-center flex-wrap">
                          {item.tags.map((tag, idx) => (
                            <li key={idx} className="skillsLi capitalize">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-white">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 p-4">
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {" "}
                              <Link
                                href={item.liveLink}
                                className="flex  justify-center items-center btn"
                              >
                                <Eye />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live link</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex justify-center items-center mb-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link
                                href={item.clientLink}
                                className="flex  justify-center items-center btn"
                              >
                                <CodeXml />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Client Code</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {item.serverLink && (
                        <div className="flex justify-center items-center mb-3">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Link
                                  href={item.serverLink}
                                  className="flex  justify-center items-center btn"
                                >
                                  <CodeXml />
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>server code</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
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

export default Project;
