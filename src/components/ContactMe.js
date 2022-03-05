import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div className="container">
        <div className="container__box">
          <a
            href="https://github.com/DavidDlp"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="container__box--logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-dlp"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="container__box--logo" />
          </a>
          <a
            href="mailto:dlpdavid17@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaMailBulk className="container__box--logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
