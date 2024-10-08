import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function OrdersCardList({data}) {

  console.log("data :: " , data);

   return (
    <>
     <div className='container'>
                <div className='row m-2'>
                    {
                     data && data.map((e)=>(
                        <div className="card m-2">
              <div className="row g-0">
                  <div className="col-md-3 text-center">
                      <img src={e.image} className="img-fluid" alt="..." />
                  </div>
                  <div className="col-md-6">
                      <div className="card-body">
                          <h6 className="card-subtitle me-2 d-inline">
                              <Link to={e.url} className="text-decoration-none">
                                  {e.name}
                              </Link>
                          </h6>
                          <ui>
                              <li>
                                  {e.size}
                              </li>
                              <li>
                                  {e.resolution}
                              </li>
                              <li>
                                  {e.os}
                              </li>
                              <li>
                                  {e.graphics}
                              </li>
                              <li>
                                  {e.ssd}
                              </li>
                              <li>
                                  RAM:{e.ram}
                              </li>
                          </ui>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="card-body">
                          <div className="mb-2">
                              <span className="fw-bold h5">Price: ₹{e.price}</span>
                              <br />
                              <span className="fw-bold h5">Discount: {e.discount}%</span>
                          </div>
                          {e.price && (
                              <p className="text-success small mb-2">
                                  <i className="bi bi-truck" /> Free shipping
                              </p>
                          )}

                        
                      </div>
                  </div>
              </div>
          </div>
                     ))
                    }
                </div>
            </div>
    </>
   )
}