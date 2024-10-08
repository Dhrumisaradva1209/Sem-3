import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AddProduct from '../Components/AddToCart/AddProduct'

export default function Add_Cart() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <AddProduct />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
