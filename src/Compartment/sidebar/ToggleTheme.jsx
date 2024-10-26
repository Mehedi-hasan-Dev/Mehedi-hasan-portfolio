import React from 'react'
import ToggleButton from './ToggleButton'

const ToggleTheme = () => {
  return (
    <div className='flex justify-between items-center bg-[#f1f1f1] dark:bg-[#1D232A] py-3 px-5 rounded-lg shadow-2xl'>
      <div className="">
        <h2 className='text-2xl dark:text-slate-200  font-medium'>Theme</h2>
        
      </div>
      <div className="">
        <ToggleButton/>
      </div>
    </div>
  )
}

export default ToggleTheme
