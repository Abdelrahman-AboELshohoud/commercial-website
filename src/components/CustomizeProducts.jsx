import React from "react";

export default function CustomizeProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-[2px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-400" />
        </li>
      </ul>
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="rounded-md ring-1 cursor-pointer relative ring-f text-f py-1 px-4 text-sm">
          Small
        </li>
        <li className="rounded-md ring-1 cursor-pointer relative ring-f text-white bg-f py-1 px-4 text-sm">
          Medium
        </li>
        <li className="rounded-md ring-1 cursor-not-allowed relative ring-pink-200 text-white bg-pink-200 py-1 px-4 text-sm">
          Large
        </li>
      </ul>
    </div>
  );
}
