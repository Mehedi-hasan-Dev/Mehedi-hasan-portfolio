import React from 'react'
import ToggleTheme from './ToggleTheme'
import AboutMe from './AboutMe'
import MyDetails from './MyDetails'
import MySkills from './MySkills'
import Certification from './Certification'
import Education from './Education'

const Sidebar = () => {
  return (
    <div className='w-full lg:w-1/3 '>
      <ToggleTheme/>
      <AboutMe />
      <MyDetails/>
      <MySkills/>
      <Certification/>
      <Education/>
    </div>
  )
}

export default Sidebar
