import Image from "next/image";
import React from "react";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer p-3 hover:scale-110">
      <Image
        className="absolute opacity-0 lg:opacity-100 z-10 top-2 rounded-full"
        src={profile}
        width={40}
        height={40}
        alt={name}
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        alt={name}
        fill={true}
      />
    </div>
  );
};

export default StoryCard;
