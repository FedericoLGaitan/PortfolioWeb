"use client";

import React from "react";
import MotionTransition from "./transition-component";
import clsx from "clsx";
import {
  Button,
  Field,
  Label,
  Description,
  Input,
  Textarea,
} from "@headlessui/react";

const ContactMe = () => {
  return (
    <MotionTransition position="bottom">
      <div className="flex w-full h-full">
        <div
          className="max-w-2xl w-full mx-auto bg-gradient-cards 
                    transition-all duration-1000 
                    flex flex-col items-center rounded-md p-16 shadow-lg mb-36"
        >
          <span className="text-slate-50 text-2xl font-bold text-center block">
            Contact Me
          </span>
          <form className="w-full mt-4">
            <div className="w-full max-w-md px-4">
              <Field>
                <Label className="text-sm/6 font-medium text-white">Name</Label>
                <Description className="text-sm/6 text-white/50">
                  Use your real name, so I can address you properly.
                </Description>
                <Input
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                />
              </Field>
            </div>
            <div className="w-full max-w-md px-4">
              <Field>
                <Label className="text-sm/6 font-medium text-white">Email</Label>
                <Description className="text-sm/6 text-white/50">
                  Use an email that you check often.
                </Description>
                <Input
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                />
              </Field>
            </div>
            <div className="w-full max-w-md px-4">
              <Field>
                <Label className="text-sm/6 font-medium text-white">
                  Description
                </Label>
                <Description className="text-sm/6 text-white/50">
                  This will be shown under the product title.
                </Description>
                <Textarea
                  className={clsx(
                    "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  rows={3}
                />
              </Field>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Button
                className="inline-flex items-center 
                                gap-2 rounded-md bg-gray-700 py-2
                                px-4 text-sm/6 font-semibold text-white 
                                shadow-inner shadow-white/10 focus:outline-none
                                data-[hover]:bg-gray-600 data-[open]:bg-gray-700 
                                data-[focus]:outline-1
                                data-[focus]:outline-white"
                type="submit"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MotionTransition>
  );
};

export default ContactMe;
