import React from 'react'
import blur from '../assets/blur.png' ; 
import { Sidebar } from './Sidebar';

export const Intellegent = () => {
  return (
    <div className="flex bg-[#F3F3F3]">
      <Sidebar />
      <div className="basis-[83%] p-10 relative ">
        <h2 className='font-bold text-3xl'>Intelegente Features</h2>
        <div className='absolute top-[50%] left-[40%]'><p className='text-3xl font-bold '>Comming Soon ...</p></div>
        
        <div>
          <img src={blur} />
        </div>
      </div>
    </div>
  );
}
