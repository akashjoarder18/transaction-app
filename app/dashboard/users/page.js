"use client"
import GlobalApi from '@/app/_serveces/GlobalApi';
import React, { useEffect }  from 'react'
import UserListsTable from './_components/UserListsTable';
import { useState } from 'react';

const page = () => {
  const [userLists, setUserLists] = useState([]);
  useEffect(() => {
    GetAllUserList();
  }, []);

  const GetAllUserList = () => {
    GlobalApi.GetAllUsers().then(res => {
      console.log(res.data);
      setUserLists(res.data);
    })
  }
  return (
    <div className='p-7 mb-4'>
      <h2 className='text-2xl font-bold flex justify-between items-center'>
        Users
      </h2>
      <UserListsTable userLists={userLists} fetchData={GetAllUserList} />
    </div>
  )
}

export default page
