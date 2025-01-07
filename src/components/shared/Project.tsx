"use client";
import {fetchProjects} from "@/app/actions/actions";
import Container from "./Container";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs";
import {useState, useEffect} from "react";
import {IProject} from "@/app/httpActions/types";
import ProjectCard from "../card/ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjects();
      setProjects(data);
      setFilteredProjects(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeCategory));
    }
  }, [activeCategory, projects]);

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
              {["All", "Ecommerce", "Blogs", "Travels", "Portfolio"].map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="tab data-[state=active]:bg-[#acf6f455] dark:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory}>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2  gap-6 mt-[50px]">
                {filteredProjects.map((item, idx) => (
                  <ProjectCard key={idx} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Project;
