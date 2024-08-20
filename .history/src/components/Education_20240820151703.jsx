import React from 'react'
import Educ1 from '../assets/educationassets/earist.png'



function Education() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
      <h2 className="text-4xl tracking-tight font-bold text-primary-800">
        Educa<span className='text-[#570df8] text-3xl'>tion.</span>
      </h2>
      <p className='text-md font-bold mt-2 text-slate-400'>School Attended</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="card w-full shadow-xl flex flex-row">
  <img className='rounded-lg' src={Educ1} alt='HTML' />
    <div className="py-4 px-4 flex-grow items-center text-first">
      <h2 className="font-bold text-md">ResiQuest: (Automated Document Request Management System Web-Application)</h2>
      <p className="text-sm text-slate-600">Brgy-409 Document Request Management System (DRMS)</p>
    </div>
  </div>

  <div className="card w-full shadow-xl flex flex-row">
    <figure className="px-2 py-2 h-[120px] w-[120px]">
      <img
        src={Educ1}
        alt="Document Request"
        className="rounded-xl w-full h-full object-cover"
      />
    </figure>
    <div className="py-4 px-4 flex-grow items-center text-first">
      <h2 className="font-bold text-md">ResiQuest: (Automated Document Request Management System Web-Application)</h2>
      <p className="text-sm text-slate-600">Brgy-409 Document Request Management System (DRMS)</p>
    </div>
  </div>

  <div className="card w-full shadow-xl flex flex-row">
    <figure className="px-2 py-2 h-[120px] w-[120px]">
      <img
        src={Educ1}
        alt="Document Request"
        className="rounded-xl w-full h-full object-cover"
      />
    </figure>
    <div className="py-4 px-4 flex-grow items-center text-first">
      <h2 className="font-bold text-md">ResiQuest: (Automated Document Request Management System Web-Application)</h2>
      <p className="text-sm text-slate-600">Brgy-409 Document Request Management System (DRMS)</p>
    </div>
  </div>
</div>





  </div>
  )
}

export default Education