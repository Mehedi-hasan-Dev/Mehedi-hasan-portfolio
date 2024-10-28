import React from 'react'
import SelfImage from './../../assets/self.jpg'
import Resume from './../../assets/MehediHasan.pdf'

const AboutMe = () => {
  return (
    <div className='mt-8 bg-[#f1f1f1] dark:bg-[#1D232A] py-5 px-5 pt-10 flex flex-col items-center text-center space-y-6 rounded-lg shadow-2xl'>
      <img className='w-28 rounded-[50%] ring ring-black dark:ring-purple-700 ring-offset-4 dark:ring-offset-slate-900' src={SelfImage} alt="" />
      <h2 className='text-xl dark:text-slate-200 font-normal'>Mehedi Hasan</h2>
      <p className='dark:text-slate-200'> Front-End Developer | React.js | Next.js  | JavaScript | HTML & CSS | UI/UX Enthusiast | Webflow</p>
      <a className='text-gray-500 border border-gray-600 px-2 hover:bg-slate-400 hover:text-black hover:border-transparent rounded-md py-1 dark:text-slate-200 dark:border-slate-400 dark:hover:bg-slate-500' href={Resume}>My Resume </a>
    </div>
  )
}

export default AboutMe
