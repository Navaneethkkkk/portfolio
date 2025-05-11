import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="w-[100%] h-[10vh] bg-black flex items-center justify-end ">
        <div className="flex items-center gap-7 justify-center p-9 font-serif">
           <Link to="/">
            <h1 className='text-white  hover:text-green-500'>ABOUT</h1>
            </Link>
            <Link to="/mywork">
            <h1 className='text-white  hover:text-green-500'>WORKS</h1>
            </Link>
            <Link to="/skill"><h1 className='text-white  hover:text-green-500'>SKILL</h1></Link>
            
            
            <Link to="/contact"><h1 className='text-white  hover:text-green-500'>CONTACT</h1>
</Link>
            

        </div>
      </div>
      
    </>
  )
}

export default Header
