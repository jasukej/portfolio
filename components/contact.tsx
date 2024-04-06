"use client";

import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendContactForm } from "@/lib/api";

export default function Contact() {
  const initValues = {
    name: "",
    email: "",
    message: "",
  };

  const initState = {
    values: initValues,
    error: "",
    isLoading: false,
  };

  const { ref } = useSectionInView("Contact");
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    await sendContactForm(values);
  };

  return (
    <section id="contact" ref={ref} className="mt-scroll-28 mb-20 sm:mb-28">
      <div className="flex justify-center">
      <div className="p-12 border-2 border-gray-600 rounded-lg w-fit">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="flex justify-center max-w-full">
          <div className="flex flex-col justify-center gap-y-6 items-center sm:max-w-[500px] sm:min-w-[400px] lg:max-w-[800px] lg:min-w-[700px]">
            <FormControl isRequired isInvalid={touched.name && !values.name}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Name is required.</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.name && !values.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                errorBorderColor="red.300"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.name && !values.message}>
              <FormLabel>Message</FormLabel>
              <Textarea
                type="text"
                name="message"
                rows={4}
                placeholder="Hey, nice to meet you!"
                errorBorderColor="red.300"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Message is empty.</FormErrorMessage>
            </FormControl>

            <Button
              variant="outline"
              colorScheme="black"
              className="hover:bg-gray-800 hover:text-white"
              isLoading={isLoading}
              disabled={!values.name || !values.email || !values.message}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
