"use client"
import { BookDashed, HomeIcon, User2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {
  const currentPath = usePathname();
  const menuLink = [
    {
      id:1,
      name:"Dashboard",
      icon: HomeIcon,
      path: "/dashboard"
    },
    {
      id:2,
      name:"Transaction",
      icon: BookDashed,
      path: "/dashboard/transaction"
    },
    {
      id:2,
      name:"User",
      icon: User2Icon,
      path: "/dashboard/users"
    }
  ]
  return (
    <div className='h-screen shadow-md flex flex-col relative'>
      <Image className='mx-auto py-4' src='/logo.svg' width={180} height={80} alt='logo' />
      <hr />
      <div>
        {
          menuLink.map((item,index)=>(
            <Link href={item.path} key={item.id}>
              <h2 className={
                `flex px-4 py-4 
                gap-2 items-center 
                border mx-4 my-4 
                rounded-md hover:bg-primary
              hover:text-white ${item.path == currentPath} ? "bg-primary text-white":""`} >
                 <item.icon/>
                 {item.name}
              </h2>
            </Link>
          ))
        }
      </div>
      <div className='flex gap-4 items-center absolute bottom-5 left-5'>
        <Image className='rounded-3xl' src='/momin.png' width={40} height={30} alt='photo'/>
        <div className='flex flex-col'>
          <h2 className='text-sm'>Sayed Al Momin</h2>
          <h2 className='text-xs'>akash09joarder@gmail.com</h2>
        </div>
      </div>
    </div>
  )
}

export default SideNav
