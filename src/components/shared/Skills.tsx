"use server"
import Image from "next/image";
import {BorderTrail} from "../ui/border-trail";
import {Tilt} from "../ui/tilt";
import Container from "./Container";

const Skills = () => {
  const icons = [
    {id: 1, src: "/react.png", alt: "React"},
    {id: 2, src: "/nextjs.svg", alt: "NextJS"},
    {id: 3, src: "/node.svg", alt: "Node.js"},
    {id: 4, src: "/jvs.svg", alt: "JavaScript"},
    {id: 5, src: "/mon.svg", alt: "TypeScript"},
    {id: 6, src: "/ts.svg", alt: "HTML"},
    {id: 7, src: "/tai.svg", alt: "CSS"},
    {id: 8, src: "/fi.svg", alt: "SASS"},
    {id: 9, src: "/bos.svg", alt: "Git"},
    {id: 10, src: "/ex.svg", alt: "GitHub"},
    {id: 11, src: "/git.svg", alt: "GitLab"},
    {id: 12, src: "/nexauth.png", alt: "Docker"},
  ];
  return (
    <div className="bg-[#E7F6F9] dark:bg-[#132334] py-[84px]">
      <Container>
        <div className="relative text-3xl font-light tracking-[3px] uppercase text-[#282828] text-center  after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[80px] after:h-[2px] after:content-[''] after:bg-[#00CECB] dark:text-white">
          <h2>my skills</h2>
        </div>

        <div className="skil-box-container mt-6">
          <div className="mt-[30px] flex flex-wrap justify-center items-center max-w-[700px]  mx-auto">
            {icons.map((icons, idx) => (
              <div key={idx} className="infinity-border mx-auto">
                <Image
                  src={icons.src}
                  width={120}
                  height={120}
                  alt={icons.alt}
                  className="w-[40px] h-[40px] rounded-full"
                ></Image>
              </div>
            ))}
          </div>
          <div className="flex justify-around items-center mt-12 flex-wrap gap-3">
            <article className="borderTrail  overflow-hidden rounded-lg hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500  p-6">
              <h2 className="font-semibold tracking-[3px] uppercase font-Montserrat ">
                Frontend developer
              </h2>
              <ul className="menus mt-4 flex flex-wrap gap-3">
                <li className="skillsLi">React</li>
                <li className="skillsLi">Next.js</li>
                <li className="skillsLi">JavaScript</li>
                <li className="skillsLi">TypeScript</li>
                <li className="skillsLi">Tailwind</li>
                <li className="skillsLi">Bootstrap</li>
                <li className="skillsLi">Css</li>
                <li className="skillsLi">HTML</li>
              </ul>
              <BorderTrail
                className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
                size={120}
              />
            </article>
            <article className="borderTrail  overflow-hidden rounded-lg hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500  p-6">
              <h2 className="font-semibold tracking-[3px] uppercase font-Montserrat ">
                Backend developer
              </h2>
              <ul className="menus mt-4 flex flex-wrap gap-3">
                <li className="skillsLi  ">Node</li>
                <li className="skillsLi">Express</li>
                <li className="skillsLi">MongDB</li>
                <li className="skillsLi">Mongoose</li>
                <li className="skillsLi">Firebase</li>
                <li className="skillsLi">NextAuth</li>
              </ul>
              <BorderTrail
                className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
                size={120}
              />
            </article>
            <article className="borderTrail  overflow-hidden rounded-lg hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] transition-all duration-500  p-6">
              <h2 className="font-semibold tracking-[3px] uppercase font-Montserrat ">
                Other tools
              </h2>
              <ul className="menus mt-4 flex flex-wrap gap-3">
                <li className="skillsLi">
                  <Tilt rotationFactor={8} isRevese>
                    {" "}
                    <span>Git</span>
                  </Tilt>{" "}
                </li>
                <li className="skillsLi">Github</li>
                <li className="skillsLi">Husky</li>
                <li className="skillsLi">Prettier</li>
                <li className="skillsLi">commitlint</li>
                <li className="skillsLi">Shadcn</li>
              </ul>
              <BorderTrail
                className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
                size={120}
              />
            </article>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
