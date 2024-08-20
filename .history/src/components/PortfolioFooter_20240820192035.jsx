import React from 'react'

function PortfolioFooter() {
  return (
<footer className="footer footer-center bg-base-300 text-base-content p-4">
<div>
  <ul className='flex gap-4'>
    <li className='text-slate-500'>Home</li>
    <li className='text-slate-500'>Home</li>
    <li className='text-slate-500'>Home</li>
    <li className='text-slate-500'>Home</li>
    <li className='text-slate-500'>Home</li>
    <li className='text-slate-500'>Home</li>
  </ul>
</div>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
  )
}

export default PortfolioFooter