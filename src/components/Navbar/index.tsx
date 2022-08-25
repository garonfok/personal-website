// import { saveAs } from "file-saver";

import Dropdown from "./Dropdown";
import Panda from "./SVG/Panda";
import Name from "./SVG/Name";

const Navbar = () => {
  // const downloadResume = () => {
  //   saveAs(process.env.PUBLIC_URL + "/resume.pdf", "resume.pdf");
  // };
  return (
    <nav className="sticky top-0 z-10 shadow-md text-slate-900 bg-slate-100">
      <div className="container flex-row justify-between py-2.5 max-w-5xl px-8 mx-auto flex items-center">
        <a href="#top" className="gap-4 flex items-center">
          <Panda />
          <Name />
        </a>
        <div className="flex-row items-center hidden md:flex">
          <a href="#about" className="nb">
            About
          </a>
          <a href="#projects" className="nb">
            Projects
          </a>
          <a href="#skills" className="nb">
            Skills
          </a>
          <a href="#music" className="nb">
            Music
          </a>
          <a href="#cta" className="nb">
            Contact
          </a>
        </div>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
