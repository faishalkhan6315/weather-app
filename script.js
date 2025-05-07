const apiKey ="91c50c12dbabc204954fab1e17ddb5dc";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"% ";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    searchBox.value = "";
}
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
