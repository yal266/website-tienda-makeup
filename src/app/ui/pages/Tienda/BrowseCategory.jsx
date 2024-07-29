import React from "react";

const BrowseCategory = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold sm:text-base text-sm text-black">
        Browse by categories
      </h1>
      <a href="/" className="underline">
        View all
      </a>
    </div>
  );
};

export default BrowseCategory;
