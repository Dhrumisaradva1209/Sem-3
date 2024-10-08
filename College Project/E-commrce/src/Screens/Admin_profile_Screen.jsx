import React from 'react'
import Footer from '../Components/Footer'
import AdminProfile from '../Components/Profile/AdminProfile'
import NavBar from '../Components/Admin/NavBar'


export default function Admin_Detail() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className='mt-2'>
                <AdminProfile />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
