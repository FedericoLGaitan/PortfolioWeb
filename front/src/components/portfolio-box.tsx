import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "lucide-react";

 interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
 }

const PortfolioBox = (props: PortfolioBoxProps) => {
    const {data} = props
    const { title, image, urlDemo, urlGithub} = data
  return (
 
    <div className="p-4 border border-slate-50 rounded-md
     hover:scale-110 transition-all text-center hover:cursor-pointer">
        <h3 className="mb-4 text-xl ">
            {title}
        </h3>
        <Image 
         src={image} 
         width={200}
         height={200}
         alt={title}
         className="w-full md:w-[200px] md:h-[200px] object-contain  rounded-md"
         />
         <div className="flex gap-5 mt-150">
         <Link href={urlGithub} target="_blank"
         className="p-2 px-6 transition duration-150 rounded-lg bg-slate-400 hover:bg-slate-400/80">
           Github
         </Link>
         <Link
          href={urlDemo} target="_blank"
           className="p-2 px-6 transition duration-150 rounded-lg bg-red-400 hover:bg-red-400/80"> 
          <PlayIcon />
         </Link>
         </div>
     </div>
  )
};

export default PortfolioBox;
