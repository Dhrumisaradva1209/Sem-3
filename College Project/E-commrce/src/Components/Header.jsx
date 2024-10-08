import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import '../Home/home.css';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    let auth = JSON.parse(localStorage.getItem('auth'));
    const [navTogale, setNavTogale] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const [searchBar, setsearchBar] = useState('');
    return (
        <>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a href="#" class="navbar-brand">Brand</a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-item nav-link active">Home</Link>
                            <Link to="/shopping" class="nav-item nav-link">Shopping</Link>
                            <Link to='/addTocart' class="nav-item nav-link">Cart</Link>
                            <Link to="/profile/user" class="nav-item nav-link">Profile</Link>
                        </div>
                        <div class="navbar-nav">
                            {auth != null && auth ? 
                            <Link to="/" onClick={()=>localStorage.clear()} class="nav-item nav-link">Logout</Link> :
                            <Link to="/login" class="nav-item nav-link">Login</Link>}
                        </div>
                    </div>
                </div>
            </nav> */}

            <nav class='navbar'>
                <div class='logo'>
                    <h1>E-Comm</h1>
                </div>
                {/* <ul class='menu active' style={{display:navTogale ? "" : "none"}}> */}
                <ul class='menu active togale' style={{ display: navTogale ? "" : width <= "820" ? "none" : "" }}>
                    <li class="togaleLi"><Link to="/" class='active '>Home</Link></li>
                    <li class="togaleLi"><Link to="/shopping" >Shopping</Link></li>
                    <li class="togaleLi"><Link to="/addTocart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
                    <li class="togaleLi"><Link to="/profile/user">Profile</Link></li>
                    <li class="togaleLi">{auth != null && auth ?
                        <Link to="/" onClick={() => localStorage.clear()} >Logout</Link> :
                        <Link to="/login">Login</Link>}</li>
                </ul>

                {/* <!-- btn for responsive --> */}

                <div class='menu-btn' onClick={() => setNavTogale(!navTogale)} >
                    {/* <i class="fa fa-bars "></i> */}
                    {navTogale ?
                        <IoMdClose /> :
                        <FaBars />
                    }
                    {/* <i class="fa fa-bars active"  */}
                </div>

            </nav>
        </>
    );
}