import React from "react";
import Contact from "./Contact";
import {
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/solid";

const contacts = [
  {
    name: "Sonny Sangha",
    key: 1,
    src: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    key: 2,
    src: "https://links.papareact.com/kxk",
  },

  {
    name: "Mark Zuckerberg",
    key: 4,
    src: "https://links.papareact.com/snf",
  },
];

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg">Contatos</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.key} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
