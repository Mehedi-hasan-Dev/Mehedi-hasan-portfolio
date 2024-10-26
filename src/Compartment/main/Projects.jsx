import React from 'react';
import projectsData from './projects/projects.json'; 
import ProjectCard from './projects/ProjectCard';



const Projects = () => {
  return (
    <div className="p-6 bg-[#F0EFEF] dark:bg-[#1D232A] rounded-lg">
      <div className="flex justify-between items-center">
      <h2 className="font-bold dark:text-slate-200 text-gray-600 text-2xl mb-5">Github Projects</h2>
      <a className='text-md font-medium text-gray-500 dark:text-slate-200 hover:underline hover:text-blue-500 duration-200 ease-linear' href="https://github.com/Mehedi-hasan-Dev?tab=repositories">See More</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            language={project.language}
            liveLink={project.liveLink}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
