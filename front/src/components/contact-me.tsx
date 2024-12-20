"use client";

import React, { useState } from "react";
import MotionTransition from "./transition-component";
import clsx from "clsx";
import { validateForm } from "@/helpers/validateContacMe";
import {
  Button,
  Field,
  Label,
  Description,
  Input,
  Textarea,
} from "@headlessui/react";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const [formErrors, setFormErrors] = useState({name: "", email: "", description: ""});
  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error for this field
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const errors = await validateForm(formData);

    if (errors != null && Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Stop submission on validation errors
    }

    setStatus("Sending...");
    setFormErrors({name: "", email: "", description: ""}); // Clear errors if validation passes

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", description: "" });
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

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
          <form className="w-full mt-4" onSubmit={handleSubmit}>
            <div className="w-full max-w-md px-4">
              <Field>
                <Label className="text-sm/6 font-medium text-slate-50">Name</Label>
                <Description className="text-sm/6 text-white/50">
                  Use your real name, so I can address you properly.
                </Description>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-slate-50",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  required
                />
                {formErrors.name && (
                  <p className="text-xs mt-1 text-red-500">{formErrors.name}</p>
                )}
              </Field>
            </div>
            <div className="w-full max-w-md px-4">
              <Field>
                <Label className="text-sm/6 font-medium text-slate-50">Email</Label>
                <Description className="text-sm/6 text-white/50">
                  Use an email that you check often.
                </Description>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  required
                />
                {formErrors.email && (
                  <p className="text-xs mt-1 text-red-500">{formErrors.email}</p>
                )}
              </Field>
            </div>
            <div className="w-full max-w-md px-4">
              <Field>
                <Label className="text-sm/6 font-medium text-white">
                  Message
                </Label>
                <Description className="text-sm/6 text-white/50">
                  Write your message here.
                </Description>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={clsx(
                    "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  rows={3}
                  required
                />
                {formErrors.description && (
                  <p className="text-xs mt-1 text-red-500">{formErrors.description}</p>
                )}
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
          {status && (
            <p className="text-sm/6 mt-4 text-white">
              {status}
            </p>
          )}
        </div>
      </div>
    </MotionTransition>
  );
};

export default ContactMe;
