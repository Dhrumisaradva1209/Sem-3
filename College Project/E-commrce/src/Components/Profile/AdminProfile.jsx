import React, { useEffect, useState } from 'react'

export default function AdminProfile() {

    const [data, setData] = useState([])
    let apiUrl = `http://localhost:5000/user/data/${localStorage.getItem('authID')}`

    useEffect(() => {
        getUserData();
        // .then(res => console.log(res));
    }, []);

    const getUserData = async () => {
        let result = await fetch(apiUrl);
        result = await result.json();

        if (result.error) {
            alert("some thing wroang");
        } else {
            setData(result.data);
        }
        console.log("admin :", result);
        // .then(res => res.json())
        // .then(res => setData(res));
    }


    return (
        <>
            {/* <div>
                <div class="navbar-top">
                    <div class="title">
                        <h1>Profile</h1>
                    </div>
                </div>

                <div class="main">
                    <h2>IDENTITY</h2>
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-pen fa-xs edit"></i>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>{data.firstname}-{data.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{data.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>:</td>
                                        <td>{data.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>:</td>
                                        <td>{data.phone}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>SOCIAL MEDIA</h2>
                    <div class="card">
                        <div class="card-body">
                            <i class="fa fa-pen fa-xs edit"></i>
                            <div class="social-media">
                                <span class="fa-stack fa-sm">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-sm">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-sm">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-sm">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-invision fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-sm">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-sm">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-sm">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-snapchat fa-stack-1x fa-inverse"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <main class="containerProfile">
                <div class="cardProfile">
                    <img src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg" alt="User image" class="card__image" />
                    <div class="card__text">
                        <h2>{data.firstname} {data.lastname}</h2>
                        <p>{data.email}</p>
                    </div>
                    {/* <ul class="card__info">
                        <li>
                            <span class="card__info__stats">172</span>
                            <span>posts</span>
                        </li>
                        <li>
                            <span class="card__info__stats">47</span>
                            <span>followers</span>
                        </li>
                        <li>
                            <span class="card__info__stats">20</span>
                            <span>following</span>
                        </li>
                    </ul>
                    <div class="card__action">
                        <button class="card__action__button card__action--follow">follow</button>
                        <button class="card__action__button card__action--message">message</button>
                    </div> */}
                </div>
            </main>
        </>
    );
}