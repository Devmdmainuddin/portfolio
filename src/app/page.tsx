import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import About from "./(public)/about/page";
import Services from "@/components/shared/Services";
import Different from "@/components/shared/Different";
import Skills from "@/components/shared/Skills";
// import AddProjectForm from "@/components/shared/ProjectAdd";
import Project from "@/components/shared/Project";
import Testimonial from "@/components/shared/Testimonial";
import ReviewForm from "@/components/shared/ReviewForm";
const Home = () => {
  return (
    <div>
      <Hero />
      <ReviewForm/>
      <About />
      <Skills />
      <Services />
      <Different />
      <Project />
      <Contact />
      <Testimonial/>
    </div>
  );
};
export default Home;
