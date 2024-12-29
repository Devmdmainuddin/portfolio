"use server";
import {Tilt} from "../ui/tilt";
import Container from "./Container";

const Services = () => {
  const service = [
    {
      id: 1,
      icon: "/1.gif",
      title: "React website design",
      description:
        "I specialize in building dynamic, high-performance websites with React, creating modern, responsive designs that deliver an exceptional user experience. By harnessing the power of React, I develop fast, interactive websites that are both highly scalable and easy to maintain. My focus on clean, efficient code architecture ensures optimal performance, fast load times, and smooth navigation across all devices. Whether youre looking for a sleek single-page application (SPA) or a complex multi-page site, I combine cutting-edge technologies and responsive design principles to craft websites that are not only visually stunning but also functionally robust. From seamless interactions to high-quality performance, I create web solutions that meet both your business goals and user expectations.",
    },
    {
      id: 2,
      icon: "/2.gif",
      title: "Next.js development",
      description:
        "I specialize in developing high-performance, SEO-friendly websites and applications using Next.js, a powerful React framework that optimizes both user experience and search engine visibility. With Next.js, I create fast, scalable, and feature-rich web applications that deliver lightning-fast load times and seamless navigation, ensuring an exceptional experience across all devices. My approach leverages Next.js  advanced features like server-side rendering (SSR), static site generation (SSG), and API routes to enhance performance, improve SEO, and reduce load times. Whether building dynamic content-driven websites, e-commerce platforms, or custom web applications, I deliver solutions that are not only efficient but also easy to maintain and scale. From rapid development cycles to robust production-ready sites, I use Next.js to create optimized, user-centric websites that drive engagement and help your business succeed in today’s digital landscape.",
    },
    {
      id: 3,
      icon: "/3.gif",
      title: "backend development",
      description:
        "I provide professional backend development services using Express.js and MongoDB, specializing in building scalable, secure, and high-performance server-side applications. With a strong emphasis on efficient database management and API development, I design backend solutions that can handle large volumes of data while maintaining fast response times and seamless client-server communication.Leveraging MongoDBs flexibility,I implement robust NoSQL database solutions that scale with your needs, while Express.js serves as a lightweight, powerful framework for creating RESTful APIs and managing complex server-side logic. Whether youre building a custom web app or need backend integration for an existing project, I deliver solutions that are optimized for performance, security, and scalability, ensuring your backend can support future growth and evolving requirements.",
    },
    {
      id: 4,
      icon: "/4.gif",
      title: "responsive website design",
      description:
        "I specialize in crafting responsive, high-performance websites that deliver seamless experiences across all devices. My design approach prioritizes both aesthetics and functionality, ensuring that each site is not only visually engaging but also optimized for speed, usability, and mobile responsiveness. Whether viewed on a smartphone, tablet, or desktop, your site will look great and perform flawlessly. By adhering to modern web standards and focusing on user-centered design, I create websites that drive engagement, enhance user experience, and adapt to the ever-changing digital landscape. Let me help you build a website that meets your business goals and stands out in today’s competitive online world.",
    },
    {
      id: 5,
      icon: "/monitor.gif",
      title: "Figma to HTML Design",
      description:
        "I offer expert Figma to HTML conversion services, delivering pixel-perfect, responsive designs that bring your vision to life. With a focus on precision and performance, I transform your Figma designs into clean, well-structured HTML/CSS code that is fully optimized for fast loading, SEO, and cross-browser compatibility.Every project is handled with meticulous attention to detail, ensuring the final product is not only visually identical to your design but also fully functional and user-friendly. Whether you need a sleek landing page or a complex multi-page website, I guarantee a smooth workflow and a high-quality result that aligns perfectly with your design vision.",
    },
    {
      id: 6,
      icon: "/layout.gif",
      title: "PSD to HTML Design",
      description:
        "I provide professional PSD to HTML conversion services, transforming your Photoshop designs into fully responsive, high-performance HTML/CSS websites. With meticulous attention to detail, I deliver pixel-perfect, hand-coded, W3C-compliant solutions that ensure fast loading speeds and SEO optimization.My services include cross-browser compatibility, responsive layouts for seamless display on all devices, and smooth integration with JavaScript or backend systems when needed. Whether it’s a single-page design or a complex multi-page website, I craft high-quality, scalable code that brings your designs to life with precision and functionality.",
    },
    {
      id: 7,
      icon: "/antivirus.gif",
      title: "Website problem-solving",
      description:
        "I offer expert problem-solving services across web technologies to ensure your website or application runs seamlessly and delivers top-notch performance.I specialize in resolving slow load times, fixing broken components, addressing state management challenges, and tackling API integration issues. My solutions prioritize responsive designs, intuitive user experiences, and clean, maintainable code.On the backend, I excel at troubleshooting server performance bottlenecks, optimizing database queries, resolving API connectivity issues, and enhancing authentication systems. My approach ensures a secure, scalable, and efficient backend infrastructure.For databases, I focus on improving query performance, resolving data retrieval challenges, refining schema design, and implementing robust security measures to deliver consistent and fast data access.",
    },
  ];
  return (
    <div className="py-[120px] dark:bg-gradient-to-r dark:from-[#708188] dark:to-[#555F65] bg-gradient-to-r from-[#C3E4EE] to-white ">
      <Container>
        <h1 className="dark:text-white relative text-3xl font-light tracking-[3px] uppercase text-[#282828] text-center  after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-[80px] after:h-[2px] after:content-[''] after:bg-[#00CECB]">
          Our Services
        </h1>
        <p className="text-[#565B5E] dark:text-[#d2d3d4] max-w-[420px] text-center mx-auto mt-6">
          How I can help take your next project to new heights! Thousands of clients have procured
          exceptional results while working with Me.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">
          {service.map((item, idx) => (
            <Tilt rotationFactor={8} isRevese key={idx}>
              <div className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] bg-gradient-to-tr from-pink-300 to-blue-300 p-6  ">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[120px] h-[120px]  rounded-full  mx-auto"
                />

                <h2 className="text-[#24292F] text-xl font-bold mt-[50px] text-center">
                  {item.title}
                </h2>
                <p className="text-[#565B5E] text-justify mt-3">{item.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
