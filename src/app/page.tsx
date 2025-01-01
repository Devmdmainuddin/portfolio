import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import About from "./(public)/about/page";
import Different from "@/components/shared/Different";
import Skills from "@/components/shared/Skills";
import Project from "@/components/shared/Project";
import Testimonial from "@/components/shared/Testimonial";
import Services from "@/components/shared/Services";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Different />
      <Project />
      <Contact />
      <Testimonial />
    </div>
  );
};
export default Home;
