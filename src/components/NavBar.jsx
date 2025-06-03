import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState, useRef } from "react";

const NavBar = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTable = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    if (!isMobile && !isTable) {
      setClickMenuIcon(false);
    }
  }, [isMobile, isTable]);

  const [clickMenuIcon, setClickMenuIcon] = useState(false);

  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setClickMenuIcon(false);
      }
    };

    if (clickMenuIcon) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickMenuIcon]);

  return (
    <div className="flex flex-col w-full">
      <nav className="flex justify-between items-center w-full p-4 bg-gray-800 z-0">
        <span className="text-2xl text-white font-sans font-bold">
          Pappu Thakur
        </span>
        {!isMobile && !isTable && (
          <ul className="flex gap-6 list-none text-lg text-white font-sans">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-gray-400">
                Work
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-gray-400">
                Education
              </a>
            </li>
            <li className="mr-[3rem]">
              <a href="#skills" className="hover:text-gray-400">
                Skills
              </a>
            </li>
          </ul>
        )}
        {(isMobile || isTable) && (
          <div className="flex items-center">
            {!clickMenuIcon ? (
              <MenuIcon
                className="text-white"
                onClick={() => {
                  setClickMenuIcon(true);
                }}
              />
            ) : (
              <CloseIcon
                className="text-white"
                onClick={() => {
                  setClickMenuIcon(false);
                }}
              />
            )}
          </div>
        )}
      </nav>
      {clickMenuIcon && (
        <div
          ref={sidebarRef}
          className={`fixed top-[4.024rem] right-0 h-full w-[40%] transform transition-transform duration-300 ease-in-out bg-gray-800 z-10 ${
            clickMenuIcon ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4 list-none text-lg text-white font-sans">
            <li className="flex items-center justify-center">
              <a
                href="/"
                className="hover:text-gray-400"
                onClick={() => setClickMenuIcon(false)}
              >
                Home
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#about"
                className="hover:text-gray-400"
                onClick={() => setClickMenuIcon(false)}
              >
                About
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#work"
                className="hover:text-gray-400"
                onClick={() => setClickMenuIcon(false)}
              >
                Work
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#projects"
                className="hover:text-gray-400"
                onClick={() => setClickMenuIcon(false)}
              >
                Projects
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#contact"
                className="hover:text-gray-400"
                onClick={() => setClickMenuIcon(false)}
              >
                Contact
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#education"
                className="hover:text-gray-400"
                onClick={() => setClickMenuIcon(false)}
              >
                Education
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#skills"
                className="hover:text-gray-400"
                onClick={() => setClickMenuIcon(false)}
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
