import React, { useState} from 'react';
import {Redirect} from 'react-router-dom';

export default function Register() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8100/api/auth/signup', {
           
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                email,
                password
    
            })
           
        });
        console.log(username);
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login"/>;
    }
    return (
        <form className={"form-signin"} onSubmit={submit} >
            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
            <input type="text" className="form-control" placeholder="name" required
                  onChange={e => setUserName(e.target.value)}/>

            <input type="email" className="form-control" placeholder="Email address" required pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                 onChange={e => setEmail(e.target.value)}/>

            <input type="password" className="form-control" placeholder="Password" required minLength={6}
               onChange={e => setPassword(e.target.value)}/>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            
        </form>
       
    )
}
