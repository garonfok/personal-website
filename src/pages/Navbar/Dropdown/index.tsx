import React, { useState } from "react";

import { Menu } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const Dropdown = () => {
  let [items] = useState({
    About: "about",
    Projects: "projects",
    Skills: "skills",
    Music: "music",
    Contact: "cta",
  });
  return (
    <Menu>
      <Menu.Button className="text-2xl md:hidden hover:text-slate-700">
        <FontAwesomeIcon icon={solid("bars")} />
      </Menu.Button>
        <Menu.Items
          as="div"
          className="absolute w-56 mt-2 bg-white rounded-lg shadow-lg right-4 top-12 focus:outline-none"
        >
          <div className="p-1 5">
            {Object.entries(items).map(([key, value]) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`#${value}`}
                    className={`${
                      active ? "bg-slate-200" : "text-slate-700"
                    } flex rounded-md w-full p-2 text-xl`}
                  >
                    {key}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
    </Menu>
  );
};
