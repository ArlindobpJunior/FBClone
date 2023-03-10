import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid place-items-center my-10">
      <Image
        src={"https://links.papareact.com/t4i"}
        height={400}
        width={400}
        alt="img"
        className="object-cover"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer my-10"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
