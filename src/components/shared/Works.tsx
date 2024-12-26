// import { getProduct } from "@/app/api/projects/route";
import Container from "./Container";
// import { useEffect, useState } from "react";

// interface IProject {
//   _id: string;
//   title: string;
//   image: string;
//   description: string;
//   liveLink: string;
//   clientLink: string;
//   serverLink?: string;
//   tags: string[];
//   createdAt: Date;
// }
const Works = () => {

// const [projects, setProjects] = useState<IProject[]>([]);
// console.log(projects);
// useEffect(() => {
//   getProduct().then(setProjects);
// }, []);


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
      </Container>
    </div>
  );
};

export default Works;
