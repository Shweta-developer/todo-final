import React, { useState,useEffect } from "react";
import cold from "./cold.png";
import hot from "../img/hot.gif";

const api = {
  key: '6d5703868f66c7c2f597620596a9040a',
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("Auckland");
  const [weather, setWeather] = useState({});
  useEffect(() => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });

}, [])
  

  return (
    <div
      className={
         "Weather"
      }
    >
      <main>
        
        
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>
            </div>
            
            <div className="weather-container">
           { weather.main.temp > 18
            ? <div><img src={hot} height='20%' width='30%' style={{alignContent:'center'}}/></div>
            : 
                <div><img src={cold} height='20%' width='30%' style={{alignContent:'center'}}/></div>}
            
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Weather;