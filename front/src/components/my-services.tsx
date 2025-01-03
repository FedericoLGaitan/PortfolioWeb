"use client"
import React from "react";
import MotionTransition from "./transition-component";
import { MessageSquareShare } from "lucide-react";
import { dataServices, serviceData } from "../helpers/data";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AllServices = () => {
  const router = useRouter();
  return (
    <MotionTransition position="bottom">
      <h1 className="text-4xl text-center font-extrabold mb-10 p-4 
      w-full border border-transparent border-b-slate-100 border-b-4 text-slate-50">
        My Services
      </h1>
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto gap-2 justify-around">
        {dataServices.map((service) => (
          <div
            key={service.id}
            className="bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 
        border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md
        max-w-md mx-auto "
          >
            <div className="col-span-2 text-3xl text-center
             font-bold text-gray-800 capitalize rounded-md">
              {service.title}
            </div>
            <Image src={service.image} alt={service.title} width={300} height={200} 
            className="col-span-2 mx-auto max-h-[180px] object-contain w-full" />
            <div className="col-span-2 rounded-md">
             {service.description}
            </div>
            <div className="col-span-2 flex flex-row mx-auto gap-1">
            {serviceData.map ((data) => (
                <span key={data.title}>{data.icon}</span>
            ))}
            </div>
        <div className="col-span-2 mx-auto">
          <Button 

           onClick={() => router.push("/contact-me")}
           className="inline-flex items-center 
            gap-2 rounded-md bg-gray-700 py-2
            px-4 text-sm/6 font-semibold text-white 
            shadow-inner shadow-white/10 focus:outline-none
             data-[hover]:bg-gray-600 data-[open]:bg-gray-700 
             data-[focus]:outline-1
             data-[focus]:outline-white">
            Contact me <MessageSquareShare className="inline" size={18} />
          </Button>
        </div>
          </div>
        ))}
      </section>
    </MotionTransition>
  );
};

export default AllServices;
