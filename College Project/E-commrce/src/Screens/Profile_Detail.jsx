import React from 'react'
import Header from '../Components/Header'
import UserProfile from '../Components/Profile/UserProfile'
import Footer from '../Components/Footer'

export default function Profile_Detail() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className='mt-2'>
                <UserProfile />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
