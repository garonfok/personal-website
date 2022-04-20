import { useState } from "react";
import { Tab } from "@headlessui/react";

import { music } from "../../data";

const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

const Music = () => {
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 shadow-inner bg-slate-300 rounded-xl">
          {music.map((section) => (
            <Tab
              key={section.sectionName}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm sm:text-xl leading-5 text-slate-700 rounded-lg",
                  selected ? "bg-slate-100 shadow" : "hover:text-slate-500"
                )
              }
            >
              {section.sectionName}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="py-8">
          {music.map((section) => (
            <Tab.Panel className="relative overflow-x-auto rounded-lg shadow-md">
              <table className="w-full px-4 py-2 text-left bg-slate-100">
                <thead className="bg-slate-300">
                  <tr>
                    <th className="w-2/3 tab-head">
                      Piece Name
                    </th>
                    <th className="tab-head">
                      Year Published
                    </th>
                    <th className="tab-head">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {section.content.map((piece) => (
                    <tr>
                      <td className="w-2/3 tab-body">{piece.title}</td>
                      <td className="tab-body">{piece.yearPublished}</td>
                      <td className="tab-body">{piece.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Music;
