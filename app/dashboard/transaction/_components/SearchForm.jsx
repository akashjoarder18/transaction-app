"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import dynamic from "next/dynamic";



const SearchForm = ({ onFilter }) => {
    const [filterData, setFilterData] = useState({
        startDate: '',
        endDate: '',
        status: '',
        type: '',
      });

    const handleChange = (event) => {
        setFilterData((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };
      

    const handleSearch = (e) => {
        e.preventDefault();
        const newUser = {
            ...filterData,
          };
        onFilter(newUser);


    };
    
    return (
        <div>
            <form onSubmit={handleSearch} className="flex gap-2 items-center">
                <div className="mb-4 flex gap-4">

                    <div className="relative w-full max-w-sm">
                        <input
                            type="date"
                            id='startDate'
                            name="startDate"
                            value={filterData.startDate}
                            onChange={handleChange}
                            className="border rounded px-2 py-1"
                        />

                    </div>
                    <div className="relative w-full max-w-sm">
                        <input
                            type="date"
                            id='endDate'
                            name='endDate'
                            value={filterData.endDate}
                            onChange={handleChange}
                            className="border rounded px-2 py-1"
                        />
                    </div>
                    <div className="relative w-full max-w-sm">
                      
                        <select id='status' name='status' onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" >
                            <option value="">Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                    <div className="relative w-full max-w-sm">
                    <select id='type' name='type' onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" >
                            <option value="">Type</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                            <option value="deposit">Deposit</option>
                            <option value="withdrawal">Withdrawal</option>
                        </select>
                      
                    </div>
                    <Button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded"
                    >
                        Search
                    </Button>

                </div>

            </form>
        </div>
    )
}

export default dynamic (() => Promise.resolve(SearchForm), {ssr: false})