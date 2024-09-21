"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  title: string;
  description: string;
  tags?: string[];
  technologies?: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "SuperGigs",
    description: "SuperGigs is an India-based freelance marketplace connecting talented professionals with businesses and individuals seeking their services.",
    github: "https://github.com/Niranjan753/SuperGigs",
  },

  {
    title: "Grampreneur",
    description: "A platform for Instagram entrepreneurs.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Niranjan753/Grampreneur",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Niranjan753/portfolio",
  },

  {
    title: "Weather App",
    description: "A real-time weather application with location-based forecasts.",
    technologies: ["React", "Node.js", "OpenWeatherMap API"],
    github: "https://github.com/yourusername/weather-app",
  },

  {
    title: "Task Manager",
    description: "A full-stack task management application with user authentication.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/yourusername/task-manager",
  },

  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with product management and secure checkout.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redux"],
    github: "https://github.com/yourusername/ecommerce-platform",
  }
];


export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#2ea44f"
              strokeWidth="1"
              opacity="0.2"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.5;0.2"
                dur="5s"
                repeatCount="indefinite"
              />
            </line>
          ))}
        </svg>
      </div>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20 flex justify-center items-center relative z-10">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center relative">
            <span className="absolute inset-0 overflow-hidden">
              <span className="animate-hacker-effect inline-block whitespace-nowrap">
                <span className="text-custom-green">&lt;</span>
                My_Projects
                <span className="text-custom-green">/&gt;</span>
              </span>
            </span>
            <span className="invisible">My_Projects</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black rounded-lg overflow-hidden shadow-lg border border-custom-green hover:shadow-2xl hover:border-custom-green-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold hover:text-custom-green transition-colors duration-300">{project.title}</h2>
                    <div className="flex space-x-1">
                      {project.tags && project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-custom-green text-black text-xs px-2 py-0.5 rounded-full hover:bg-custom-green-hover transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 hover:text-white transition-colors duration-300">{project.description}</p>
                  <div className="flex justify-between text-sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-custom-green hover:text-custom-green-hover transition-colors duration-300 hover:underline">
                      <FontAwesomeIcon icon={faGithub} className="mr-1" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
