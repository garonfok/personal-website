// src/components/Footer.js

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  return (
    <footer className="text-slate-500 bg-rose-100">
      <div className="container flex flex-col-reverse items-center max-w-5xl px-8 py-3 mx-auto sm:flex-row">
        <p className="mt-4 text-basesm:pl-4 sm:mt-0 sm:py-2">
          © 2022 Garon Fok
        </p>
        <span className="inline-flex justify-center mt-4 space-x-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://github.com/garonfok"
            target="_blank"
            rel="noreferrer"
            className="footer-icons"
          >
            <FontAwesomeIcon icon={brands("github")} />
          </a>
          <a
            href="https://linkedin.com/in/garonfok"
            target="_blank"
            rel="noreferrer"
            className="footer-icons"
          >
            <FontAwesomeIcon icon={brands("linkedin")} />
          </a>
          <a
            href="mailto:fokgaron@gmail.com"
            className="footer-icons"
          >
            <FontAwesomeIcon icon={solid("envelope")} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
