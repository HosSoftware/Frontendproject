

/*
*
*   API: https://rapidapi.com/tipsters/api/priceline-com-provider/
*   limit: 10 requests per minute
*   limit: 500 requests per month
*
*
*/

import axios from "axios";

const API_KEY = '3c5ae4f4eamsh9033b44294d0142p1342dbjsn01b0ac7c75d2'

export async function getLocationId(location) {
    var options = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations',
        params: {search_type: 'ALL', name: location},
        headers: {
            'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };
    console.log(options)

    return axios.request(options);
}

export async function getHotels(dest_id) {

    const options = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
        params: {
            date_checkin: '2022-07-15',
            location_id: dest_id,
            date_checkout: '2022-07-18',
            sort_order: 'HDR',
            amenities_ids: 'FINTRNT,FBRKFST',
            rooms_number: '1',
            star_rating_ids: '3.0,3.5,4.0,4.5,5.0'
        },
        headers: {
            'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };
    console.log(options)
    return axios.request(options);
}

export async function getPictures(hotelId) {
    const options = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v2/hotels/photos',
        params: {hotel_ids: hotelId, image_size: 'medium'},
        headers: {
            'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };

    return axios.request(options);
}






