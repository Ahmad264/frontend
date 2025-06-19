import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const tagColors = {
  React: "bg-blue-100 text-blue-700",
  "Node.js": "bg-green-100 text-green-700",
  "Data Science": "bg-purple-100 text-purple-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Python: "bg-blue-100 text-blue-700",
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
      className="relative w-56 h-80 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition cursor-pointer flex flex-col"
      onClick={handleClick}>
<<<<<<< HEAD
      {/* Club Gradient Label */}
      {project.locked && (
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow">
          Club
        </span>
      )}
      <div className="h-40 w-full rounded-t-2xl overflow-hidden">
        <img
          src={project.image}
=======
      <div className="h-48 w-full rounded-t-xl overflow-hidden bg-gray-50 dark:bg-slate-700 flex items-center justify-center">
        <img src={project.image}
>>>>>>> a33c8c861b514a791cda37ed5f22fcf2f090c42c
          alt={project.title}
          className="w-full h-full object-cover"/>
      </div>
      <div className="px-4 py-3 flex-1 flex flex-col justify-between">
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
          <div className="text-base font-semibold text-gray-800 dark:text-gray-100">{project.title}</div>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300 font-medium mt-2">
          Unlock for <span className="font-bold">{project.price}</span>
        </div>
      </div>
    </div>
  );
};
export default MidProjectCard;
