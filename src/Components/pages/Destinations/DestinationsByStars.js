import React, {useState} from 'react';
import "../../css/style.css";
import "../../css/card.css";
import "../../css/destinationsByStars.css";
import {HOST_NAME} from "../../../Constant";
import axios from "axios";
import {Link} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext";

export default function DestinationsByStars() {
    const [hotels, setHotels] = useState([])
    const [stars, setStars] = useState();
    const [location, setLocation] = useState();
    const {currentUser} = useAuth();
    const [errors, setErrors] = useState();

    function handleStartsChange(event) {
        setStars(event.target.value);
    }
    function handleLocationChange(event) {
        setLocation(event.target.value)
    }
    async function searchHotels(event) {
        event.preventDefault();
        if (currentUser){
            const response = await axios.get(HOST_NAME+'/hotels/byStars?stars='+stars+'&location='+location);
            setHotels(response.data);
        }else{
            setErrors("You must login or regsiter if you have no account");
        }
    }
    return (
        <div className="">
            <div className="container-50 center mb1 ">
                <div className="centered-element filterArea ">
                    <h1 className="black xlarge gideon-font"> Select by stars </h1>
                    <h5 className="white gideon-font"> does not want to select by stars ?
                        <Link className="c-blue bold" to="/"> click here</Link>
                    </h5>
                    <div className="position-relative">
                        {errors?<div className="errorBlock">
                            <h5 className="error">{errors}</h5>
                            <Link to="/login" className="loginBtn">Login</Link>
                            <Link to="/register" className="loginBtn">Sign up</Link>
                        </div>:<div></div>}
                        <form className="search-container">
                            <span className="star-rating col-sm-10">
                              <input type="radio" name="rating" value="1" onChange={handleStartsChange}/><i></i>
                              <input type="radio" name="rating" value="2" onChange={handleStartsChange}/><i></i>
                              <input type="radio" name="rating" value="3" onChange={handleStartsChange}/><i></i>
                              <input type="radio" name="rating" value="4" onChange={handleStartsChange}/><i></i>
                              <input type="radio" name="rating" value="5" onChange={handleStartsChange}/><i></i>
                            </span>
                            <input className="pd-3 search-container" type="text"
                                   onChange={handleLocationChange}
                                   placeholder="Location .."/>
                            <div className="form-group">
                                <input type="submit" value="Search Hotels" onClick={searchHotels}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container grid-container">
                {hotels?.map((hotel, index) =>
                    <div className="card grid-item" key={index}>
                        <div className="card-header">
                            {<img alt={index} src={require("../pictures/"+hotel.picName+".jpg")}/>}
                        </div>
                        <div className="card-body">
                            <span className="tag tag-teal">{hotel.location}</span>
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
