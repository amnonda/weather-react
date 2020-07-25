import React, { useState, useEffect } from "react";
import './weather.css';
import WeatherCard from './WeatherCard'
import WeatherData from '../WeatherReport.json'
import axios from 'axios'
import Loader from './Loader'


function Weather() {

    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=31.899160&lon=35.007408&units=metric&exclude=current,minutely,hourly&appid=edef3ee48e1e274fb924702e3f35642d'
    let content = null;

    // const [apiData, setApiData] = useState({});
    const [the_content, setTheContent] = useState(null);

    useEffect(() => {

        content = <Loader></Loader>
        setTheContent(content);

        axios.get(url)
            .then(response => {
                if (response.error) {
                    content =
                        <div>
                            <div className="bg-red-300 p-3">
                                There was an error please refresh or try again later.
                      </div>
                        </div>
                    setTheContent(content)
                }
                else
                console.log("working: " + response.data);
                    setApiData(response.data);
            })
            .catch(() => {
            })

    }, [])


    const [details, setDetails] = useState({
        sunrise_h: '',
        sunrise_m: '',
        sunrise_s: '',
        sunset_h: '',
        sunset_m: '',
        sunset_s: '',
        f_day: '',
        f_night: '',
        f_eve: '',
        f_morn: '',
        pressure: '',
        humidity: '',
        w_speed: '',
        g_weather: '',
        s_weather: '',
        pop: '',
        uv: '',
        clouds: ''
    });

    const dow = [
        ["Sunday", "Sun"],
        ["Monday", "Mon"],
        ["Tuesday", "Tue"],
        ["Wednesday", "Wed"],
        ["Thursday", "Thu"],
        ["Friday", "Fri"],
        ["Saturday", "Sat"]];

    // const oldweather_icons = [
    //     { id: 502, image: "./Images/rain.png" },
    //     { id: 300, image: "./Images/rain_light.png" },
    //     { id: 802, image: "./Images/partly_cloudy.png" },
    //     { id: 803, image: "./Images/cloudy.png" },
    //     { id: 804, image: "./Images/cloudy.png" },
    //     { id: 801, image: "./Images/sunny_s_cloudy.png" },
    //     { id: 800, image: "./Images/sunny.png" },
    //     { id: 600, image: "./Images/snow.png" }
    // ]

    function getTime(secs) {
        var xx = new Date();
        xx.setTime(secs * 1000); // javascript timestamps are in milliseconds
        return xx;
    }


    // function oldgetImage(num) {
    //     var i;
    //     for (i = 0; i < weather_icons.length; i++) {
    //         if (weather_icons[i].id === num)
    //             return weather_icons[i].image;
    //     }
    // }
	
    function getImage(num) {
             let an_img = "./Images/01d.png";
             
                if (num >= 200 && num <= 232)
                an_img = "./Images/11d.png";
                else if (num >= 200 && num <= 232)
                an_img = "./Images/01d.png";
                else if (num >= 300 && num <= 321)
                an_img = "./Images/09d.png";
                else if (num == 511)
                an_img = "./Images/13d.png";
                else if (num >= 520 && num <= 531)
                an_img = "./Images/09d.png";
                else if (num >= 600 && num <= 622)
                an_img = "./Images/13d.png";
                else if (num >= 701 && num <= 781)
                an_img = "./Images/50d.png";
                else if (num == 800)
                an_img = "./Images/01d.png";
                else if (num == 801)
                an_img = "./Images/02d.png";
                else if (num == 802)
                an_img = "./Images/03d.png";
                else if (num >= 803 && num <= 804)
                an_img = "./Images/04d.png";
        
                return an_img;
            }
			

    function setApiData(api_data) {
        content =

            api_data.daily.map((weatherDetail) =>
                <WeatherCard key={weatherDetail.dt}
                    full_day={dow[getTime(weatherDetail.dt).getDay()][0]}
                    alt_text={weatherDetail.weather[0].description}
                    short_day={dow[getTime(weatherDetail.dt).getDay()][1]}
                    d_temp_c={Math.floor(weatherDetail.temp.day)}
                    n_temp_c={Math.floor(weatherDetail.temp.night)}
                    d_temp_f={Math.floor(weatherDetail.temp.day)}
                    n_temp_f={Math.floor(weatherDetail.temp.night)}
                    image={getImage(weatherDetail.weather[0].id)}
                    setDetails={setDetails}
                    extraDetails={{
                        sunrise_h: getTime(weatherDetail.sunrise).getHours(),
                        sunrise_m: getTime(weatherDetail.sunrise).getMinutes(),
                        sunrise_s: getTime(weatherDetail.sunrise).getSeconds(),
                        sunset_h: getTime(weatherDetail.sunset).getHours(),
                        sunset_m: getTime(weatherDetail.sunset).getMinutes(),
                        sunset_s: getTime(weatherDetail.sunset).getSeconds(),
                        f_morn: Math.floor(weatherDetail.feels_like.morn),
                        f_day: Math.floor(weatherDetail.feels_like.day),
                        f_eve: Math.floor(weatherDetail.feels_like.eve),
                        f_night: Math.floor(weatherDetail.feels_like.night),
                        pressure: weatherDetail.pressure,
                        humidity: weatherDetail.humidity,
                        w_speed: weatherDetail.wind_speed,
                        g_weather: weatherDetail.weather[0].main,
                        s_weather: weatherDetail.weather[0].description,
                        pop: weatherDetail.pop,
                        uv: weatherDetail.uvi,
                        clouds: weatherDetail.clouds
                    }}></WeatherCard>
            )
        setTheContent(content);
    }


    return (
        <div className="myWeatherChart flex-wrap md:-mx-3">
        <br></br>
        <div className="border-b p-3 justify-between items-center">
            {the_content}
        </div>

            <br></br>
            <br></br>
            <div>
                <p> <span className="font-bold" > Sunrise time: </span>{details.sunrise_h}:{details.sunrise_m}:{details.sunrise_s} </p>
                <p> <span className="font-bold" > Sunset time: </span>{details.sunset_h}:{details.sunset_m}:{details.sunset_s} </p>
                <p> <span className="font-bold" > Morning temperature: </span>{details.f_morn} </p>
                <p> <span className="font-bold" > Day temperature: </span>{details.f_day} </p>
                <p> <span className="font-bold" > Evening temperature: </span>{details.f_eve} </p>
                <p> <span className="font-bold" > Night temperature: </span>{details.f_night} </p>
                <p> <span className="font-bold" > Atmospheric pressure on the sea level: </span>{details.pressure} </p>
                <p> <span className="font-bold" > Humidity (%): </span>{details.humidity} </p>
                <p> <span className="font-bold" > Wind Speed: </span>{details.w_speed} </p>
                <p> <span className="font-bold" > General Weather Description: </span>{details.g_weather} </p>
                <p> <span className="font-bold" > Specific Weather Description: </span>{details.s_weather} </p>
                <p> <span className="font-bold" > Probability of precipitation: </span>{details.pop} </p>
                <p> <span className="font-bold" > Midday UV index: </span>{details.uv} </p>
                <p> <span className="font-bold" > Cloudiness (%): </span>{details.clouds} </p>
            </div>
        </div>
    )
}
export default Weather;