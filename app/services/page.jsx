"use client";
import { FaReact, FaDocker, FaPython, FaJava, FaDatabase, FaCloud, FaCloudUploadAlt, FaNetworkWired, FaCogs, FaSyncAlt, FaTools, FaServer, FaCode, FaLaptopCode, FaLayerGroup, FaGlobe, FaBrain, FaRobot, FaDev } from 'react-icons/fa';

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "I have extensive experience in designing and developing backend systems that are scalable and efficient. My work primarily involves refactoring legacy systems, creating new protocols for data flow, and deploying applications on hybrid cloud environments. I ensure robust security and seamless data integration across multiple platforms.",
    href: "",
    techStack: ["Java", "Python", "Spring Boot", "Node.js", "kafka", "Gradle", "MySQL", "PostgreSQL", "MongoDB", "Redis", "ELK Stack", "REST APIs", "OAuth 2.0", ],
    icon: (
        <div className="flex gap-2">
          <FaJava />
          <FaCode />
        </div>
      ),
  },
  {
    num: "02",
    title: "DevOps and Automation",
    description:
      "I streamline software delivery processes by setting up CI/CD pipelines and automating deployment procedures. My expertise lies in optimizing cloud deployments and ensuring seamless integration across development and operations teams.",
    href: "",
    techStack: ["Git", "GitHub Actions", "GitLab CI/CD", "Docker", "OpenShift", "Jenkins", "AWS", "Terraform", "Kubernetes", "Ansible", "DataDog", "JFrog Artifactory"],
    icon: (
        <div className="flex gap-2">
          <FaDocker />
        </div>
      ),
  },
  {
    num: "03",
    title: "Cloud Computing",
    description:
      "I specialize in cloud architecture, migration, and optimization. My experience includes designing cloud-native applications and managing infrastructure across multi-cloud environments, ensuring high availability and cost-efficiency.",
    href: "",
    techStack: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "AWS CloudFormation", "OpenShift", "JFrog", "Jenkins", "AWS Lambda", "AWS S3", "ELK Stack (Elasticsearch, Logstash, Kibana)" ],
    icon: (
        <div className="flex gap-2">
          <FaCloud />
        </div>
      ),
  },
  {
    num: "04",
    title: "GenAI and LLM",
    description:
      "Leveraging the latest advancements in AI, I have experience in developing enterprise-grade GenAI solutions that empower intelligent decision-making. My work involves integrating large language models and advanced machine learning techniques into scalable applications.",
    href: "",
    techStack: ["Python", "TensorFlow", "Hugging Face", "PyTorch", "OpenAI", "LangChain", "Qdrant", "LlamaIndex", "Streamlit", "FastAPI", "Elasticsearch", "AWS Sagemaker", "Kubeflow", "Prometheus and Grafana"],
    icon: (
        <div className="flex gap-2">
          <FaRobot />
          <FaPython />
        </div>
      ),
  },
  {
    num: "05",
    title: "Full Stack Web Development",
    description:
      "With a strong background in full-stack development, I have built web applications from the ground up, managing both the frontend and backend aspects. My work spans across various industries, including finance and retail, where I’ve created responsive, high-performance web applications.",
    href: "",
    techStack: ["React", "TypeScript", "JavaScript", "Next.js", "HTML5", "CSS3", "SASS", "Flask", "Python", "SQL", "PostgreSQL", "Swagger", "JUnit", "Mockito", "Jira"],
    icon: (
        <div className="flex gap-2">
          <FaLaptopCode />
          <FaReact />
        </div>
      ),
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
                <div className="text-6xl text-white group-hover:text-accent group-hover:translate-x-2 transition-all duration-500">{service.icon}</div>
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  </div>
                  <Link
                    href={service.href}
                    className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                {/* title  */}
                <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 text-sm">{service.description}</p>
                {/* tech stack */}
                {service.techStack && service.techStack.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-white">Tech Stack:</h3>
                  {service.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full bg-white text-black text-xs font-medium shadow-md"
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
