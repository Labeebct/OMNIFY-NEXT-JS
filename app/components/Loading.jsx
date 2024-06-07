import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full fixed inset-0 h-screen flex bg-white justify-center items-center">
      {/* //Loading from the react spinner */}
      <HashLoader className="mb-20" color="#121a18" height={40} width={9} />
    </div>
  );
};

export default Loading;
