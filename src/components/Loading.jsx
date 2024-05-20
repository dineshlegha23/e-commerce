import React from "react";

const Loading = () => {
  return (
    <div className="h-[100px] w-[100px] rounded-full  flex justify-center items-center">
      <div className="w-[90px] h-[90px] border-t-8 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
