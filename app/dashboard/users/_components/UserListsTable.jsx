
import React from 'react'

const UserListsTable = ({userLists,fetchData}) => {
   
    const handleTransaction = (data) =>{
        console.log(data);
    }
  return (
    <div className="bg-gray-100 flex justify-center min-h-screen">
                <div className="w-full max-w-5xl mx-4 bg-white my-6 rounded-lg shadow-lg p-8">
                    
                    <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Users List</h2>

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
                                {userLists.map((user)=>(

                                
                                <tr className="hover:bg-gray-50" key={user.id}>
                                    <td className="py-4 px-6 border-b text-gray-700">{user.id}</td>
                                    <td className="py-4 px-6 border-b text-gray-700">{user.name}</td>
                                    <td className="py-4 px-6 border-b text-gray-700">{user.email}</td>
                                    <td className="py-4 px-6 border-b text-center">
                                        {console.log('sdfsd')
                                        }
                                        <button onClick={()=> handleTransaction(user.trnsactions)}  className="text-blue-500 hover:text-blue-700 font-semibold mr-4">Transaction View</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
  )
}

export default UserListsTable
