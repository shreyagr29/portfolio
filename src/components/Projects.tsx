'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import SectionWrapper from './SectionWrapper';
import ProjectCard, { Project } from './ProjectCard';

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Namo",
      description: "A real-time video communication application with screen sharing, chat, and secure room management capabilities.",
      tags: ["React", "WebRTC", "Socket.io", "Node.js"],
      thumbnailUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      liveUrl: "https://namo.shreyagrawal.com",
      repoUrl: "https://github.com/shrey29ag/namo"
    },
    {
      title: "GigFlow",
      description: "A comprehensive trading dashboard featuring real-time stock data visualization, secure user authentication, and transaction history.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      thumbnailUrl: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=1000&auto=format&fit=crop",
      liveUrl: "https://gigflow-rust.vercel.app/",
      repoUrl: "https://github.com/shrey29ag/gigflow"
    },
    {
      title: "Housing & Travel App",
      description: "A booking and listing platform for travelers to find accommodation. Features map integration and booking management.",
      tags: ["MERN Stack", "Google Maps API", "Redux"],
      thumbnailUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "AI Chatbot Application",
      description: "An intelligent conversational agent powered by NLP to assist users with common queries efficiently.",
      tags: ["Python", "OpenAI API", "React", "Flask"],
      thumbnailUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-transparent">
      <SectionHeading title="Featured Projects" subtitle="My Portfolio" center />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
