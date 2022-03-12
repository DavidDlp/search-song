import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div>
        <a href="https://github.com/DavidDlp" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/david-dlp"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:dlpdavid17@gmail.com" target="_blank" rel="noreferrer">
          <FaMailBulk />
        </a>
      </div>
    </>
  );
};

export default ContactMe;
