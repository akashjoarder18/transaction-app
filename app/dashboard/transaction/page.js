"use client"
import React, { useEffect, useState } from 'react'
import SearchForm from './_components/SearchForm';
import GlobalApi from '@/app/_serveces/GlobalApi';

const page = () => {
    const [records, setRecords] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchData();
    }, [filters]);

    const fetchData = () => {
        GlobalApi.GetTransactionSearch(filters).then((res) => {
            console.log(res.data);
            setRecords(res.data);
            console.log(records);
        })
    }
    return (
        <div className="bg-gray-100 flex justify-center min-h-screen">
            <div className="w-full max-w-5xl mx-4 bg-white my-6 rounded-lg shadow-lg p-8">
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-4">Transaction Data</h1>
                    <SearchForm onFilter={setFilters} />

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">ID</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">Client Name</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">Type</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">Amount</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {records.map((transaction)=>(
                               <tr className="hover:bg-gray-50" key={transaction.id}>
                               <td className="py-4 px-6 border-b text-gray-700">{transaction.id}</td>
                               <td className="py-4 px-6 border-b text-gray-700">{transaction.user.name}</td>
                               <td className="py-4 px-6 border-b text-gray-700">{transaction.type}</td>
                               <td className="py-4 px-6 border-b text-gray-700">{transaction.amount}</td>
                               <td className="py-4 px-6 border-b text-gray-700">{transaction.status}</td>
                              
                           </tr>
                           ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page



