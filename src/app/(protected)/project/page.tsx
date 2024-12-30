"use server";
import React from "react";
import Container from "@/components/shared/Container";

import {ChevronLeft, ChevronRight, Eye, FilePenLine, Trash2} from "lucide-react";
import Image from "next/image";
import { fetchProjects} from "@/app/actions/actions";
import Link from "next/link";

const Project = async () => {
  const project = await fetchProjects();

// const hendleDelete = (id: string) => {
//   deleteProject(id)
//     .then((isDeleted) => {
//       if (isDeleted) {
//         console.log(`Project with ID ${id} deleted successfully.`);
//       } else {
//         console.log(`Failed to delete project with ID ${id}.`);
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

  

  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188] capitalize">
      <Container>
        <section className="py-8">
          <div className="container px-4 mx-auto">
            <div className="p-4 mb-6 bg-white shadow rounded overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-xs text-gray-500 text-left">
                    <th className="pl-6 pb-3 font-medium">Project ID</th>
                    <th className="pb-3 font-medium">image</th>
                    <th className="pb-3 font-medium">title</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {project.map((item) => (
                    <tr key={item._id} className="text-xs bg-gray-100 border-b border-gray-300 ">
                      <td className="py-5 px-6 font-medium">#{item._id}</td>
                      <td className="inline-block w-[120px] h-[120px]">
                        <Image
                          width={120}
                          height={120}
                          className="w-full h-full  object-cover rounded-sm"
                          src={item.image}
                          alt=""
                        />
                      </td>
                      <td className="font-medium">{item.title}</td>

                      <td>
                        <span className="inline-block py-1 px-2 ">
                          {item.createdAt ? new Date(item.createdAt).toLocaleString() : "N/A"}
                        </span>
                      </td>
                      <td>
                        <div className="flex gap-1 items-center ">
                          <Link className="inline-block" href="#">
                            <Eye className="text-sm w-6 h-6 bg-red-100 p-1 rounded-sm" />
                          </Link>
                          <Link className="inline-block" href={`/project/${item._id}`}>
                            <FilePenLine className="text-sm w-6 h-6 bg-red-100 p-1 rounded-sm" />
                          </Link>

                          <button  className="inline-block">
                            <Trash2 className="text-sm w-6 h-6 bg-red-100 p-1 rounded-sm" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap -mx-4 items-center justify-between">
              <div className="w-full lg:w-1/3 px-4 flex items-center mb-4 lg:mb-0">
                <p className="text-xs text-gray-400">Show</p>
                <div className="mx-3 py-2 px-2 text-xs text-gray-500 bg-white border rounded">
                  <select name="" id="">
                    <option value="1">15</option>
                    <option value="1">25</option>
                    <option value="1">50</option>
                    <option value="1">100</option>
                  </select>
                </div>
                <p className="text-xs text-gray-400">of 1200</p>
              </div>
              <div className="w-full lg:w-auto px-4 flex items-center justify-center">
                <a
                  className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                  href="#"
                >
                  <ChevronLeft className="w-5 h-5" />
                </a>
                <a
                  className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                  href="#"
                >
                  1
                </a>

                <a
                  className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-white bg-indigo-500 rounded"
                  href="#"
                >
                  12
                </a>
                <a
                  className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                  href="#"
                >
                  13
                </a>
                <a
                  className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                  href="#"
                >
                  14
                </a>

                <a
                  className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                  href="#"
                >
                  62
                </a>
                <a
                  className="inline-flex items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                  href="#"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Project;
