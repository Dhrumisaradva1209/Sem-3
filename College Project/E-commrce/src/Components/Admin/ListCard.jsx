import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function ListCard({ data , setData }) {


    const Swal = require('sweetalert2');

    // const [data1, setData] = useState([]);
    const nav = useNavigate();
    const { id } = useParams();

    // useEffect(() => {
    //     getAllProducts();
    // }, []);

    // const getAllProducts = async () => {
    //     await fetch("http://localhost:5000/api")
    //         .then(res => res.json())
    //         .then(res => setData(res));
    // }


    const result = data && data.map((e, index) => {
        return (
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
                            {/* {e.isNew && (
                            <span className="badge bg-success me-2">New</span>
                        )}
                        {e.isHot && <span className="badge bg-danger me-2">Hot</span>} */}

                            {/* <div>
                            {e.star > 0 &&
                                Array.from({ length: 5 }, (_, key) => {
                                    if (key <= e.star)
                                        return (
                                            <i
                                                className="bi bi-star-fill text-warning me-1"
                                                key={key}
                                            />
                                        );
                                    else
                                        return (
                                            <i
                                                className="bi bi-star-fill text-secondary me-1"
                                                key={key}
                                            />
                                        );
                                })}
                        </div> */}
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
                                {/* {e.price > 0 && (
                                <del className="small text-muted ms-2">
                                    {e.discount}
                                </del>
                            )}
                            {(e.price > 0 ||
                                e.price > 0) && (
                                    <span className={`rounded p-1 bg-warning ms-2 small`}>
                                        -
                                        {e.price > 0
                                            ? e.price + "%"
                                            : "$" + e.price}
                                    </span>
                                )} */}
                            </div>
                            {e.price && (
                                <p className="text-success small mb-2">
                                    <i className="bi bi-truck" /> Free shipping
                                </p>
                            )}

                            <div className="btn-group d-flex" role="group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-primary"
                                    title="Update"
                                    onClick={() => {
                                        nav('/admin/update/card/' + e._id);
                                    }}
                                >
                                    <FaRegEdit />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-danger"
                                    title="Delete"
                                    onClick={() => {
                                        fetch("http://localhost:5000/api/delete" + "/" + e._id, { method: "DELETE" })
                                            .then(res => {
                                                setData(data.filter((p) => p._id != e._id));
                                                Swal.fire({
                                                    position: "top-end",
                                                    icon: "success",
                                                    title: "Record Deleted!",
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                });
                                            });
                                    }}
                                >
                                    <MdDeleteOutline />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <>
            <div className='container'>
                <div className='row m-2'>
                    {result}
                </div>
            </div>
        </>
    );
}