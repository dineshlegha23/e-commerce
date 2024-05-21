import React from "react";

const Loading = ({ full = true }) => {
  return (
    <div
      className={`
      
         ${full ? "h-[calc(100vh-100px)]" : ""}
       w-full rounded-full  flex justify-center items-center`}
    >
      <div className="w-[90px] h-[90px] border-t-8 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
