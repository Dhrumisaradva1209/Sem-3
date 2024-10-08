import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectRout({childern}) {
    let auth = JSON.parse(localStorage.getItem('auth'));
    if(auth == null){
        return <Navigate to={'/login'}/>
    }
    return childern;
}
