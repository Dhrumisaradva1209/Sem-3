import React from 'react'
import Footer from '../Components/Footer'
import AdminSite from '../Components/Admin/AdminSite'
import NavBar from '../Components/Admin/NavBar'

export default function ServerSite() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <AdminSite />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
