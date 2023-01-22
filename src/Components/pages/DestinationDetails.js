import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "../css/style.css"
import {getHotels, getLocationId, getPictures} from "../../api/HotelAPI";
import SimpleImageSlider from "react-simple-image-slider";
import NoImageAvailableImage from "./pictures/noImage.jpg"

export default function DestinationDetails() {

    const navigate = useNavigate()
    const location = useLocation()
    const [dest, setDestination] = useState({})
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        // if the destination is not specified return to destinations

        if (location.state === null) {
            navigate("/destinations")
            return
        }
        const {destination} = location.state
        setDestination(destination)
    }, [123])


    useEffect(() => {
        if (!dest || hotels.length > 0)
            return
        console.log(dest)
        getLocationId(dest.city).then((locationData) => {
            const cityId = locationData.data[0].cityID
            console.log(cityId)
            getHotels(cityId).then((data) => {
                data.data.hotels.forEach((hotel) => {
                    if (hotel.hotelId) {
                        const hotelObj = {
                            hotelId: hotel.hotelId,
                            name: hotel.name,
                            overall_rating: hotel.overallGuestRating,
                            star_rating: hotel.starRating,
                            thumbnail: hotel.thumbnailUrl,
                            total_reviews: hotel.totalReviewCount,
                            location: hotel.location,
                            free_cancellation: hotel.ratesSummary.freeCancelableRateAvail,
                            min_price: hotel.ratesSummary.minPrice,
                        }

                        hotelObj.images = []
                        hotelObj.images.push({url: hotel.thumbnailUrl})
                        getPictures(hotel.hotelId).then(photosData => {
                            if (photosData.data.getHotelPhotos.error) {
                                hotelObj.images.push({url: NoImageAvailableImage})
                            } else {
                                photosData.data.getHotelPhotos.photos.forEach(photo => {
                                    console.log(photo)
                                })
                            }
                        }).catch(error => {


                        }).finally(() => {
                            setHotels((hotels) => [...hotels, hotelObj])
                        })
                    }
                })
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })
    }, [dest])
    return (
        <>
            <div className="row mb1 shadow">
                <div className="col-50 pd-1">
                    <div className="w-100 align-start">
                        <h1 className="gideon-font"> {dest.title}</h1>
                    </div>
                    <div className="w-100 justified">
                        <p className="gideon-font"> {dest.description}</p>
                    </div>
                    <fieldset className="gideon-font self-end">
                        <legend>Weather Info</legend>
                        <div className="row">
                            <div className="col-50 m-0 p-0">
                                <p>Location: {dest.city}</p>
                            </div>
                            <div className="col-50 m-0 p-0">
                                <p>Min Temperature: {dest.mintemp}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50 m-0 p-0">
                                <p>Current Temperature: {dest.temperature}</p>
                            </div>
                            <div className="col-50 m-0 p-0">
                                <p>Max Temperature: {dest.maxtemp}</p>
                            </div>
                        </div>

                        <div className="row m-0 p-0 align-center">
                            <p className="w-100">Today Weather: {dest.currentWeather}</p>
                        </div>
                    </fieldset>
                </div>

                <div className="h100 center col-50 pd-1">
                    <img src={dest.image} width="100%" height="100%"/>
                </div>
            </div>
            <div className="m-vh-50">
                <div className="h100 w-100">
                    <h1>Hotels</h1>

                    <div className="h100 w-100 shadow font-helvetic">

                        {hotels.map((hotel) => {
                            return <div className="w-100">

                                <fieldset className="h100 m-vh-50 pd-1 m-1 shadow">
                                    <legend className="">{hotel.name}</legend>

                                    <div className="row">
                                        <div className="col-70 h100 m-vh-50">
                                            <div className="w-100 row  p-1 m-0">
                                                <p className="p-0 m-0">Free
                                                    cancellation: {(hotel.free_cancellation) ? "Yes" : "No"}</p>
                                            </div>
                                            <div className="w-100 row  p-1 m-0">
                                                <p className="p-0 m-0">Minimum Price: ${hotel.min_price}</p>
                                            </div>
                                            <div className="w-100 row  p-1 m-0">
                                                <p className="p-0 m-0">Location: {hotel.location.address.addressLine1}</p>
                                            </div>

                                            <div className="w-100 row p-1 m-0">
                                                <p className="p-0 m-0">rating: </p>
                                                {[...Array(5)].map((x, i) =>
                                                    (hotel.star_rating > i) ? <i className="fa-solid fa-star"/> :
                                                        <i className="fa-regular fa-star"/>
                                                )}
                                            </div>
                                            <div className="w-100 row  p-1 m-0">
                                                <p className="p-0 m-0">Overall rating: {hotel.overall_rating}</p>
                                            </div>
                                            <div className="w-100 row  p-1 m-0">
                                                <p className="p-0 m-0">Total ratings: {hotel.total_reviews}</p>
                                            </div>
                                        </div>
                                        <div className="col-30 h100">
                                            <div>
                                                <SimpleImageSlider
                                                    width={400}
                                                    height={400}
                                                    images={hotel.images}
                                                    showBullets={true}
                                                    showNavs={true}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        })
                        }
                    </div>


                </div>
            </div>


        </>
    );

}
