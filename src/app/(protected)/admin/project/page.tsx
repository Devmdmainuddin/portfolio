"use server";
import React from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {fetchProjects} from "@/app/actions/actions";
import ProjectTable from "@/components/shared/ProjectTable";

const Project = async () => {
  const project = await fetchProjects();

  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188] capitalize">
      <section className="py-8 px-6">
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
                <ProjectTable key={item._id} item={item} />
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
      </section>
    </div>
  );
};

export default Project;
