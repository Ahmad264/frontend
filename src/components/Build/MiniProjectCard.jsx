import React from "react";
import { useNavigate } from "react-router-dom";

const tagColors = {
  Python: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
  "HTML/CSS": "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200",
  JS: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
};

const MiniProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex-none w-60 rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition cursor-pointer"
      onClick={() => navigate(`/build/project/${project.id}`)}>
      <div className="h-40 w-full rounded-t-xl overflow-hidden bg-gray-50 dark:bg-slate-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"/>
      </div>
      <div className="px-3 py-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] || "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"}`}>
              {tag}
            </span>))}
        </div>
        <div className="text-base font-medium text-gray-800 dark:text-gray-100">{project.title}</div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
