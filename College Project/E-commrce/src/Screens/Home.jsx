import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'
import ImageShow from '../Components/ImageShow'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <ImageShow />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
