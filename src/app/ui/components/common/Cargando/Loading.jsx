import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto px-5 section">
      <div className="flex items-center justify-center">
        <div
          className="rounded-full border-4 border-t-4 border-pink-300 border-t-gray-300 animate-spin size-8"
          role="status"
          aria-label="Loading spinner"
        ></div>
        <p className="ml-4 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
