import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Sonny Sangha",
    key: 1,
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    key: 2,
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },

  {
    name: "Mark Zuckerberg",
    key: 4,
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.key}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
