"use client";
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProjectFormData, projectSchema} from "@/app/validation/projectSchema";
import Container from "@/components/shared/Container";
import {BorderTrail} from "@/components/ui/border-trail";
import {Magnetic} from "@/components/ui/magnetic";
const AddProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    const projectData = {
      ...data,
      tags: data.tags.split(","),
    };

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Failed to add project");
      }

      alert("Project added successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Error adding project.");
    }
  };
  const springOptions = {bounce: 0.1};
  return (
    // className="max-w-md mx-auto my-10 "
    <div className="bg-[#D0EBEB] dark:bg-[#738188] capitalize py-12">
      <Container>
        <div className="borderTrail ">
          <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
              <div className="flex-1">
                <input
                  {...register("title")}
                  className="w-full p-2 border-b border-gray-300  outline-0"
                  placeholder="Project Title"
                />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}
              </div>
              <div className="flex-1">
                <input
                  {...register("image")}
                  className="w-full p-2 border-b border-gray-300 outline-0"
                  placeholder="Image URL"
                />
                {errors.image && <p className="text-red-500">{errors.image.message}</p>}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                {...register("description")}
                className="w-full h-[120px] p-2 border-b border-gray-300 outline-0 resize-none"
                placeholder="Project Description"
              />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className=" mt-4">
                <input
                  {...register("clientLink")}
                  className="w-full p-2 border-b border-gray-300  outline-0"
                  placeholder="Client Repository Link"
                />
                {errors.clientLink && <p className="text-red-500">{errors.clientLink.message}</p>}
              </div>
              <div className="mt-4 ">
                <input
                  {...register("liveLink")}
                  className="w-full p-2 border-b border-gray-300  outline-0"
                  placeholder="Live Link"
                />
                {errors.liveLink && <p className="text-red-500">{errors.liveLink.message}</p>}
              </div>
              <div className="mt-4">
                <input
                  {...register("serverLink")}
                  className="w-full p-2 border-b border-gray-300  outline-0"
                  placeholder="Server Repository Link"
                />
                {errors.serverLink && <p className="text-red-500">{errors.serverLink.message}</p>}
              </div>
            </div>
            <div className="mt-4">
              <input
                {...register("tags")}
                className="w-full p-2 border-b border-gray-300  outline-0"
                placeholder="e.g., React, Tailwind, MongoDB"
              />
              {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
            </div>
            <div className="mt-[30px]">
              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <button
                  type="submit"
                  className="inline-block   bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={springOptions}
                    actionArea="global"
                    range={200}
                  >
                    <span> Submit</span>
                  </Magnetic>
                </button>
              </Magnetic>
            </div>
          </form>
          <BorderTrail
            className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
            size={120}
          />
        </div>
      </Container>
    </div>
  );
};

export default AddProjectForm;
