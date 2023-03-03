import React from 'react'
import { Sidebar } from '../components/Sidebar'

export const Dashboard = () => {
  return (
    <div className='flex bg-black'>
      <Sidebar />
      <div className='h-[200vh] bg-black w-full'>
        <h4 className='text-white'>hello</h4>
      </div>
    </div>
  )
}
