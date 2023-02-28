import React from "react";
import Image from "next/legacy/image";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserGroupIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import {
  UserIcon,
  UsersIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <div className="sticky top-0 z-20 bg-white flex items-center p-1 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src={"https://links.papareact.com/5me"}
          width={40}
          height={40}
          alt="img"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-500" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type={"text"}
            placeholder={"Pesquisar no Facebook"}
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={UsersIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <div className="rounded-full bg-gray-100 p-2">
          <input
            className="hidden lg:inline-flex bg-transparent outline-none placeholder-black flex-shrink"
            type={"text"}
            placeholder={"Encontrar amigos"}
          />
        </div>
        <ViewfinderCircleIcon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <UserIcon onClick={signOut} className="icon" />
      </div>
    </div>
  );
};

export default Header;
