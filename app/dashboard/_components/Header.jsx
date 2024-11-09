import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <div className='shadow-md py-4'>
      <div className='flex gap-4 justify-end items-center '>
        <div className='flex flex-col'>
          <h2 className='text-sm'>Sayed Al Momin</h2>
        </div>
        
        <Image className='rounded-3xl' src='/momin.png' width={40} height={30} alt='photo'/>
      </div>
    </div>
  )
}

export default Header
