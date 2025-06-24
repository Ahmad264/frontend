import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const MidProjectCard = ({ project, setShowPopup }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (project.free) {
      navigate(`/build/midproject/${project.id}`, { state: { project } });
    } else if (!user.isClubMember && project.locked) {
      setShowPopup(true);
    } else {
      navigate(`/build/midproject/${project.id}`, { state: { project } });
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 mb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.free ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-gradient-to-r from-green-400 via-blue-400 to-blue-500 text-white shadow-lg z-10 leading-none">
            Free
          </span>
        ) : project.locked ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow-lg z-10 leading-none">
            Club
          </span>
        ) : null}
      </div>
      <div className="px-1">
        <h3 className="text-[0.9rem] font-bold text-gray-900 dark:text-white mb-1 leading-tight">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-[0.8rem] text-gray-600 dark:text-gray-300 mb-2 leading-tight">
            {project.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] text-gray-500 dark:text-gray-400 leading-tight">
            <span className="inline">Unlock for </span>
            <span className="font-bold text-gray-900 dark:text-white">{project.price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MidProjectCard;
