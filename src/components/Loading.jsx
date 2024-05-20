import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-transparent/10">
      <div className="h-[100px] w-[100px] rounded-full bg-blue-400 flex justify-center items-center">
        <div className="w-[90px] h-[90px] border-t-8 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
