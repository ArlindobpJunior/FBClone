import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pb-30 pt-4 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-3xl">
        <Stories />
        <InputBox />
        {/* Posts */}
      </div>
    </div>
  );
};

export default Feed;
