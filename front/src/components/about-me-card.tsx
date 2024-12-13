"use client";

import React from "react";
import MotionTransition from "./transition-component";
import Image from "next/image";
import { Button } from "@headlessui/react";

const AboutMeCard = () => {
  return (
    <MotionTransition position="bottom">
      <div className="flex items-center w-full h-full ">
        <div
          className="max-w-md h-[500px]  w-full mx-auto bg-gradient-cards transition-all duration-1000 
          flex flex-col items-center rounded-full p-16 shadow-lg"
        >
          <span className="text-slate-50 font-bold text-center block text-base">
            About Me
          </span>
          <Image
            src="/perfil-ia.png"
            alt="Profile"
            className="rounded-lg mx-auto mt-2 shadow-sm" 
            width={200}
            height={100}
          />
          <p className="text-slate-50 font-semibold text-center text-sm mx-4 my-4 p-2">
            I&apos;m Fede, a multidisciplinary designer who focuses on telling my
            clients&apos; stories visually, through enjoyable and meaningful
            experiences. I specialize in responsive websites and functional user
            interfaces.
          </p>
          <div className="mt-4 flex justify-center gap-4"></div>
          <Button
            className="inline-flex items-center 
            gap-2 rounded-md bg-gray-700 py-2
            px-4 text-sm/6 font-semibold text-white 
            shadow-inner shadow-white/10 focus:outline-none
             data-[hover]:bg-gray-600 data-[open]:bg-gray-700 
             data-[focus]:outline-1
             data-[focus]:outline-white"
            onClick={() => {
              window.open(
                "https://docs.google.com/document/d/1fG5Yy8pqvynen4W0oOqmg5RoJ1S9gFY8P2DHbqv9lsU/edit?usp=sharing" );
            }}
          >
            Resume
          </Button>
        </div>
      </div>
    </MotionTransition>
  );
};

export default AboutMeCard;