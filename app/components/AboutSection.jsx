"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content:(
      <ul className="list-disc pl-2 grid grid-cols-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NextJS</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>MySQL</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content:(
      <ul className="list-disc pl-2">
        <li>Nam Can Tho University</li>
        <li>Level - Fair</li>
      </ul>
    )
  }
]

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white font-san mt-8" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:gap-16 xl:px-16">
        <Image src="/images/about.jpg" width={500} height={500} alt="about-image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm trying to become a good programmer. I have experience working
            with JavaScript, React, NextJS, Node.js, SQL, MySQL, HTML, CSS and
            Git. I am a quick learner and always looking to expand my knowledge
            and skills. I'm a team player and I'm excited to work with others to
            create great apps.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t)=>t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
