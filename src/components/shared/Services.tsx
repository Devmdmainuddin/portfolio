"use server";
import Container from "./Container";
import ServiceCard from "../card/ServiceCard";
import { fetchServices } from "@/app/actions/actions";

const Services =async () => {
 const data = await fetchServices();
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
          {data?.map((item, idx) => (
            <ServiceCard key={idx} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
