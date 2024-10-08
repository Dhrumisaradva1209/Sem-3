import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        // <footer>
        //     <div className="container-fluid bg-primary">
        //         <div className="row ">
        //             <div className="col-md-9 py-3 text-white">
        //                 Get connected with us on social networks!
        //             </div>
        //             <div className="col-md-3 py-3 text-center bg-white text-white">
        //                 <Link to="/" title="Apple">
        //                     {/* <i className="bi bi-apple text-light me-3"></i> */}
        //                     <FaApple />
        //                 </Link>
        //                 <Link to="/" title="Windows">
        //                     {/* <i className="bi bi-windows text-light me-3"></i> */}
        //                     <FaWindows />
        //                 </Link>
        //                 <Link to="/" title="Android">
        //                     {/* <i className="bi bi-android2 text-light me-3"></i> */}
        //                     <FaAndroid />
        //                 </Link>
        //                 |
        //                 <Link to="/" title="Twitter">
        //                     {/* <i className="bi bi-twitter-x text-light ms-3 me-3"></i> */}
        //                     <FaTwitter />
        //                 </Link>
        //                 <Link to="/" title="Facebook">
        //                     {/* <i className="bi bi-facebook text-light me-3"></i> */}
        //                     <FaFacebook />
        //                 </Link>
        //                 <Link to="/" title="Instagram">
        //                     {/* <i className="bi bi-instagram text-light me-3"></i> */}
        //                     <FaInstagram />
        //                 </Link>
        //                 <Link to="/" title="Youtube">
        //                     {/* <i className="bi bi-youtube text-light me-3"></i> */}
        //                     <FaYoutube />
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="container-fluid bg-dark text-white">
        //         <div className="row ">
        //             <div className="col-md-3 py-3">
        //                 <div className="h6">Company Name</div>
        //                 <hr />
        //                 <p>
        //                     Lorem Ipsum is simply dummy text of the printing and typesetting
        //                     industry. Lorem Ipsum has been the industry's standard dummy text
        //                     ever since the 1500s, when an unknown printer took a galley of
        //                     type and scrambled it to make a type specimen book.
        //                 </p>
        //             </div>
        //             <div className="col-md-3 py-3">
        //                 <div className="h6">Products</div>
        //                 <hr />
        //                 <ul className="list-group list-group-flush">
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             Leptop
        //                         </Link>
        //                     </li>
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             LCD
        //                         </Link>
        //                     </li>
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             Hard Disk & RAM
        //                         </Link>
        //                     </li>
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             Camera
        //                         </Link>
        //                     </li>
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             CPU
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="col-md-3 py-3">
        //                 <div className="h6">Policy</div>
        //                 <hr />
        //                 <ul className="list-group list-group-flush">
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             Return Policy
        //                         </Link>
        //                     </li>
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             Terms Of Use
        //                         </Link>
        //                     </li>
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             Security
        //                         </Link>
        //                     </li>
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             Privacy
        //                         </Link>
        //                     </li>
        //                     <li className="list-group-item bg-dark text-white border-light">
        //                         <Link
        //                             to="/"
        //                             className="text-decoration-none text-white stretched-link"
        //                         >
        //                             EPR Compliance
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="col-md-3 py-3">
        //                 <div className="h6">Address</div>
        //                 <hr />
        //                 <address>
        //                     <strong>E-Comm, Com.</strong>
        //                     <br />
        //                     1355 Market St, Suite 900
        //                     <br />
        //                     San Francisco, CA 94103
        //                     <br />
        //                     <abbr title="Phone">P:</abbr> (123) 456-7890
        //                 </address>
        //                 <div className="h6">Customer Care</div>
        //                 <hr />
        //                 <i className="bi bi-telephone"></i> +1800 100 1000
        //                 <br />
        //                 <i className="bi bi-envelope"></i> info@email.com
        //             </div>
        //         </div>
        //     </div>
        //     <div className="container-fluid bg-secondary text-white text-center">
        //         <div className="row">
        //             <div className="col-md-2 py-2">
        //                 <Link to="/" className="text-white text-decoration-none">
        //                     <i className="bi bi-briefcase text-warning"></i> Partner with us
        //                 </Link>
        //             </div>
        //             <div className="col-md-2 py-2">
        //                 <Link to="/" className="text-white text-decoration-none">
        //                     <i className="bi bi-badge-ad text-info"></i> Advertise
        //                 </Link>
        //             </div>
        //             <div className="col-md-2 py-2">
        //                 <Link to="/" className="text-white text-decoration-none">
        //                     <i className="bi bi-gift"></i> Gift
        //                 </Link>
        //             </div>
        //             <div className="col-md-3 py-2">
        //                 © 2009-{new Date().getFullYear()} React-E-Commerce.com (
        //                 {process.env.REACT_APP_VERSION})
        //             </div>
        //         </div>
        //     </div>
        // </footer>

        <footer>
            <p>Copyright at <a href="">E-Comm</a></p>
        </footer>
        
    );
};
export default Footer;
