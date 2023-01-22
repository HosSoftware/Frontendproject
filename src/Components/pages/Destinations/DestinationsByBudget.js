import React, {useState} from 'react';
import "../../css/style.css";
import "../../css/card.css";
import {HOST_NAME} from "../../../Constant";
import axios from "axios";
import {Link} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext";

export default function DestinationsByBudget() {
    const [destinations, setDestinations] = useState([])
    const [budget, setBudget] = useState();
    const [errors, setErrors] = useState();
    const {currentUser} = useAuth();

    function handleBudgetChange(event) {
        setBudget(event.target.value)
    }
    async function searchDestinations(event) {
        event.preventDefault();
        if (currentUser){
            const response = await axios.get(HOST_NAME+'/destinations/byBudget?price='+budget);
            setDestinations(response.data);
            console.log(response.data)
        }else{
            setErrors("You must login or regsiter if you have no account")
        }
    }

    return (
        <div className="">
            <div className="container-50 center mb1 ">
                <div className="centered-element filterArea ">
                    <h1 className="black xlarge gideon-font"> Select by budget </h1>
                    <h5 className="white gideon-font"> does not want to select by budget ?
                        <Link className="c-blue bold" to="/"> click here</Link>
                    </h5>
                    <div className="position-relative">
                        {errors?<div className="errorBlock">
                            <h5 className="error">{errors}</h5>
                            <Link to="/login" className="loginBtn">Login</Link>
                            <Link to="/register" className="loginBtn">Sign up</Link>
                        </div>:<div></div>}

                        <form className="search-container">
                            <input className="pd-3 search-container"
                                   onChange={handleBudgetChange}
                                   type="number" placeholder="Budget.."/>
                            <div className="form-group">
                                <input type="submit" value="Search Hotels" onClick={searchDestinations}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container grid-container">
                {destinations?.map((hotel, index) =>
                    <div className="card grid-item" key={index}>
                        <div className="card-header">
                            {<img alt={index} src={require("../pictures/"+hotel.picName+".jpg")}/>}
                        </div>
                        <div className="card-body">
                            <span className="tag tag-teal">{hotel.name}</span>
                            <h4>{hotel.name}</h4>
                            <p>
                                {hotel.description}<br/>
                                <span className="price">{hotel.price}€<span>/Night</span></span>
                            </p>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}
