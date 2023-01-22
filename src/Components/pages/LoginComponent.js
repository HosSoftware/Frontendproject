import React, { useRef, useState} from 'react';
import "../css/style.css";
import "../css/destinationsByStars.css";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

export default function LoginComponent() {
    let navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        setError("")
        setLoading(true)
        login(email, password).then((cred) => {
            navigate("/destinationsBySeason")
        }).catch((err) => console.log(err))
        setLoading(false)
    }
//commentgit
    return (
        <div className="">
            <div className="container-50 center mb1 ">
                <div className="centered-element filterArea ">
                    <h1 className="black xlarge gideon-font"> Login to the app </h1>
                    <h5 className="white gideon-font"> Dont have an account ?
                        <Link className="c-blue bold" to="/register"> Register</Link>
                    </h5>
                    {error && <div variant="danger">{error}</div>}
                    <div className="position-relative">
                        <form className="search-container" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input placeholder="Email" type="email" ref={emailRef} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input placeholder="Password" type="password" ref={passwordRef}
                                       required/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
