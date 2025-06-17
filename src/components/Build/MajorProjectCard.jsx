import React from "react";

const MajorProjectCard = ({ project }) => (
  <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-xl shadow-lg overflow-hidden">
    <div className="flex items-center justify-center bg-blue-900 md:w-1/3 w-full p-6">
      <img
        src={project.image}
        alt={project.title}
        className="h-40 object-contain"/>
    </div>
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          {project.trainer && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
              Trainer Supported
            </span>
          )}
        </div>
        <div className="text-lg md:text-xl font-bold text-white mb-1">
          {project.title}
        </div>
        <div className="text-white text-sm mb-2">{project.description}</div>
        <div className="text-blue-100 text-xs mb-2">{project.tech}</div>
        <div className="text-blue-100 text-xs">Duration : {project.duration}</div>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 rounded-full bg-white text-blue-800 font-semibold shadow hover:bg-blue-50 transition">
          Book Trainer
        </button>
      </div>
    </div>
  </div>
);

export default MajorProjectCard;