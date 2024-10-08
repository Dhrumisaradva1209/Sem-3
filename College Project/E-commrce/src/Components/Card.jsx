import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.css'

export default function Card() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api")
            .then(res => res.json())
            .then(res => setData(res));
    }, []);


    const result = data.map((e, index) => {
        // return (
        //     // <Link to={}>
        //     <div className='col mt-4'>
        //         <div className="card" style={{ width: "18rem"}}>
        //             <img src={e.image} className="card-img-top" alt="..." />
        //             <div className="card-body">
        //                 <h5 className="card-title">{e.name}</h5>
        //                 <p className="card-text">{e.discribtion}</p>
        //                 <div className='row'>
        //                     <div className='col'>
        //                         <a href="#" className="btn btn-primary">Buy Now</a>
        //                     </div>
        //                     <div className='col'>
        //                         <a href={e.url} className="btn btn-primary">Details</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     // </Link>
        // );

        return (
            <>
                {/* <div class="card m-2" style={{ width: '300px' }}>
                    <img src={e.image} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">{e.name}</h5>
                        <p class="card-text">
                            <ul>
                                <li>{e.size}</li>
                                <li>{e.graphics}</li>
                                <li>{e.processor}</li>
                            </ul>
                        </p>
                        <a href="#" class="btn btn-primary">BUY</a>
                    </div>
                </div> */}
                <section class="Cardsec col-4">
                    <div class="Cardproducts">

                        <div class="Productcard">
                            <div class="Productimg"><img src={e.image} alt="" /></div>
                            <div class="Productdesc">{e.company}</div>
                            <div class="Producttitle">{e.name}</div>
                            <div class="Productbox">
                                <div class="Productprice">₹{e.price}</div>
                                <button class="Productbtn">Buy Now</button>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        );
    })
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h1 class="pheading">Our Latest Product</h1>
                    </div>
                </div>
                <div className='row'>
                    {result}
                </div>
            </div>
        </>
    );
};