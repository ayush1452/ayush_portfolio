"use client";
import { FaReact, FaDocker, FaPython, FaJava } from 'react-icons/fa';

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
    techStack: ["Java", "Spring Boot", "MySQL", "Docker"],
  },
  {
    num: "02",
    title: "Full Stack Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "03",
    title: "DevOps and Automation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
    icon: <FaDocker />,
  },
  {
    num: "04",
    title: "GenAI and LLM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "05",
    title: "Cloud Computing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-3">
                <div className="text-8xl text-white group-hover:text-accent group-hover:translate-x-2 transition-all duration-500">{service.icon}</div>
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title  */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* tech stack */}
                {service.techStack && service.techStack.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-white">Tech Stack:</h3>
                  {service.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white text-black text-sm font-medium shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                )}
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
