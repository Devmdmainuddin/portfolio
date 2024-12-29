"use client";
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { ProjectFormData, projectSchema } from "@/app/validation/projectSchema";

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

  return (
    <div className="max-w-md mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            {...register("title")}
            className="w-full p-2 border border-gray-300 rounded outline-0"
            placeholder="Project Title"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block mb-2">Image URL</label>
          <input
            {...register("image")}
            className="w-full p-2 border border-gray-300 rounded outline-0"
            placeholder="Image URL"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            {...register("description")}
            className="w-full p-2 border border-gray-300 rounded outline-0 resize-none"
            placeholder="Project Description"
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
        <div>
          <label className="block mb-2">Live Link</label>
          <input
            {...register("liveLink")}
            className="w-full p-2 border border-gray-300 rounded outline-0"
            placeholder="Live Link"
          />
          {errors.liveLink && <p className="text-red-500">{errors.liveLink.message}</p>}
        </div>
        <div>
          <label className="block mb-2">Client Link</label>
          <input
            {...register("clientLink")}
            className="w-full p-2 border border-gray-300 rounded outline-0"
            placeholder="Client Repository Link"
          />
          {errors.clientLink && <p className="text-red-500">{errors.clientLink.message}</p>}
        </div>
        <div>
          <label className="block mb-2">Server Link (Optional)</label>
          <input
            {...register("serverLink")}
            className="w-full p-2 border border-gray-300 rounded outline-0"
            placeholder="Server Repository Link"
          />
          {errors.serverLink && <p className="text-red-500">{errors.serverLink.message}</p>}
        </div>
        <div>
          <label className="block mb-2">Tags (comma-separated)</label>
          <input
            {...register("tags")}
            className="w-full p-2 border border-gray-300 rounded outline-0"
            placeholder="e.g., React, Tailwind, MongoDB"
          />
          {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
