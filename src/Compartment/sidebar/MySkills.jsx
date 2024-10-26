import React from 'react'


const techStack = [
    'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React.js',
    'Next.js', 'API', 'Bootstrap', 'Git', 'GitHub', 
    'npm', 'Yarn', 'DOM',
  ];

const MySkills = () => {
  return (
      <div className='px-5 py-5 mt-8 space-y-6 rounded-lg shadow-2xl bg-[#f1f1f1] dark:bg-[#1D232A]'>
        <div className="">
      <h2 className="text-gray-600 dark:text-slate-200 font-medium text-xl mb-4">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-slate-500 duration-300 ease-in"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default MySkills
