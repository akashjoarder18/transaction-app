"use client"
import GlobalApi from '@/app/_serveces/GlobalApi';
import React, { useEffect, useState } from 'react'
import DownloadForm from './_components/DownloadForm';
import DownloadButton from './_components/DownloadButton ';

const page = () => {
    const [records, setRecords] = useState([]);
    const [download, setDownloadD] = useState({});

    useEffect(() => {
        fetchData();
    }, [download]);

    const fetchData = async () => {

        GlobalApi.DownlaadListHistory().then((res) => {
            if (res.data) {
                setRecords(res.data);
            }
        })

    }

    const handleDownload = () => {
        // Use a link element to trigger download
        const link = document.createElement('a');
        link.href = '/api/download-csv';
        link.download = 'your-file.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-gray-100 flex justify-center min-h-screen">
            <div className="w-full max-w-5xl mx-4 bg-white my-6 rounded-lg shadow-lg p-8">
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-4">Transaction Data</h1>
                    <DownloadForm onDownload={setDownloadD} />

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">REQ_ID</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">DATE RANGE</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">REQ_TIME</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">COMPLETION_TIME</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold uppercase text-sm border-b">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((history) => (
                                    <tr className="hover:bg-gray-50" key={history.id}>
                                        <td className="py-4 px-6 border-b text-gray-700">{history.id}</td>
                                        <td className="py-4 px-6 border-b text-gray-700">{history.range}</td>
                                        <td className="py-4 px-6 border-b text-gray-700">{history.type}</td>
                                        <td className="py-4 px-6 border-b text-gray-700">{history.status}</td>
                                        <td className="py-4 px-6 border-b text-gray-700">

                                            <div className="p-4">
                                                <DownloadButton path={history.path} />
                                            </div>

                                        </td>

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
