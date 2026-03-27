"use client"
import React from 'react'
import { logoutAction } from '../actions/auth'
import { useRouter } from 'next/navigation'

const LogoutBuutton = () => {
    const router = useRouter();
    const handleLogout = async() => {
        try {
            await logoutAction();
            router.push("/login");
            router.refresh();
        } catch (error) {
            console.error("Error occurred while logging out:", error);
        }
    }
  return <button className='px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-800 transition-colors cursor-pointer'
   onClick={handleLogout}>Logout</button>
}

export default LogoutBuutton
