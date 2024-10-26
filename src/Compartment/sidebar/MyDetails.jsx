import { MapPin, Mail, Link, Github, Linkedin, Globe2 } from 'lucide-react'; 

const MyDetails = () => {
  

  return (
    <div className="px-5 py-5 mt-8 space-y-6 rounded-lg shadow-2xl bg-[#f1f1f1] text-gray-600 dark:bg-[#1D232A] dark:text-slate-200">
     <div className="text-right">
      <ul className='space-y-5 '>
        <li className='flex justify-between'><h2 className='flex justify-between gap-3'><MapPin/> Based in :</h2>
        <p>Bangladesh</p>
        </li>
        <li className='flex justify-between'><h2 className='flex justify-between gap-3 '><Github/> GitHub :</h2>
        <p><a className='hover:text-blue-500 duration-200 text-wrap' href="https://github.com/Mehedi-hasan-Dev">Mehedi-hasan-Dev</a></p>
        </li>
        <li className='flex flex-wrap justify-between'><h2 className='flex justify-between gap-3 '><Linkedin/> LinkedIn :</h2>
        <p><a className='hover:text-blue-500 duration-200' href="https://www.linkedin.com/in/mehedi-hasan-8792a0143/">linkedin.com/in/mehedi-hasan</a></p>
        </li>
        <li className='flex justify-between'><h2 className='flex justify-between gap-3'><Globe2/>Website :</h2>
        <p><a className='hover:text-blue-500 duration-200' href="https://mehedi-hasan-dev.github.io/Mehedi_hasan/">mehedi-hasan-dev</a></p>
        </li>
        <li className='flex flex-wrap
         justify-between'><h2 className='flex justify-between gap-3'><Mail/> Email :</h2>
        <p>Mehedi.hasan.dev15@gmail.com</p>
        </li>
      </ul>
     </div>



    </div>
  );
}

export default MyDetails;
