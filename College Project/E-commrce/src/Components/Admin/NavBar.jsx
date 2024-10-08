// import React from 'react'
// import { Link } from 'react-router-dom'
// import { IoMdSearch } from "react-icons/io";

// export default function NavBar() {

//     let auth = JSON.parse(localStorage.getItem('auth'));

//     return(
//         <>
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <div class="container-fluid">
//                     <a href="#" class="navbar-brand">Brand</a>
//                     <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
//                         <div class="navbar-nav">
//                             <Link to="/" class="nav-item nav-link active">Home</Link>
//                             <Link to="/admin/update/listcard" class="nav-item nav-link">Upadte</Link>
//                             <Link to='/admin/add' class="nav-item nav-link">Add</Link>
//                             <Link to="/Profile/admin" class="nav-item nav-link">Profile</Link>
//                         </div>
//                         <form class="d-flex">
//                             <div class="input-group">
//                                 <input type="text" class="form-control" placeholder="Search" />
//                                     <button type="button" class="btn btn-secondary"><IoMdSearch /></button>
//                             </div>
//                         </form>
//                         <div class="navbar-nav">
//                             {auth != null && auth ? 
//                             // <Link to="/" onClick={()=>localStorage.removeItem('auth')} class="nav-item nav-link">Logout</Link> :
//                             <Link to="/" onClick={()=>localStorage.clear()} class="nav-item nav-link">Logout</Link> :
//                             <Link to="/login" class="nav-item nav-link">Login</Link>
// }
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );

// }

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import '../../Home/home.css';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function NavBa() {
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

    return (
        <>
            <nav class='navbar'>
                <div class='logo'>
                    <h1>E-Comm</h1>
                </div>
                {/* <ul class='menu active' style={{display:navTogale ? "" : "none"}}> */}
                <ul class='menu active togale' style={{ display: navTogale ? "" : width <= "820" ? "none" : "" }}>
                    {/* <li class="togaleLi"><Link to="/" class='active '>Home</Link></li> */}
                    <li class="togaleLi"><Link to="/admin/update/listcard" >Update</Link></li>
                    <li class="togaleLi"><Link to="/admin/add">Add</Link></li>
                    <li class="togaleLi"><Link to="/Profile/admin">Profile</Link></li>
                    <li class="togaleLi"><Link to="/Orders">Orders</Link></li>
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