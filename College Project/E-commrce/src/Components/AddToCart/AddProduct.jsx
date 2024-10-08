import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import Swal from 'sweetalert2'
import axios from 'axios';

export default function AddProduct() {

    const Swal = require('sweetalert2');

    let userID = localStorage.getItem('authID');
    const payment = 20;

    const navigate = useNavigate();
    const apiUrl = "http://localhost:5000/cartProduct/"+userID;

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);


    const handleCheckout = async()=>{
        if(data.length > 0){
       
        handlePayment();
                
    }else{
        alert('plz add product');
    }
    }

    const initPayment = (pData) => {
    		const options = {
			key: "rzp_test_vfXFgrIi1UZkyg",
			amount:pData.amount,
			currency: pData.currency,
			// name: singleParticipationData.subEventName,
			name: "Ecomm",
			description: "Test Transaction",
			image:"32332",
			order_id: pData.id,
			handler: async (response) => {
                console.log("res" , response);
                alert("succefully payment");
                let productIDs = [];
                let result = await fetch(`http://localhost:5000/order/${userID}` , {
                    method : "POST",
                    headers : {
                        "content-type" : "application/json"
                    }
                })
        
                result = await result.json();
        
                if(result.success){
                    alert("successfully chekout")
                    setData([]);
                }else{
                    alert('fail to chekout');
                }
        
				try {
					const verifyUrl = `http://localhost:5000/verify`;
					const { data } = await axios.post(verifyUrl, response);
               return true;
          
          
				} catch (error) {
                    console.log("error :: " , error.message);
          return false;
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);




    rzp1.on('razorpay:modal:closed', function() {
      console.log('Razorpay modal closed');
      // Call your function here
    });
		rzp1.open();
    // return true;
    return false;
    };

    const handlePayment = async () => {
		try {
			const orderUrl = `http://localhost:5000/orders`;
			const { data } = await axios.post(orderUrl, { amount: payment });
			initPayment(data.data);
		} catch (error) {
		}
	};

    const addCart = data.map((e) => {
        // return (
        //     <div className="container m-5">
        //         <h1>Add to Cart</h1>
        //         <div className="product">
        //             <div className="row">
        //                 <div className="col-md-2">
        //                     <img src={e.image} className="img-fluid" alt="Product Image" />
        //                 </div>
        //                 <div className="col-md-7 product-info">
        //                     <h2>{e.name}</h2>
        //                     <p>
        //                         <ul>
        //                             <li>
        //                                 {e.graphics}
        //                             </li>
        //                             <li>
        //                                 {e.processor}
        //                             </li>
        //                         </ul>
        //                     </p>
        //                 </div>
        //                 <div className="col-md-3 product-info">
        //                     <h6 className="price">Price: ₹{e.price}</h6>
        //                     <h6 className="price">Discount: {e.discount}%</h6>
        //                     <div className="input-group">
        //                          <button className="btn btn-outline-secondary" type="button">-</button>
        //                         <input type="text" className="form-control" value="1" />
        //                         <button className="btn btn-outline-secondary" type="button">+</button>
        //                     </div>
        //                     <button className="btn btn-primary m-3">Add to Cart</button>
        //                     <button className="btn btn-danger m-3" onClick={() => {
        //                         fetch("http://localhost:5000/cartProduct/Delete" + "/" + e._id, { method: "DELETE" })
        //                             .then(res => {
        //                                 Swal.fire({
        //                                     position: "top-end",
        //                                     icon: "success",
        //                                     title: "Record Deleted!",
        //                                     showConfirmButton: false,
        //                                     timer: 1500
        //                                 });
        //                             });

        //                         console.log(e._id);
        //                     }}><MdDelete /></button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // );

        return (
            <div className='container mt-3'>
                <section className="h-100 h-custom">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">

                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="h5">Shopping Bag</th>
                                                <th scope="col">Format</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <img src={e.image} className="img-fluid rounded-3"
                                                            style={{ width: "120px" }} alt="Book" />
                                                        <div className="flex-column ms-4">
                                                            <p className="mb-2">{e.company}</p>
                                                            <p className="mb-0">{e.name}</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td className="align-middle">
                                                    <p className="mb-0" style={{ fontWeight: "500" }}>Digital</p>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="d-flex flex-row">
                                                        <button className="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                            <i className="fas fa-minus"></i>
                                                        </button>

                                                        <input id="form1" min="0" name="quantity" value="2" type="number"
                                                            className="form-control form-control-sm" style={{ width: "50px" }} />

                                                        <button className="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <p className="mb-0" style={{ fontWeight: "500" }}>${e.price}</p>
                                                </td>
                                                <td className="align-middle">
                                                    <MdDelete onClick={() => {
                                                        fetch("http://localhost:5000/cartProduct/Delete" + "/" + e._id, { method: "DELETE" })
                                                            .then(res => {
                                                                setData(data.filter((p)=>p._id != e._id));
                                                                Swal.fire({
                                                                    position: "top-end",
                                                                    icon: "success",
                                                                    title: "Record Deleted!",
                                                                    showConfirmButton: false,
                                                                    timer: 1500
                                                                });
                                                            });
                                                        console.log(e._id);
                                                    }} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        );

    })

    return (
        <div classNameName='container'>
            <div classNameName='row'>
                <div classNameName='col'>
                    {addCart}
                </div>
            </div>
            <div className='row m-5'>
                <div className="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }}>
                    <div className="card-body p-4">

                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                                <form>
                                    <div className="d-flex flex-row pb-3">
                                        <div className="d-flex align-items-center pe-2">
                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1v"
                                                value="" aria-label="..." checked />
                                        </div>
                                        <div className="rounded border w-100 p-3">
                                            <p className="d-flex align-items-center mb-0">
                                                <FaRegCreditCard /> Credit
                                                Card
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row pb-3">
                                        <div className="d-flex align-items-center pe-2">
                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2v"
                                                value="" aria-label="..." />
                                        </div>
                                        <div className="rounded border w-100 p-3">
                                            <p className="d-flex align-items-center mb-0">
                                                <FaRegCreditCard /> Debit Card
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="d-flex align-items-center pe-2">
                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3v"
                                                value="" aria-label="..." />
                                        </div>
                                        <div className="rounded border w-100 p-3">
                                            <p className="d-flex align-items-center mb-0">
                                                <FaRegCreditCard /> PayPal
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-6">
                                <div className="row">
                                    <div className="col-12 col-xl-6">
                                        <div className="form-outline mb-4 mb-xl-5">
                                            <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                placeholder="John Smith" />
                                            <label className="form-label" for="typeName">Name on card</label>
                                        </div>

                                        <div className="form-outline mb-4 mb-xl-5">
                                            <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YY"
                                                size="7" minlength="7" maxlength="7" />
                                            <label className="form-label" for="typeExp">Expiration</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <div className="form-outline mb-4 mb-xl-5">
                                            <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                                placeholder="1111 2222 3333 4444" minlength="19" maxlength="19" />
                                            <label className="form-label" for="typeText">Card Number</label>
                                        </div>

                                        <div className="form-outline mb-4 mb-xl-5">
                                            <input type="password" id="typeText" className="form-control form-control-lg"
                                                placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                            <label className="form-label" for="typeText">Cvv</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-3">
                                <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                                    <p className="mb-2">Subtotal</p>
                                    <p className="mb-2">$23.49</p>
                                </div>

                                <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                                    <p className="mb-0">Shipping</p>
                                    <p className="mb-0">$2.99</p>
                                </div>

                                <hr className="my-4" />

                                <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                                    <p className="mb-2">Total (tax included)</p>
                                    <p className="mb-2">$26.48</p>
                                </div>

                                <button type="button" className="btn btn-primary btn-block btn-lg" onClick={()=>handleCheckout()}>
                                    <div className="d-flex justify-content-between">
                                        <span>Checkout</span>
                                        <span>$26.48</span>
                                    </div>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
