import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const HeroSection = () => {

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));


  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row items-center justify-between p-8 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-600 rounded-full blur-2xl opacity-30 z-0"></div>

      {/* Social Icons */}
      <div className={`z-9 flex ${(isMobile||isTablet)?"flex-row w-full justify-between p-4": "flex-col"} items-center justify-center gap-6`}>
        <a
          href="https://www.linkedin.com/in/pappu-thakur-a05412172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="text-5xl text-blue-600 hover:text-blue-800 transition-colors duration-300" />
        </a>
        <a
          href="https://github.com/rbnpappu?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="text-5xl text-gray-300 hover:text-gray-100 transition-colors duration-300" />
        </a>
        <a
          href="https://leetcode.com/u/papputhakur1103/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeIcon className="text-5xl text-yellow-500 hover:text-yellow-600 transition-colors duration-300" />
        </a>
      </div>

      {/* Intro Section */}
      <div className="z-9 flex flex-col justify-center items-start gap-4 max-w-xl text-left">
        <h1 className="text-4xl font-bold font-sans">Hi, I’m Pappu 👋</h1>
        <h2 className="text-2xl font-light text-blue-400">Full-Stack Developer</h2>
        <p className="text-md text-gray-300 leading-relaxed">
          2+ years of hands-on experience building scalable web applications using React for dynamic UIs, Node.js & Express for robust APIs, and MongoDB for flexible data storage.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-2 mt-4 hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Me
          <SendIcon className="text-white" />
        </a>
      </div>

      {/* Profile Image */}
      <div className="z-9 mt-10 lg:mt-0">
        <img
          src="https://avatars.githubusercontent.com/u/52997903?v=4"
          alt="Pappu Thakur"
          className="w-48 h-48 rounded-full shadow-xl object-cover border-4 border-blue-500"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
