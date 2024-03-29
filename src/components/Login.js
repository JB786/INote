import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    let navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault();

        // API Call
        const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        });

        const json = await response.json();

        if (json.success) {
            // save the auth-token and redirect
            localStorage.setItem("token", json.authToken)
            props.showAlert("Logged in Successfully.", "success");
            navigate("/");
        }
        else {
            props.showAlert("Invalid Credentials!", "danger");
        }
    }

    const onChange = (events) => {
        setCredentials({ ...credentials, [events.target.name]: events.target.value })
    }

    return (
        <div style={{height:"100vh"}}>
            <h2 className='text-center'>Sign-in To Access Your Notes</h2>
            <div style={{ margin: "90px" }}>
                <form onSubmit={handlelogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} name='email' onChange={onChange} id="email" autoComplete="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} name='password' onChange={onChange} id="password" autoComplete="current-password" />
                    </div>

                    <button type="submit" className="btn btn-dark">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
