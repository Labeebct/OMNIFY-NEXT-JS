import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full fixed h-screen flex justify-center items-center">
      <HashLoader className="mb-20" color="#121a18" height={40} width={9} />
    </div>
  );
};

export default Loading;
