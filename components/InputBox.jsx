import React from "react";
import { UserIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";

const InputBox = () => {
  const { data: session } = useSession();

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <div className="flex h-10 w-10 bg-gray-100 rounded-full items-center justify-center">
          <UserIcon className="h-6 w-6" />
        </div>

        <form className="flex flex-1">
          <input
            className="rounded-full h-10 bg-gray-100 flex-grow px-5 focus:outline-none"
            type={"text"}
            placeholder={`No que você está pensando ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <hr />
      <div className="flex justify-evenly p-3 border-1">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 cursor-pointer rounded-xl">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Vídeo ao vivo</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 cursor-pointer rounded-xl">
          <PhotoIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm">Foto/vídeo</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 cursor-pointer rounded-xl">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm">Sentimento/atividade</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
