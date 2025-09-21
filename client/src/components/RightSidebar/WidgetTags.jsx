import React from "react";

const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className="bg-white p-5 font-sans text-sm">
      <h4 className="text-base font-semibold text-[#009dff] border-b border-gray-200 pb-2 mb-4">
        Watched tags
      </h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium hover:bg-[#009dff] hover:text-white cursor-pointer transition"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
