import React, { useRef, useState} from 'react';
import "../css/style.css";
import "../css/destinationsByStars.css";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

export default function SignupComponent() {
    let navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
        const confPassword = e.target[2].value;
        console.log(e.target)
        if (password !== confPassword) {
            return setError("Passwords do not match")
        }
        setError("")
        setLoading(true)
        signup(email, password).then((cred) => {
            navigate("/destinationsBySeason")
        }).catch((err) => console.log(err))
        setLoading(false)
    }

    return (
        <div className="">
            <div className="container-50 center mb1 ">
                <div className="centered-element filterArea ">
                    <h1 className="black xlarge gideon-font"> Sign Up </h1>
                    <h5 className="white gideon-font"> Already have an account ?
                        <Link className="c-blue bold" to="/login"> Login</Link>
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
                                <input placeholder="Password" type="password" ref={passwordRef} required/>
                            </div>
                            <div className="form-group">
                                <label>Password Confirmation</label>
                                <input placeholder="Password" type="password" ref={passwordConfirmRef} required/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Sign up"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
