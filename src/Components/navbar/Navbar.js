import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "../css/nav.css";
import {useAuth} from "../../context/AuthContext";


export default function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const navigation = useNavigate()
    const {logout, currentUser} = useAuth();

     const signout = async () => {
         await logout();
         navigation('/')
     }

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Tourists
                        <i className="fas fa-code"/>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/destinationsBySeason"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Destinations by seasons
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/destinationsByBudget"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Destinations by budget
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/destinationsByStars"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Destinations by stars
                            </NavLink>
                        </li>

                        {currentUser ? <li className="nav-item">
                            <NavLink
                                exact
                                to="/login"
                                className="nav-links"
                                onClick={signout}
                            >
                                Log out
                            </NavLink>
                        </li> : <li className="nav-item">
                            <NavLink
                                exact
                                to="/login"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Login
                            </NavLink>
                        </li>
                        }

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}
