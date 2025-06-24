import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const miniProjects = [
  {
    id: 1,
    title: "Simple Calculator App",
    image: "/assets/cards/mini_projects/calculator.png",
    prerequisites: ["Python 3.8+", "Basic programming knowledge"],
    steps: [
      "Set up your development environment",
      "Create the UI layout",
      "Implement calculator logic",
      "Test all operations",
      "Deploy the app"
    ],
    tech: ["Python", "Tkinter"],
    duration: "1-2 hours",
    difficulty: "Beginner",
    author: "TechLearn Solutions",
    lastUpdated: "2025-06-19"
  },
  // ... other projects
];

const MiniProjectDetail = () => {
  const { id } = useParams();

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = miniProjects.find(p => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-800 dark:text-white">
            {id ? "Project not found" : "Loading project..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-32 h-32 object-cover rounded-xl shadow"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded">
                Mini Project
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded">
                {project.duration}
              </span>
              <span className="inline-flex items-center px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold rounded">
                {project.difficulty}
              </span>
            </div>
            <div className="text-gray-600 dark:text-gray-200 mb-1">
              {project.description}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              By {project.author} • Updated {project.lastUpdated}
            </div>
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
            Tech Stack:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(tech => (
              <span 
                key={tech} 
                className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Prerequisites */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
            Prerequisites:
          </h3>
          <ul className="list-disc ml-6">
            {project.prerequisites?.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Steps */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
            Steps:
          </h3>
          <ol className="list-decimal ml-6 space-y-2">
            {project.steps?.map((step, i) => (
              <li 
                key={i} 
                className="bg-blue-50 dark:bg-slate-700 text-gray-800 dark:text-gray-100 p-3 rounded">
                {step}
              </li>
            ))}
          </ol>
        </div>
        
        {/* WhatsApp CTA */}
        <div className="flex justify-center">
          <a
            href={`https://wa.me/91XXXXXXXXXX?text=Hi, I need help with project ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold text-lg shadow">
            Consult Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniProjectDetail;
