// src/components/Contact.tsx

import React from "react";

import { saveAs } from "file-saver";

const CTA = () => {
  const downloadResume = () => {
    saveAs(process.env.PUBLIC_URL + "/resume.pdf", "resume.pdf");
  };
  return (
    <section id="cta" className="bg-gradient-to-b from-slate-200 to-rose-100">
      <div className="container max-w-5xl px-4 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col items-center w-full max-w-xl py-16 mx-auto mb-20 shadow-xl rounded-2xl bg-slate-100">
          <div className="w-full px-16">
            <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Let's Talk!
            </h1>
            <p className="py-4 mx-auto text-base leading-relaxed text-slate-700">
              If you'd like to learn more about me, schedule a lesson, or get in touch for any
              reason, don't hesitate to send me an email!
            </p>
            <div className="grid-cols-2 gap-4 py-2 mt-5 text-xl sm:grid">
              <button
                type="button"
                onClick={downloadResume}
                className="w-full py-2 my-2 border rounded-lg border-slate-300 bg-slate-100 text-cyan-900 hover:bg-gray-200"
              >
                Download Resume
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = "mailto:fokgaron@gmail.com";
                }}
                className="w-full py-2 my-2 text-white rounded-lg shadow-md bg-cyan-700 hover:bg-cyan-900"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
