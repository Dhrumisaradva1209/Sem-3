import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function AdminSite() {

    const navigate = useNavigate();
    const Swal = require('sweetalert2');

    const [data, setData] = useState({
        url: '',
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
    const [imgLoding, setImgLoding] = useState(false);

    const handleImgToUrl = async (e) => {
        e.preventDefault()
        setImgLoding(true);
        const formData = new FormData();
        formData.set('image', e.target.files[0]);

        axios
            .post(
                "https://api.imgbb.com/1/upload?key=de58bef84b643a42031eed355cda7f44",
                formData
            )
            .then((res) => {
                setData({ ...data, image: res.data.data.display_url });
                setImgLoding(false);
            })
            .catch((error) => {
                setImgLoding(false);
                alert(error);
            });

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col mt-2 d-flex justify-content-center" style={{ color: 'white', backgroundColor: '#fd6561', fontSize: '30px', fontWeight: 'bold' }}>
                    Add Product
                </div>
            </div>

            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>URL:</h4>
                    <input type="text" placeholder='Enter URL' className="form-control" onChange={(e) => { setData({ ...data, url: e.target.value }); }} />
                </div>
            </div>

            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Company:</h4>
                    <input type="text" placeholder='Enter Company Name' className="form-control" onChange={(e) => { setData({ ...data, company: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Name:</h4>
                    <input type="text" placeholder='Enter Name' className="form-control" onChange={(e) => { setData({ ...data, name: e.target.value }); }} />
                </div>
            </div>

            <div className="row">
                <div className='col mt-2'>
                    <h4 style={{ fontWeight: 'bold' }}>Image:</h4>
                    {imgLoding ? <p>loading....</p> :
                        <input type="file" placeholder='Enter Image' className="form-control" onChange={(e) => { handleImgToUrl(e) }} />
                    }
                    {data.image.length != 0 && <img src={data.image} />}
                </div>
            </div>

            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Discount:</h4>
                    <input type="number" placeholder='Enter Discount' className="form-control" onChange={(e) => { setData({ ...data, discount: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Price:</h4>
                    <input type="number" placeholder='Enter Price' className="form-control" onChange={(e) => { setData({ ...data, price: e.target.value }); }} />
                </div>
            </div>

            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Size:</h4>
                    <input type="text" placeholder='Enter Size' className="form-control" onChange={(e) => { setData({ ...data, size: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Resolution:</h4>
                    <input type="text" placeholder='Enter Resolution' className="form-control" onChange={(e) => { setData({ ...data, resolution: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>OS:</h4>
                    <input type="text" placeholder='Enter OS Name' className="form-control" onChange={(e) => { setData({ ...data, os: e.target.value }); }} />
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Graphics:</h4>
                    <input type="text" placeholder='Enter Graphics Card Name' className="form-control" onChange={(e) => { setData({ ...data, graphics: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>SSD:</h4>
                    <input type="text" placeholder='Enter SSD' className="form-control" onChange={(e) => { setData({ ...data, ssd: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>RAM:</h4>
                    <input type="text" placeholder='Enter RAM' className="form-control" onChange={(e) => { setData({ ...data, ram: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Processor:</h4>
                    <input type="text" placeholder='Enter Processor Name' className="form-control" onChange={(e) => { setData({ ...data, processor: e.target.value }); }} />
                </div>
            </div>

            <div className="row">
                <div className="col mt-2 d-flex justify-content-center">
                    <button className='btn' style={{ color: 'white', backgroundColor: '#fd6561', fontSize: '25px', fontWeight: 'bold' }}
                        onClick={(e) => {
                            console.log(data);
                            fetch('http://localhost:5000/api/postData', {
                                method: "POST",
                                body: JSON.stringify(data),
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
                                .then((data) => {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Record Added!",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    navigate('/admin/update/listcard');
                                    console.log('Response:', data);
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                        }}
                    >Add Product</button>
                </div>
            </div>
        </div>
    );
}


// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { CircularProgress } from '@mui/material';

// export default AdminSite = () => {
//     const [lodingButton, setlodingButton] = useState(false);
//     const [imagePreview, setImagePreview] = useState(null);
//     const today = new Date().toISOString().split('T')[0];
//     const nav = useNavigate();

//     const [eventData, setEventData] = useState({
//         eventName: '',
//         eventDesc: '',
//         noOfSeat: 0,
//         noOfRemainingSeat: 0,
//         noOfFildSeat: 0,
//         eventDate: today,
//         eventRule: '',
//         lengthOfTeam: 0,
//         eventImg: '',
//         hasTeam: false
//     });

//     let id = localStorage.getItem('EventId');

//     const Submit = (e) => {
//         setlodingButton(true)
//         e.preventDefault();

//         if (eventData.eventName === '' || eventData.eventDesc === '' || eventData.noOfSeat === '' || eventData.eventRule === '' || eventData.lengthOfTeam === '' || eventData.eventImg === '') {
//             Swal.fire({ title: 'please Enter Valid data' });
//             setlodingButton(false)
//             return;
//         } else {

//             if (eventData.noOfSeat <= 0) {
//                 Swal.fire({ title: 'please Enter Valid Seats' });
//                 setlodingButton(false)

//                 return;
//             }

//             if (eventData.lengthOfTeam <= 0) {
//                 Swal.fire({ title: 'please Enter Valid Team length' });
//                 setlodingButton(false)

//                 return;
//             }

//             localStorage.setItem('index', 1);
//             axios.post("https://api.imgbb.com/1/upload?key=de58bef84b643a42031eed355cda7f44", formData)
//                 .then(response => {
//                     Swal.fire({ template: 'succeful', title: 'New Event Created' })
//                         .then(() => {
//                             window.location.reload(false)
//                             setlodingButton(false)
//                         })
//                 })
//                 .catch(error => {
//                     alert('Error signing up');
//                 });

//             console.log(eventData);
//             setEventData({
//                 eventName: '',
//                 eventDesc: '',
//                 noOfSeat: '',
//                 eventDate: today,
//                 eventRule: '',
//                 lengthOfTeam: '',
//                 eventImg: ''
//             });
//             setImagePreview(null);
//             setlodingButton(false)
//         }


//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setEventData({
//             ...eventData,
//             [name]: value
//         });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 const base64String = reader.result;
//                 setImagePreview(base64String);
//                 setEventData({
//                     ...eventData,
//                     eventImg: base64String
//                 });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         const file = e.dataTransfer.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 const base64String = reader.result;
//                 setImagePreview(base64String);
//                 setEventData({
//                     ...eventData,
//                     eventImg: base64String
//                 });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <div className='a'>
//             <div className="row justify-content-center">
//                 <div className="col-lg-1000000">
//                     <div className="card">
//                         <div className="card-header bg-primary text-white">
//                             <h4>Event Registration Form</h4>
//                         </div>
//                         <div className="card-body">
//                             <form onSubmit={Submit}>
//                                 <div className="form-group">
//                                     <label htmlFor="eventName">Event Name:</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="eventName"
//                                         name="eventName"
//                                         placeholder="Enter event name"
//                                         value={eventData.eventName}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="eventDesc">Event Description:</label>
//                                     <textarea
//                                         className="form-control"
//                                         id="eventDesc"
//                                         name="eventDesc"
//                                         rows="3"
//                                         placeholder="Enter event description"
//                                         value={eventData.eventDesc}
//                                         onChange={handleInputChange}
//                                     ></textarea>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="noOfSeat">Number of Seats:</label>
//                                     <input
//                                         type="number"
//                                         className="form-control"
//                                         id="noOfSeat"
//                                         name="noOfSeat"
//                                         placeholder="Enter number of seats"
//                                         value={eventData.noOfSeat}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="eventDate">Event Date:</label>
//                                     <input
//                                         type="date"
//                                         className="form-control"
//                                         id="eventDate"
//                                         name="eventDate"
//                                         min={today}
//                                         value={eventData.eventDate}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="eventRule">Event Rule:</label>
//                                     <textarea
//                                         className="form-control"
//                                         id="eventRule"
//                                         name="eventRule"
//                                         rows="3"
//                                         placeholder="Enter event rule"
//                                         value={eventData.eventRule}
//                                         onChange={handleInputChange}
//                                     ></textarea>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="eventImage">Event Image:</label>
//                                     <div
//                                         className="drop-zone"
//                                         onDrop={handleDrop}
//                                         onDragOver={handleDragOver}
//                                     >
//                                         {imagePreview ? (
//                                             <img src={imagePreview} alt="Event" className="img-fluid" />
//                                         ) : (
//                                             <p>Drag & Drop or Click to Upload</p>
//                                         )}
//                                         <input
//                                             type="file"
//                                             id="eventImage"
//                                             className="form-control-file"
//                                             onChange={handleImageChange}
//                                             style={{ display: 'none' }}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="lengthOfTeam">Max Length of Team:</label>
//                                     <input
//                                         type="number"
//                                         className="form-control"
//                                         id="lengthOfTeam"
//                                         name="lengthOfTeam"
//                                         placeholder="Enter max length of team"
//                                         value={eventData.lengthOfTeam}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 {!lodingButton ? (
//                                     <button type="submit" className="btn btn-primary">Submit</button>
//                                 ) : (
//                                     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
//                                         <CircularProgress style={{ height: '30px', width: '30px', strokeWidth: '50px', color: 'black' }} />
//                                     </div>
//                                 )}
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };