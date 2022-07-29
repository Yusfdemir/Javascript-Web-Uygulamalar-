const url='https://api.openweathermap.org/data/2.5/weather?';
const key='91e4e47f58476ef7f1434f25975b0fe5';
const url2='http://api.openweathermap.org/geo/1.0/direct?';

const setQuery=(event)=>{
    if(event.keyCode=='13'){
        getResult(searchbar.value);
        searchbar.value="";
    }
    
}

const getResult=(cityName)=>{
    let query=`${url2}q=${cityName}&limit=1&appid=${key}`;
    let lat,lon;
     fetch(query)
     .then(query2 =>{
         return query2.json()
     })
     .then(findLatLon=>{
            lat=findLatLon[0].lat;
            lon=findLatLon[0].lon;
            let link=`${url}lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=tr`;
            fetch(link)
            .then(weather=>{
                return weather.json();
            })
            .then(displayResult)
     })
    
}

 const displayResult=(result)=>{ 
    let city=document.querySelector(".city");
    city.innerText=`${result.name},${result.sys.country}`;

    let temp=document.querySelector(".temp");
    temp.innerText=`${Math.round(result.main.temp)}°C`

    let desc=document.querySelector(".desc");
    desc.innerText=result.weather[0].description[0].toUpperCase()+result.weather[0].description.substring(1);

    let minmax=document.querySelector(".minmax");
    minmax.innerText=`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
 }

const searchbar=document.querySelector("#searchBar");
searchbar.addEventListener("keypress",setQuery);