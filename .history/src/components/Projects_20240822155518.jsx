import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import thumb1 from '../assets/ProjectsAsset/ResiThumbnail.png'
import thumb2 from '../assets/ProjectsAsset/CoffeeThumbnail.png'
import thumb3 from '../assets/ProjectsAsset/TricycleThumbnail.png'
import thumb4 from '../assets/ProjectsAsset/LangsysThumbnail.png'
import thumb5 from '../assets/ProjectsAsset/reactp1thumbnaikl.png'
import thumb6 from '../assets/ProjectsAsset/reactp2thumbnail.png'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'





function Projects({ isDarkMode }) {
  return (
    <div name="Projects" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <motion.h2
       variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
       className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
        Proj<span className='text-[#570df8] text-3xl'>ects.</span>
      </motion.h2>
      <motion.p
       variants={fadeIn("down",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
       className='text-md font-bold mt-2 text-slate-400'>Personal Projects & Prototype</motion.p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <motion.div 
  variants={fadeIn("right",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.7}}
  
  
  className={`card bg-blue-200 w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb1}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
  <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>ResiQuest:(Automated Document Request Management System Web-Application)</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Brgy-409 Document Request Management System (DRMS)</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white '/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white '/></div>
    </div>
  </motion.div>

  <div className={`card bg-[#F7DCB9] w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb2}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>BEANtoCUP: A Coffee Shop Order and Tracking Management System Web-Application</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}> A comprehensive solution for managing coffee shop operations</p>
   </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </div>
  <div className={`card bg-indigo-300 w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb3}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Plate-to-Place: Tricycle Tracking Management System</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Strengthening Safety Measures for Tricycle Transportation</p>
    
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </div>
 
  <div className={`card bg-indigo-300  w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb4}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
      <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>LANGSYS:Language Learning System (20 Foreign Language to Learn)</h2>
      <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>A Java-based application designed to facilitate language learning through interactive lessons</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </div>

  <div className={`card bg-slate-300  w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb5}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
    <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>React Analytics Landing Page (Cloned)</h2>
    <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Dynamic Landing Page for Data Analytics Composed of financial Growth</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </div>

  <div className={`card bg-[#F7DCB9] w-full shadow-xl flex flex-col ${isDarkMode ? 'bg-slate-800 ' : 'text-primary-800'}`}>
    <figure className="px-4 pt-10">
      <img
        src={thumb6}
        alt="Shoes"
        className="rounded-xl transition-transform transform hover:scale-105"
      />
    </figure>
    <div className="py-2 px-4 flex-grow items-center text-first">
    <h2 className={`font-bold text-md px-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Cloud Management Landing Page (Cloned)</h2>
    <p className={`px-4 text-sm  ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>Dynamic Landing Page for Cloud Computing and API Development</p>
    </div>
    <div className='flex justify-end p-4 gap-2 mt-auto'>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaGithub className='w-4 h-4 text-white'/></div>
      <div className='bg-slate-600 rounded-lg p-2 transition-transform transform hover:scale-105'><FaArrowUpRightFromSquare className='w-4 h-4 text-white'/></div>
    </div>
  </div>



</div>
</div>
  </div>
  )
}

export default Projects