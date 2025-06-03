import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button'; // ✅ Ensure this is imported

const About = ({sectionId}) => {
  return (
    <section id={sectionId} className="relative flex flex-col bg-gray-100 dark:bg-gray-900 justify-center overflow-hidden py-10 px-4">
      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-600 rounded-full blur-2xl opacity-30 z-0"></div>

      <div className="relative z-9 flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl font-bold text-white">About Me</h2>

        <p className="text-white text-lg font-sans max-w-2xl text-center">
          With 2+ years of experience in full-stack development. Skilled in
          JavaScript, React, Node.js, and backend technologies. Focused on
          performance optimization, scalability, and integrating AI solutions.
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap text-white">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">2+</p>
            <p className="text-sm text-gray-300 text-center">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">6+</p>
            <p className="text-sm text-gray-300 text-center">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">2+</p>
            <p className="text-sm text-gray-300 text-center">Companies Worked With</p>
          </div>
        </div>

        <Button
          variant="contained"
          color="primary"
          className="mt-4 cursor-pointer"
          href="https://drive.google.com/uc?export=download&id=1lFa29BQm7PZWigVWTO93aZuigJt37ZvA"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<DownloadIcon />}
        >
          Download CV
        </Button>
      </div>
    </section>
  );
};

export default About;
