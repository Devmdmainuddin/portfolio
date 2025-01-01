"use client";

import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProjectFormData, projectSchema} from "@/app/validation/projectSchema";
import Container from "@/components/shared/Container";
import {BorderTrail} from "@/components/ui/border-trail";
import {Magnetic} from "@/components/ui/magnetic";
import {useRouter} from "next/navigation";

interface EditProjectProps {
  params?: {id: string}; 
  initialData?: ProjectFormData; 
}

const EditProject: React.FC<EditProjectProps> = ({params, initialData}) => {
  const projectId = params?.id; 
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData || {}, 
  });


  useEffect(() => {
    if (initialData) reset(initialData);
  }, [initialData, reset]);

  const onSubmit = async (data: ProjectFormData) => {
    const projectData = {
      ...data,
      tags: data.tags.split(","),
    };

    try {
      const method = projectId ? "PUT" : "POST"; // Determine if adding or editing
      const endpoint = projectId ? `/api/projects/${projectId}` : "/api/projects";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${projectId ? "update" : "add"} project`);
      }

      alert(`Project ${projectId ? "updated" : "added"} successfully!`);
      reset();
      router.push("/projects"); // Redirect to projects list
    } catch (error) {
      console.error(error);
      alert(`Error ${projectId ? "updating" : "adding"} project.`);
    }
  };

  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188] capitalize py-12">
      <Container>
        <div className="borderTrail ">
          <h2 className="text-2xl font-bold mb-4">{projectId ? "Edit Project" : "Add Project"}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex-1">
                <input
                  {...register("title")}
                  className="w-full p-2 border-b border-gray-300 outline-0"
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
              <div className="mt-4">
                <input
                  {...register("clientLink")}
                  className="w-full p-2 border-b border-gray-300 outline-0"
                  placeholder="Client Repository Link"
                />
                {errors.clientLink && <p className="text-red-500">{errors.clientLink.message}</p>}
              </div>
              <div className="mt-4">
                <input
                  {...register("liveLink")}
                  className="w-full p-2 border-b border-gray-300 outline-0"
                  placeholder="Live Link"
                />
                {errors.liveLink && <p className="text-red-500">{errors.liveLink.message}</p>}
              </div>
              <div className="mt-4">
                <input
                  {...register("serverLink")}
                  className="w-full p-2 border-b border-gray-300 outline-0"
                  placeholder="Server Repository Link"
                />
                {errors.serverLink && <p className="text-red-500">{errors.serverLink.message}</p>}
              </div>
            </div>
            <div className="mt-4">
              <input
                {...register("tags")}
                className="w-full p-2 border-b border-gray-300 outline-0"
                placeholder="e.g., React, Tailwind, MongoDB"
              />
              {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
            </div>
            <div className="mt-[30px]">
              <Magnetic intensity={0.2} actionArea="global" range={200}>
                <button
                  type="submit"
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  <span>{projectId ? "Update Project" : "Submit"}</span>
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

export default EditProject;
