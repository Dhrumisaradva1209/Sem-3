import React, { useEffect, useState } from 'react'
import '../Profile/style.css'

export default function UserProfile() {

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
        <main class="containerProfile">
                <div class="cardProfile">
                    <img src="https://res.cloudinary.com/alexandracaulea/image/upload/v1582179610/user_fckc9f.jpg" alt="User image" class="card__image" />
                    <div class="card__text">
                        <h2>{data.firstname} {data.lastname}</h2>
                        <p>{data.email}</p>
                    </div>
                    <ul class="card__info">
                        <li>
                            <span class="card__info__stats">{data.phone}</span>
                            <span>Mobile No.</span>
                        </li>
                        <li>
                            <span class="card__info__stats">{data.address}</span>
                            <span>Address</span>
                        </li>
                        <li>
                            <span class="card__info__stats">20</span>
                            <span>following</span>
                        </li>
                    </ul>
                    <div class="card__action">
                        <button class="card__action__button card__action--follow">follow</button>
                        <button class="card__action__button card__action--message">message</button>
                    </div>
                </div>
            </main>
    );
}