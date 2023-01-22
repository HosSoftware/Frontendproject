import React, {useState} from 'react';
import "../../css/style.css";
import "../../css/card.css";
import axios from "axios";
import {HOST_NAME} from "../../../Constant";
import {Link} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext";

export default function DestinationsBySeason() {
    const [destinations, setDestinations] = useState([])
    const [saison, setSaison] = useState();
    const [errors, setErrors] = useState();
    const {currentUser} = useAuth();

    function handleSaisonChange(event) {
        setSaison(event.target.value)
    }
    async function searchDestinations(event) {
        event.preventDefault();
        if (currentUser){
            const response = await axios.get(HOST_NAME+'/destinations/bySaison?saison='+saison);
            setDestinations(response.data);
        }else{
            setErrors("You must login or regsiter if you have no account");
        }
    }

    return (
        <div className="">
            <div className="container-50 center mb1 ">
                <div className="centered-element filterArea ">
                    <h1 className="black xlarge gideon-font"> Select by season </h1>
                    <h5 className="white gideon-font"> does not want to select by season ?
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
                                   onChange={handleSaisonChange}
                                   type="text" placeholder="Season.."/>

                            <div className="form-group">
                                <input type="submit" value="Search Hotels"onClick={searchDestinations} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container grid-container">
                {destinations?.map((destination, index) =>
                    <div className="card grid-item" key={index}>
                        <div className="card-header">
                            {<img alt={index} src={require("../pictures/"+destination.picName+".jpg")}/>}
                        </div>
                        <div className="card-body">
                            <span className="tag tag-teal">{destination.name}</span>
                            <h4>{destination.name}</h4>
                            <p>
                                {destination.description}<br/>
                                <span className="price">{destination.price}€ </span>
                            </p>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}
