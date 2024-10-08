import React , {useState , useEffect} from 'react'

import './home.css';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function HomePage() {
    const [navTogale , setNavTogale] = useState(false);
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
        <div>
            <nav class='navbar'>
                <div class='logo'>
                    <h1>E-Comm</h1>
                </div>
                {/* <ul class='menu active' style={{display:navTogale ? "" : "none"}}> */}
            <ul class='menu active togale' style={{display:navTogale ? "" : width <= "820" ? "none" : ""}}>
                <li class="togaleLi"><a href="#" class='active '>Home</a></li>
                <li class="togaleLi"><a href="#" >Shopping</a></li>
                <li class="togaleLi"><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                <li class="togaleLi"><a href="#">Profile</a></li>
                <li class="togaleLi"><a href="#">Login</a></li>
            </ul>

                        {/* <!-- btn for responsive --> */}

                        <div class='menu-btn' onClick={()=>setNavTogale(!navTogale)} >
                            {/* <i class="fa fa-bars "></i> */}
                            {navTogale ?
                            <IoMdClose /> :
                            <FaBars />
}
                            {/* <i class="fa fa-bars active"  */}
                        </div>

            </nav>


                    <section class="content">
                        <h1>New Leptops</h1>
                        <p>Get the best leptop arrival</p>
                        <button>Shop Now</button>
                    </section>

                    <h1 class="pheading">Our Latest Product</h1>

                    <section class="sec">
                        <div class="products">

                            <div class="card">
                                <div class="img"><img src="s1.jpg" alt=""/></div>
                                <div class="desc">HP</div>
                                <div class="title">HP Title</div>
                                <div class="box">
                                    <div class="price">$50</div>
                                    <button class="btn">Buy Now</button>
                                </div>
                            </div>

                        </div>
                    </section>

                    <footer>
                        <p>Copyright at <a href="">E-Comm</a></p>
                    </footer>
                </div>
                )
}
