'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faDocker,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faUser as faUserSolid,
  faTerminal,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { SiNextdotjs, SiRust, SiTailwindcss, SiRedux } from "react-icons/si";
import { IconType } from 'react-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default function Skills() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  const skills = [
    { icon: faReact, text: "React" },
    { CustomIcon: SiNextdotjs, text: "Next.js" },
    { CustomIcon: SiTailwindcss, text: "Tailwind" },
    { icon: faJs, text: "TypeScript" },
    { icon: faNodeJs, text: "Node.js" },
    { CustomIcon: SiRust, text: "Rust" },
    { icon: faPython, text: "Python" },
    { icon: faDatabase, text: "MongoDB" },
    { icon: faDocker, text: "Docker" },
    { CustomIcon: SiRedux, text: "Redux" },
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand();
    }
  };

  const processCommand = () => {
    setOutput((prevOutput) => [
      ...prevOutput,
      <p key={prevOutput.length} className="mb-2">$ {command}</p>
    ]);

    if (command.toLowerCase() === 'whoami') {
      setOutput((prevOutput) => [
        ...prevOutput,
        <div key={prevOutput.length} className="flex items-center mb-4">
          <FontAwesomeIcon icon={faUserSolid} className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">NIRANJAN</span>
        </div>
      ]);
    } else if (command.toLowerCase() === 'ls skills') {
      setOutput((prevOutput) => [
        ...prevOutput,
        <div key={prevOutput.length} className="grid grid-cols-2 gap-4 mb-4">
          {skills.map((skill, index) => (
            <SkillIcon 
              key={index} 
              icon={skill.icon} 
              CustomIcon={skill.CustomIcon} 
              text={skill.text} 
            />
          ))}
        </div>
      ]);
    } else if (command.toLowerCase() === 'cls') {
      setOutput([]);
    } else if (command.toLowerCase() === 'contact') {
      setOutput((prevOutput) => [
        ...prevOutput,
        <div key={prevOutput.length} className="flex items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 mr-2" />
          <span className="text-xl">Send an email to: niranjanr753@gmail.com</span>
        </div>
      ]);
    } else {
      setOutput((prevOutput) => [
        ...prevOutput,
        <p key={prevOutput.length} className="mb-2">Command not recognized: {command}</p>
      ]);
    }

    setCommand('');
  };

  return (
    <>
      <div className="mb-4 text-green-400 text-sm font-mono">
        <p className="font-bold mb-2">Available commands:</p>
        <ul className="list-none">
          <li><span className="mr-2">$</span><code className="bg-green-900 px-1 rounded">whoami</code> - Display my name</li>
          <li><span className="mr-2">$</span><code className="bg-green-900 px-1 rounded">ls skills</code> - List all my skills</li>
          <li><span className="mr-2">$</span><code className="bg-green-900 px-1 rounded">cls</code> - Clear the terminal</li>
          <li><span className="mr-2">$</span><code className="bg-green-900 px-1 rounded">contact</code> - Send me an email</li>
        </ul>
      </div>
      <div className="skills-section relative w-full h-[500px] mx-auto my-16 bg-black text-green-400 font-mono flex items-center justify-center">
        <div className="w-[600px] h-[400px] border-2 border-green-400 rounded-lg p-6 overflow-hidden">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faTerminal} className="mr-2" />
            <span className="text-xl font-bold">Terminal</span>
          </div>
          <div className="overflow-y-auto h-[300px]">
            {output}
            <div className="flex items-center">
              <span className="mr-2">$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none flex-grow"
                autoFocus
              />
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface SkillIconProps {
  icon?: IconDefinition;
  CustomIcon?: IconType;
  text: string;
}

function SkillIcon({ icon, CustomIcon, text }: SkillIconProps) {
  return (
    <div className="flex items-center">
      <span className="mr-2">{'>'}</span>
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          className="w-6 h-6 mr-2"
        />
      ) : CustomIcon ? (
        <CustomIcon className="w-6 h-6 mr-2" />
      ) : null}
      <span>{text}</span>
    </div>
  );
}