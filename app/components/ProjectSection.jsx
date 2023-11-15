"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    title: "React GPT3 Website",
    description: "Study Project",
    image: "/images/project1.png",
    github: "https://github.com/Wake7401/gpt3",
    demo: "https://elegant-dasik-9847bf.netlify.app/",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Ecommerce Shoe Shop",
    description: "Study Project",
    image: "/images/project2.png",
    github: "https://github.com/Wake7401/gpt3",
    demo: "https://elegant-dasik-9847bf.netlify.app/",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "Study Project",
    image: "/images/project3.png",
    github: "https://github.com/Wake7401/gpt3",
    demo: "https://elegant-dasik-9847bf.netlify.app/",
    tag: ["All", "Mobile"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newtag) => {
    setTag(newtag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 50 },
  };

  const filterProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section ref={ref} id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project,index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration:0.3,delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              github={project.github}
              demo={project.demo}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
