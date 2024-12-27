"use client";

import React from "react";
import MotionTransition from "./transition-component";
import Image from "next/image";
import { Button } from "@headlessui/react";

const AboutMeCard = () => {
  return (
    <MotionTransition position="bottom">
      <div className="flex w-full h-full">
        <div
          className="max-w-xl h-[500px] w-full mx-auto bg-gradient-cards transition-all duration-1000 
          flex flex-col items-center rounded-full p-16 shadow-lg overflow-auto"
        >
          <span className="text-slate-50 text-2xl font-bold text-center block">
            About Me
          </span>
          <Image
            src="/perfil.jpg"
            alt="Profile"
            className="rounded-lg mx-auto mt-2 shadow-sm object-cover max-h-[180px]"
            width={200}
            height={100}
          />
          <p className="text-slate-50 text-xs text-center sm:text-sm lg:mx-4 lg:my-4 p-2">
            I&apos;m Fede, a junior web developer from argentina, I&apos; 22 years old.
            Outside of coding, you can find me trainnig, reading some book, or working with friends on their projects.
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
                "https://docs.google.com/document/d/1fG5Yy8pqvynen4W0oOqmg5RoJ1S9gFY8P2DHbqv9lsU/edit?usp=sharing"
              );
            }}
          >
            Curriculum
          </Button>
        </div>
      </div>
    </MotionTransition>
  );
};

export default AboutMeCard;
