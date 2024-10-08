import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './cardStyle.css'

const Card_Detail = () => {
    const navigate = useNavigate();
    const param = useParams();

    let userID = localStorage.getItem('authID');

    const [data, setData] = useState({});
    const [prod, setProd] = useState({
        _id: '',
        url: '',
        userID: '',
        company: '',
        image: '',
        name: '',
        discount: '',
        price: "",
        size: '',
        resolution: '',
        os: '',
        graphics: '',
        ssd: '',
        ram: '',
        processor: '',
    });

    useEffect(() => {
        setData({ ...data, userID: userID });
        console.log("userID :", userID);
        fetch(`http://localhost:5000/api/${param.id}`, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [param.id]);

    useEffect(() => {
        setProd({ ...data });
    }, [data]);

    function clk(newImg) {
        let getImg = document.getElementById("imgs");
    }

    return (
        // <div className="container">
        //     <div className="row mt-3">
        //         <div className="col-md-6">
        //             <div className="product">
        //                 <img src={data.image} className="img-fluid" alt="Product Image" width={'80%'} />
        //             </div>
        //         </div>
        //         <div className="col-md-6">
        //             <div className="product product-info">
        //                 <h2>{data.name}</h2>
        //                 <p>
        //                     <ul>
        //                         <li>{data.size}</li>
        //                         <li>{data.resolution}</li>
        //                         <li>{data.os}</li>
        //                         <li>{data.graphics}</li>
        //                         <li>{data.processor}</li>
        //                         <li>{data.ssd}</li>
        //                         <li>{data.ram}</li>
        //                     </ul>
        //                 </p>
        //                 <p className="price">Price: ₹{data.price}</p>
        //                 <p className="price">Discount: {data.discount}%</p>
        //                 <button className="btn btn-primary" onClick={() => {
        //                     let temp = data;

        //                     // setData((d)=>{...d , userID : userID});
        //                     console.log("Product data:", data);
        //                     // setData
        //                     // console.log("Product Cart:", prod);
        //                     fetch('http://localhost:5000/cartProduct/postdata', {
        //                         method: "POST",
        //                         body: JSON.stringify({...data , userID : userID}),
        //                         headers: {
        //                             "Content-Type": "application/json"
        //                         }
        //                     })
        //                         .then((response) => {
        //                             if (response.ok) {
        //                                 return response.text();
        //                             }
        //                             throw new Error('Network response was not ok.');
        //                         })
        //                         .then((prod) => {
        //                             console.log('Response:', prod);
        //                             navigate('/addTocart');
        //                         })
        //                         .catch((error) => {
        //                             console.error('Error:', error);
        //                         });
        //                 }}>Add to Cart</button>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-12">
        //             <div className="product">
        //                 <h3>Product Details</h3>
        //                 <p>More details about the product...</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div class="card">
        //     <div class="img">
        //         <img src="hrx.webp" alt="" onclick="clk(this)" /> <br />
        //         <img src="h1.webp" alt="" onclick="clk(this)" /> <br />
        //         <img src="h2.webp" alt="" onclick="clk(this)" /> <br />
        //         <img src="h3.webp" alt="" onclick="clk(this)" /> <br />
        //         <img src="h4.webp" alt="" onclick="clk(this)" /> <br />
        //     </div>
        //     <div class="left">
        //         <img src={data.image} id="imgs" alt="" />
        //     </div>

        //     <div class="right">
        //         {/* <h3>{data.company}</h3> */}
        //         <h1>{data.name}</h1>
        //         <h1>₹{data.price}</h1>
        //         <i class="fa-solid fa-star"></i>
        //         <i class="fa-solid fa-star"></i>
        //         <i class="fa-solid fa-star"></i>
        //         <i class="fa-solid fa-star"></i>
        //         <i class="fa-solid fa-star-half-stroke"></i>
        //         <h3>Brand : {data.company}</h3>
        //         <h4>Discount: {data.discount}%</h4>
        //         <p>
        //             : {data.size}
        //         </p>
        //         <p>
        //             :{data.resolution}
        //         </p>
        //         <p>
        //             : {data.os}
        //         </p>
        //         <p>
        //             : {data.graphics}
        //         </p>
        //         <p>
        //             : {data.processor}
        //         </p>
        //         <p>
        //             : {data.ssd}
        //         </p>
        //         <p>
        //             : {data.ram}
        //         </p>
        //         <button onClick={() => {
        //             let temp = data;

        //             // setData((d)=>{...d , userID : userID});
        //             console.log("Product data:", data);
        //             // setData
        //             // console.log("Product Cart:", prod);
        //             fetch('http://localhost:5000/cartProduct/postdata', {
        //                 method: "POST",
        //                 body: JSON.stringify({ ...data, userID: userID }),
        //                 headers: {
        //                     "Content-Type": "application/json"
        //                 }
        //             })
        //                 .then((response) => {
        //                     if (response.ok) {
        //                         return response.text();
        //                     }
        //                     throw new Error('Network response was not ok.');
        //                 })
        //                 .then((prod) => {
        //                     console.log('Response:', prod);
        //                     navigate('/addTocart');
        //                 })
        //                 .catch((error) => {
        //                     console.error('Error:', error);
        //                 });
        //         }}>Add To Cart</button>
        //         <button>Buy Now</button>
        //     </div>
        // </div>

        <div class="card m-2">
            <div className="row">
                <div className="col">
                    <div class="left">
                        <img src={data.image} id="imgs" alt="" style={{ marginTop: '20vh', marginLeft: '24vh' }} height={'100%'} width={'100%'} />
                    </div>
                </div>

                <div className="col">

                    <div class="right">
                        <h1>{data.name}</h1>
                        <h1>₹{data.price}</h1>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <h3>Brand : {data.company}</h3>
                        <h4>Discount: {data.discount}%</h4>
                        <p>
                            : {data.size}
                        </p>
                        <p>
                            :{data.resolution}
                        </p>
                        <p>
                            : {data.os}
                        </p>
                        <p>
                            : {data.graphics}
                        </p>
                        <p>
                            : {data.processor}
                        </p>
                        <p>
                            : {data.ssd}
                        </p>
                        <p>
                            : {data.ram}
                        </p>

                        <button onClick={() => {
                            let temp = data;

                            // setData((d)=>{...d , userID : userID});
                            console.log("Product data:", data);
                            // setData
                            // console.log("Product Cart:", prod);
                            fetch('http://localhost:5000/cartProduct/postdata', {
                                method: "POST",
                                body: JSON.stringify({ ...data, userID: userID }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                                .then((response) => {
                                    if (response.ok) {
                                        return response.text();
                                    }
                                    throw new Error('Network response was not ok.');
                                })
                                .then((prod) => {
                                    console.log('Response:', prod);
                                    navigate('/addTocart');
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                        }}>Add To Cart</button>
                        <button>Buy Now</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card_Detail;
