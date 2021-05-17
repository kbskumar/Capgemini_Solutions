import React, {useContext, useState} from 'react';
import {Redirect} from "react-router-dom";
import {credentailsContext} from '../App';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [,setCredentials]=useContext(credentailsContext);
    const savedCouponListener = async () => {
        console.log("Save coupon listener called");
        const username = JSON.parse(sessionStorage.getItem("cred")).username;
        await fetch("http://localhost:9006/api/getsavedcoupons/", {
            method: "POST",
            headers: { "Content-Type": "application/text" },
            body: username
        }).then(function (response) {
            if (response.status !== 200) {
                console.log(
                    "Looks like there was a problem. Status Code: " + response.status,
                );
                return;
            }
            response.json().then(function (data) {
                console.log("coupons",data.coupons);
                const couponId = data.coupons.map((val,id)=>{
                    return val.id;
                })
                console.log(couponId)
                sessionStorage.setItem("savedcoupons",JSON.stringify(couponId));
                setRedirect(true);
            });
        });
    }
    const submit = async (e) => {
        e.preventDefault();

         await fetch('http://localhost:8100/api/auth/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            
            body: JSON.stringify({
                username,
                password
            })
        }).then(
             function (response){
                 if (response.status !== 200) {
                     console.log('Looks like there was a problem. Status Code: ' + response.status);
                     return;
                 }response.json().then((data) =>{
                     console.log(credentailsContext);
                     setCredentials(data);
                     sessionStorage.setItem("cred",JSON.stringify(data));
                     sessionStorage.setItem("loggedin","true");
                     savedCouponListener();
                     setRedirect(true);
                })
             }
         );
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }
    return (
        <form className={"form-signin"} onSubmit={submit} >
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="text" className="form-control" placeholder="Username   " required
                 onChange={e => setUsername(e.target.value)}/>

            <input type="password" className="form-control" placeholder="Password" required 
                   onChange={e => setPassword(e.target.value)}/>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    )
}
