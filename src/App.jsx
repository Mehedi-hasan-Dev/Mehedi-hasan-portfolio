import { useState } from 'react'
import Sidebar from './Compartment/sidebar/Sidebar'
import Main from './Compartment/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='px-10 py-10 lg:flex gap-5 dark:bg-[#15191E]'>
      <Sidebar/>
      <Main/>
     </div>
    </>
  )
}

export default App
