"use client"
import React, { useState } from 'react'

const page = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const handleSearch = () =>{
        console.log('sdds')
    }
    return (
        <div className="bg-gray-100 flex justify-center min-h-screen">
            <div className="w-full max-w-5xl mx-4 bg-white my-6 rounded-lg shadow-lg p-8">
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-4">Transaction Data</h1>
                    {/* Date Range Input */}
                    <form className="space-y-6">
                        <div className="mb-4">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="border px-2 py-1 mr-2"
                                required
                            />
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="border px-2 py-1 mr-2"
                                required
                            />
                            <select id="status" name="staus">
                                <option value="">Status</option>
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                            </select>
                            <select id="type" name="type">
                                <option value="">Type</option>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                                <option value="deposit">Deposit</option>
                                <option value="withdrowal">Withdrawal</option>
                            </select>
                            <button
                                onClick={handleSearch}
                                className="px-6 py-2 bg-blue-500 text-white rounded"
                            >
                                Search
                            </button>
                            <div>

                            </div>

                        </div>

                    </form>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">ID</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">Name</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">Email</th>
                                    <th className="py-3 px-6 text-center text-gray-600 font-semibold uppercase text-sm border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page



