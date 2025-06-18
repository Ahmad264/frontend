import React from "react";
import { useParams } from "react-router-dom";
// Import miniProjects array or fetch from API

const MiniProjectDetail = () => {
  const { id } = useParams();
  // Find project by id from data source
  const project = "/* get project by id */";
  if (!project) return <div>Project not found</div>;

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <img src={project.image} alt={project.title} className="mx-auto mb-4" />
      <div className="mb-4">
        <h3 className="font-semibold">Prerequisites:</h3>
        <ul className="list-disc ml-5">
          {project.prerequisites?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Steps:</h3>
        <ol className="list-decimal ml-5">
          {project.steps?.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>
      <a
        href={`https://wa.me/91XXXXXXXXXX?text=Hi, I need help with project ${project.title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-green-600 text-white rounded-full font-semibold">Consult Us on WhatsApp</a>
    </div>
  );
};

export default MiniProjectDetail;