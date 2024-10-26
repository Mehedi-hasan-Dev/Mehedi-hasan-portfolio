import React from 'react'
import Projects from './Projects'
import { Contact } from 'lucide-react'
import ContactMe from './ContactMe'

const Main = () => {
  return (
    <div className='w-full lg:w-2/3 mt-8 lg:mt-0'>
      <Projects/>
      <ContactMe/>
    </div>
  )
}

export default Main
