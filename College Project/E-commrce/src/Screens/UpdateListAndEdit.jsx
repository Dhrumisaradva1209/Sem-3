import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/Admin/NavBar'
import UpdateSite from '../Components/Admin/UpdateSite'

export default function UpdateListAndEdit() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <UpdateSite />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
