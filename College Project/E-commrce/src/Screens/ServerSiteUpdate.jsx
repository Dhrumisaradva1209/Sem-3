import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/Admin/NavBar'
import UpdateSite from '../Components/Admin/UpdateSite'
import { useNavigate, useParams } from 'react-router-dom';

export default function ServerSiteUpdate() {
    
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
