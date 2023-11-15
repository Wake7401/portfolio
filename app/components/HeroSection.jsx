"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 font-san">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white font-extrabold mb-4 text-2xl sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Hello, I'm{" "}
            </span>
            <TypeAnimation
              sequence={["Kiet", 1000, "Web Developer"]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#949490] text-base sm:text-lg mb-6 lg:text-xl">
            I'm trying to become a good programmer
          </p>
          <div>
            <button className="px-1 py-1 rounded-full sm:w-fit bg-transparent bg-gradient-to-r from-yellow-600 to-yellow-300 text-white">
              <span className="block bg-[#121212] hover:bg-white hover:text-black rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
              src="/images/heroimage.png"
              width={300}
              height={300}
              alt="hero image"
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
