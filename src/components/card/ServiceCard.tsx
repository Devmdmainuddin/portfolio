import Image from "next/image";
import {Tilt} from "../ui/tilt";
import {IService} from "@/app/httpActions/types";

interface ServiceCardProps {
  item: IService;
}
const ServiceCard: React.FC<ServiceCardProps> = ({item}) => {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div className="shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] bg-gradient-to-tr from-pink-300 to-blue-300 p-6  ">
        <Image
          src={item.icon}
          alt={item.title}
          width={120}
          height={120}
          className="w-[120px] h-[120px]  rounded-full  mx-auto"
        />

        <h2 className="text-[#24292F] text-xl font-bold mt-[50px] text-center">{item.title}</h2>
        <p className="text-[#565B5E] text-justify mt-3">{item.description}</p>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
