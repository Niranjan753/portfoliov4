"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface Project {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  technologies?: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "SuperGigs",
    description: "SuperGigs is an India-based freelance marketplace connecting talented professionals with businesses and individuals seeking their services.",
    image: "/supergigs-image.jpg",
    github: "https://github.com/Niranjan753/SuperGigs",
  },

  {
    title: "Grampreneur",
    description: "A platform for Instagram entrepreneurs.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Niranjan753/Grampreneur",
    image: "/grampreneur-image.jpg", // Added missing image property
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Niranjan753/portfolio",
    image: "/portfolio-image.jpg", // Added missing image property
  },

  {
    title: "Weather App",
    description: "A real-time weather application with location-based forecasts.",
    technologies: ["React", "Node.js", "OpenWeatherMap API"],
    github: "https://github.com/yourusername/weather-app",
    image: "/weather-app-image.jpg", // Added missing image property
  },

  {
    title: "Task Manager",
    description: "A full-stack task management application with user authentication.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/yourusername/task-manager",
    image: "/task-manager-image.jpg", // Added missing image property
  },

  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with product management and secure checkout.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redux"],
    github: "https://github.com/yourusername/ecommerce-platform",
    image: "/ecommerce-platform-image.jpg", // Added missing image property
  }
];


export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-black text-white"
    >
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-custom-green"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* ... rest of the project card JSX */}
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
}
