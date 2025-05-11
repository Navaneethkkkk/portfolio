import React from 'react'

function Contact() {
  return (
    <>
      <div className="w-[100%] h-[80vh] bg-black  ">
        <div className=" text-white font-serif ml-10 text-2xl">
        <h1 className='flex justify-start pt-4'>CONTACT</h1>
        <div className="w-28 text-green-500">
        <hr /> 
        </div>
        <div className="pt-4  ">
            <div className=" flex flex-row items-center gap-6">
            <img className='w-10 h-10  flex items-center' src="https://img.icons8.com/?size=96&id=gejeldAcScwa&format=png" alt="" />
            <h1 className="text-3xl font-display ">kerala wayanad</h1>
            </div>
        </div>

        <div className=" flex flex-row items-center gap-4 pt-6">
            <img className='pt-4 w-13 h-13 ' src="https://img.icons8.com/?size=96&id=J9QTpfBIai4P&format=png" alt="" />
            <div className="pt-7">
            <h1 className="text-3xl flex items-center">Call us</h1>
            <h3 className='text-[1rem]'>9526950256</h3>
            </div>
            
        </div>
        <div className=" flex flex-row items-center gap-4 pt-6">
            <img className='pt-4 w-13 h-13 ' src="https://img.icons8.com/?size=96&id=bc240UBbpqo0&format=png" alt="" />
            <div className="pt-7">
            <h1 className="text-3xl flex items-center">Email</h1>
            <h3 className='text-[1rem]'>navaneeth@gmail.com</h3>
            </div>
            
        </div>
        </div>
        
        </div>
       
      
    </>
  )
}

export default Contact
