import Link from 'next/link'
import React from 'react'
import LogoutBuutton from './LogoutBuutton';
import { getSession } from '../_lib/session';

const Navbar = async () => {
    const Session =await getSession(); // Replace with actual session logic
  return( 
  <nav className='bg-white shadow-sm'>
    <div className='container mx-auto p-4 flex justify-between items-center'>
        <Link href="/" className='text-xl font-bold text-blue-600' >
        Contact manager
        </Link>
        <div className='flex items-center space-x-4'>
            {Session ? (
                <>
                <Link href="/contact" className='hover:text-blue-600 mr-8'>
                Contacts
                </Link>
                <LogoutBuutton/>
                </>
            ) : (
                <>
                <Link href="/login" className='hover:text-blue-600 mr-5'>
                Login
                </Link>
                <Link href="/register" className='hover:text-blue-600'>
                Registers
                </Link>
                </>
            )}
        </div>

    </div>

  </nav>
  )
}

export default Navbar
