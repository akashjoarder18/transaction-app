"use client"
import { redirect } from "next/navigation";
import React from 'react'
export default function Home() {
  const login=()=>{
    redirect('/dashboard');
  }
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="w-1/2 max-w-5xl mx-4 bg-white my-6 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Logoin</h2>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                        <input type="text" id="name" name="name"  placeholder="Sayed Al Momin" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"  placeholder="example@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>


                    <div className='flex justify-center gap-4 py-4'>
                    <button onClick={()=>login()} className='px-2 py-1 bg-primary text-white rounded-md'>Login</button>
                       
                    </div>
               
            </div>
        </div>
  );
}
