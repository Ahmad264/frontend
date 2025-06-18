import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const tagColors = {
  React: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
  "Node.js": "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
  "Data Science": "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
  Intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
  Python: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
};

const MidProjectCard = ({ project, setShowPopup }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user.isClubMember && project.locked) {
      setShowPopup(true);
    } else {
      navigate(`/build/project/${project.id}`);
    }
  };

  return (
    <div
      className="relative w-96 rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition cursor-pointer"
      onClick={handleClick}>
      <div className="h-48 w-full rounded-t-xl overflow-hidden bg-gray-50 dark:bg-slate-700 flex items-center justify-center">
        <img src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"/>
      </div>
      <div className="px-4 py-3">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] || "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="text-base font-semibold text-gray-800 dark:text-gray-100">{project.title}</div>
        <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
          Unlock for <span className="font-bold">{project.price}</span>
        </div>
      </div>
      {project.locked && (
        <div className="absolute top-3 right-3 bg-white/80 dark:bg-slate-700/80 rounded-full p-1 shadow">
          <LockClosedIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </div>
      )}
    </div>
  );
};
export default MidProjectCard;
