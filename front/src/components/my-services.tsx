import React from "react";
import MotionTransition from "./transition-component";
import { MessageSquareShare } from "lucide-react";
import { dataServices, serviceData } from "../helpers/data";
import { Button } from "@headlessui/react";

const AllServices = () => {
  return (
    <MotionTransition position="bottom">
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto gap-2">
        {dataServices.map((service) => (
          <div
            key={service.id}
            className="bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 
        border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"
          >
            <div className="col-span-2 text-lg font-bold capitalize rounded-md">
              {service.title}
            </div>
            <div className="col-span-2 rounded-md">
             {service.description}
            </div>
            <div className="col-span-2 flex flex-row mx-auto gap-1">
            {serviceData.map ((data) => (
                <span key={data.title}>{data.icon}</span>
            ))}
            </div>
        <div className="col-span-2 mx-auto">
          <Button className="inline-flex items-center 
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
