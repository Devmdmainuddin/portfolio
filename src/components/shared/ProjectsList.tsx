"use client";

import React, {useState} from "react";
import Container from "@/components/shared/Container";
import {IProject} from "@/app/httpActions/types";
import ProjectCard from "../card/ProjectCard";

interface ProjectsListProps {
  projects: IProject[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({projects}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(projects.map((project) => project.category)));

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188] py-[86px]">
      <Container>
        <div className="mb-6 flex flex-wrap gap-4 justify-center">
          <button
            className={`px-4 py-2 border rounded ${
              !selectedCategory ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 border rounded ${
                selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((item, idx) => (
            <ProjectCard key={idx} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectsList;
