import React from "react";
import Image from "next/image";

const Contact = ({ src, name }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        src={src}
        alt="img"
        height={40}
        width={40}
      />
      <p>{name}</p>
    </div>
  );
};

export default Contact;
