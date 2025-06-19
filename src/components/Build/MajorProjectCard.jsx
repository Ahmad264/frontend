import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const MajorProjectCard = ({ project }) => {
  const handleWhatsapp = () => {
    window.open(
      `https://wa.me/91XXXXXXXXXX?text=I want to know more about ${project.title}`,
      "_blank"
    );
  };

  return (
    <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-2xl shadow-lg overflow-hidden">
      {/* Club Gradient Label */}
      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow z-10">
        Club
      </span>
      <div className="flex items-center justify-center bg-blue-900 md:w-1/3 w-full p-6">
        <img
          src={project.image}
          alt={project.title}
          className="h-40 object-cover rounded-xl"/>
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
          <button
            onClick={handleWhatsapp}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow transition"
            aria-label="WhatsApp Us">
            <FaWhatsapp className="text-lg" />
            Consult Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MajorProjectCard;
