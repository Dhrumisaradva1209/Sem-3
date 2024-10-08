import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UpdateSite() {

    const param = useParams();
    const navigate = useNavigate();
    const apiUrl = "http://localhost:5000/api";

    const [data, setData] = useState({});


    useEffect(() => {
        updateProduct();
        // .then(res =>console.log(res));
    }, []);

    const updateProduct = async () => {
        await fetch(apiUrl + "/" + param.id)
            .then(res => res.json())
            .then(res => setData(res));
    }

    return (<>
        {/* <div className='container mt-4'>
            <div className='row'>
                <div className='col'>
                    url:
                    <input type="text" value={data.url} className="form-control" onChange={(e) => {
                        setData({ ...data, url: e.target.value });
                    }} />
                </div>
            </div>

            <br />

            <div className='row'>
                <div className='col'>
                    Company:
                    <input type="text" value={data.company} className="form-control" onChange={(e) => {
                        setData({ ...data, company: e.target.value });
                    }} />
                </div>

                <div className='col'>
                    Image:
                    <input type="text" value={data.image} className="form-control" onChange={(e) => {
                        setData({ ...data, image: e.target.value });
                    }} />
                </div>
            </div>

            <br />

            <div className='row'>
                <div className='col'>
                    Name:
                    <input type="text" value={data.name} className="form-control" onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                    }} />
                </div>

                <div className='col'>
                    Discount:
                    <input type="number" value={data.discount} className="form-control" onChange={(e) => {
                        setData({ ...data, discount: e.target.value });
                    }} />
                </div>
            </div>

            <br />

            <div className='row'>
                <div className='col'>
                    Price:
                    <input type="text" value={data.price} className="form-control" onChange={(e) => {
                        setData({ ...data, price: e.target.value });
                    }} />
                </div>

                <div className='col'>
                    Size:
                    <input type="text" value={data.size} className="form-control" onChange={(e) => {
                        setData({ ...data, size: e.target.value });
                    }} />
                </div>
            </div>

            <br />

            <div className='row'>
                <div className='col'>
                    Resolution:
                    <input type="text" value={data.resolution} className="form-control" onChange={(e) => {
                        setData({ ...data, resolution: e.target.value });
                    }} />
                </div>

                <div className='col'>
                    OS:
                    <input type="text" value={data.os} className="form-control" onChange={(e) => {
                        setData({ ...data, os: e.target.value });
                    }} />
                </div>
            </div>

            <br />

            <div className='row'>
                <div className='col'>
                    Graphics:
                    <input type="text" value={data.graphics} className="form-control" onChange={(e) => {
                        setData({ ...data, graphics: e.target.value });
                    }} />
                </div>

                <div className='col'>
                    SSD:
                    <input type="text" value={data.ssd} className="form-control" onChange={(e) => {
                        setData({ ...data, ssd: e.target.value });
                    }} />
                </div>
            </div>

            <br />

            <div className='row'>
                <div className='col'>
                RAM:
                    <input type="text" value={data.ram} className="form-control" onChange={(e) => {
                        setData({ ...data, ram: e.target.value });
                    }} />
                </div>

                <div className='col'>
                    Processor:
                    <input type="text" value={data.processor} className="form-control" onChange={(e) => {
                        setData({ ...data, processor: e.target.value });
                    }} />
                </div>
            </div>

            <div className='row mt-4 mb-4'>
                <div className='col d-flex justify-content-center'>
                    <input type="button" className='btn btn-primary' value="Edit Product" onClick={async () => {

                        await fetch("http://localhost:5000/api/putData" + "/" + param.id, {
                            method: "PUT",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then((res) => {
                                navigate('/admin/update/listcard');
                            })
                    }} />
                </div>
            </div>
        </div> */}

        <div className="container">
            <div className="row">
                <div className="col mt-2 d-flex justify-content-center" style={{ color: 'white', backgroundColor: '#fd6561', fontSize: '30px', fontWeight: 'bold' }}>
                    Edit Product
                </div>
            </div>

            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>URL:</h4>
                    <input type="text" placeholder='Enter URL' value={data.url} className="form-control" onChange={(e) => { setData({ ...data, url: e.target.value }); }} />
                </div>
            </div>

            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Company:</h4>
                    <input type="text" placeholder='Enter Company Name' value={data.company} className="form-control" onChange={(e) => { setData({ ...data, company: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Name:</h4>
                    <input type="text" placeholder='Enter Name' value={data.name} className="form-control" onChange={(e) => { setData({ ...data, name: e.target.value }); }} />
                </div>
            </div>

            <div className="row">
                <div className='col mt-2'>
                    <h4 style={{ fontWeight: 'bold' }}>Image:</h4>
                    <input type="file" placeholder='Enter Image' className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Discount:</h4>
                    <input type="number" placeholder='Enter Discount' value={data.discount} className="form-control" onChange={(e) => { setData({ ...data, discount: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Price:</h4>
                    <input type="number" placeholder='Enter Price' value={data.price} className="form-control" onChange={(e) => { setData({ ...data, price: e.target.value }); }} />
                </div>
            </div>

            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Size:</h4>
                    <input type="text" placeholder='Enter Size' value={data.size} className="form-control" onChange={(e) => { setData({ ...data, size: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Resolution:</h4>
                    <input type="text" placeholder='Enter Resolution' value={data.resolution} className="form-control" onChange={(e) => { setData({ ...data, resolution: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>OS:</h4>
                    <input type="text" placeholder='Enter OS Name' value={data.os} className="form-control" onChange={(e) => { setData({ ...data, os: e.target.value }); }} />
                </div>
            </div>
            <div className="row">
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Graphics:</h4>
                    <input type="text" placeholder='Enter Graphics Card Name' value={data.graphics} className="form-control" onChange={(e) => { setData({ ...data, graphics: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>SSD:</h4>
                    <input type="text" placeholder='Enter SSD' value={data.ssd} className="form-control" onChange={(e) => { setData({ ...data, ssd: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>RAM:</h4>
                    <input type="text" placeholder='Enter RAM' value={data.ram} className="form-control" onChange={(e) => { setData({ ...data, ram: e.target.value }); }} />
                </div>
                <div className="col mt-2">
                    <h4 style={{ fontWeight: 'bold' }}>Processor:</h4>
                    <input type="text" placeholder='Enter Processor Name' value={data.processor} className="form-control" onChange={(e) => { setData({ ...data, processor: e.target.value }); }} />
                </div>
            </div>

            <div className="row">
                <div className="col mt-2 d-flex justify-content-center">
                    <button className='btn' style={{ color: 'white', backgroundColor: '#fd6561', fontSize: '25px', fontWeight: 'bold' }}
                        onClick={async () => {
                            await fetch("http://localhost:5000/api/putData" + "/" + param.id, {
                                method: "PUT",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                                .then((res) => {
                                    navigate('/admin/update/listcard');
                                })
                        }}
                    >Edit Product</button>
                </div>
            </div>
        </div>

    </>);
}