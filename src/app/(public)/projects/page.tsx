import React from "react";
import Container from "@/components/shared/Container";
import {fetchProjects} from "@/app/actions/actions";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import {CodeXml, Eye} from "lucide-react";
import Image from "next/image";
const page = async () => {
  const project = await fetchProjects();
  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188] py-[86px]">
      <Container>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6 ">
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
        </div>
      </Container>
    </div>
  );
};

export default page;
