import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-lg font-bold text-blue-400">{project.title}</h3>
      <p className="text-sm text-gray-400 mt-2">{project.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Owner: {project.owner}</span>
        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-lg">
          Collaborate
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
