import Image from "next/image";
import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={25}
          height={25}
          alt="img"
        />
      )}
      {Icon && <Icon className="h-6 w-6 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
