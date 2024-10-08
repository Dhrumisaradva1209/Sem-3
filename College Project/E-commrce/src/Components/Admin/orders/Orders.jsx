import React from 'react'
import Footer from '../../Footer'
import NavBar from '../NavBar';
import OrdersCardList from './ordersCardList'
import { IoMdSearch } from "react-icons/io";
import {useState ,  useEffect} from 'react'

export default function Orders() {
    const [data, setData] = useState([]);
    const [temp, setTemp] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/getAllOrder")
            .then(res => res.json())
            .then((res) => { setData(res.data); setTemp(res.data) },);
    }, []);

    const handleSearch = (e) => {
        setData(temp.filter((p) => p.name.toLowerCase().includes(e.target.value.toLowerCase()) || p.price.toLowerCase().includes(e.target.value.toLowerCase()) || p.size.toLowerCase().includes(e.target.value.toLowerCase()) || p.os.toLowerCase().includes(e.target.value.toLowerCase()) || p.graphics.toLowerCase().includes(e.target.value.toLowerCase())));
    }


    return (
        <>
            <div>
                <NavBar />
            </div>
            <form class="d-flex container mt-3">
                <div class="input-group">
                    <input type="text" class="form-control" onChange={(e) => handleSearch(e)} placeholder="Search" />
                    <button type="button" class="btn btn-secondary"><IoMdSearch /></button>
                </div>
            </form>
            <div>
                <OrdersCardList data={data} setData={setData} />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
