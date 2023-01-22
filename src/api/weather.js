/*
*
* Uses api
* https://rapidapi.com/community/api/open-weather-map/
* limit: 10 requests per minute
*
*/

import axios from 'axios';

const API_KEY = '3c5ae4f4eamsh9033b44294d0142p1342dbjsn01b0ac7c75d2'

export default class Weather {

    static async weather(city) {


        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
                q: city,
                lat: '0',
                lon: '0',
                callback: 'test',
                id: '2172797',
                lang: 'null',
                units: 'imperial',
                mode: 'xml'
            },
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': '90c837d1ffmsh69d2cda00f7524ap1d8c5bjsne31ee8a18a43'
            }
        };

        return axios.request(options);
    }


}

