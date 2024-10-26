import React from 'react';

const ProjectCard = ({ name, description, language, liveLink }) => {
  const languageColors = {
    TypeScript: 'text-blue-500',
    JavaScript: 'text-yellow-500',
    Bootstrap: 'text-purple-500',
    "Html & CSS": 'text-green-500',
  };

  return (
    <div className="bg-white dark:bg-[#222931] shadow-md rounded-lg p-4">
      <h3 className="font-bold text-lg dark:text-slate-200 mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <div className="flex justify-between items-end">
        <span className={`text-sm font-medium  ${languageColors[language] || 'text-gray-600'}`}>
          {language}
        </span>
        
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-slate-200 cursor-pointer hover:underline hover:text-blue-600 font-medium duration-200 ease-linear">
          Live Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
