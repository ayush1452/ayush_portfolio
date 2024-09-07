"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDocker,
  FaGit,
  FaDatabase,
  FaCloud,
  FaAngular,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Link from "next/link";
// about data
const about = {
    title: "About me",
    description:
      "I am Ayush Sharma, a passionate software developer specializing in backend and full-stack development, committed to building scalable, efficient, and secure solutions.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Ayush Sharma",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+1) 819 328 4927",
      },
      {
        fieldName: "Experience",
        fieldValue: "3+ Years",
      },
      {
        fieldName: "GitHub",
        fieldValue: "ayush1452",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Indian",
      },
      {
        fieldName: "Email",
        fieldValue: "ayushsharma1452@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "English, Hindi",
      },
    ],
  };

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
      "I have cultivated a robust software development career with a focus on backend development, cloud-based solutions, and full-stack engineering. My experience spans across various industries, allowing me to contribute to diverse projects, from developing scalable applications to enhancing cloud deployments.",
    items: [
      {
        company: "IBM",
        position: "Software Developer",
        duration: "July 2023 - Present",
      },
      {
        company: "AdSynergy",
        position: "Software Developer (internship)",
        duration: "January 2021 - December 2021",
      },
      {
        company: "Masks Unlimited",
        position: "Junior Full Stack Engineer",
        duration: "April 2020 - July 2020",
      },
    ],
  };
  
// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description:
      "My educational background laid the foundation for my technical expertise, combining theoretical knowledge with hands-on experience. I have pursued a comprehensive curriculum that enabled me to develop skills in software development, system design, and advanced programming languages.",
    items: [
      {
        institution: "Algonquin College",
        degree: "Computer Science",
        duration: "May 2019 - December 2021",
      },
      {
        institution: "Saraswati Modern Senior Secondary School",
        degree: "High School ",
        duration: "April 2016 - March ",
      },
    ],
  };
  
// skills data
const skills = {
    title: "My skills",
    description:
      "Here are the skills I am proficient in and have worked extensively on, ranging from backend and frontend development to cloud infrastructure and DevOps tools.",
    skillList: [
      {
        icon: < FaJava/>,
        name: "Java",
      },
      {
        icon: <FaPython />,
        name: "Python",
      },
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
      {
        icon: <FaDocker />,
        name: "Docker",
      },
      {
        icon: <FaGit />,
        name: "Git",
      },
      {
        icon: <FaDatabase />,
        name: "MySQL/PostgreSQL",
      },
      {
        icon: <FaCloud />,
        name: "AWS/GCP/Azure",
      },
      {
        icon: <FaAngular />,
        name: "Angular",
      },
    ],
  };

  // certifications data
  const certifications = {
    title: "My Certifications",
    description:
      "I have earned certifications that showcase my expertise and commitment to continuous learning in the tech industry.",
    items: [
      {
        name: "Machine Learning with Python",
        issuingOrganization: "FreeCodeCamp",
        link: "",
        duration: "Issued: September 2023",
      },
      {
        name: "Certified Java Developer",
        issuingOrganization: "W3 Schools",
        link: "",
        duration: "Issued: August 2024",
      },
      {
        name: "Software Engineer Certification",
        issuingOrganization: "HackerRank",
        link: "",
        duration: "Issued: August 2024",
      },
    ],
  };
  
  
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const MyResume = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
  
            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
  
              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
  
              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              {/* certifications */}
<TabsContent value="certifications" className="w-full h-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{certifications.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {certifications.description}
    </p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {certifications.items.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.name}
              </h3>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  {/* dot */}
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.issuingOrganization}</p>
                </div>
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaArrowRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Certificate</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>
  
              {/* about */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    );
  };
  
  export default MyResume;
  