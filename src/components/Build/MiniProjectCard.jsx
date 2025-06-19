import React from "react";
import { useNavigate } from "react-router-dom";

const tagColors = {
  Python: "bg-blue-100 text-blue-700",
  "HTML/CSS": "bg-pink-100 text-pink-700",
  JS: "bg-yellow-100 text-yellow-700",
  Beginner: "bg-green-100 text-green-700",
};

const MiniProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex-none w-40 h-64 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition cursor-pointer flex flex-col"
      onClick={() => navigate(`/build/project/${project.id}`)}>
      <div className="h-32 w-full rounded-t-2xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"/>
      </div>
      <div className="px-3 py-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] || "bg-gray-100 text-gray-700"}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{project.title}</div>
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
