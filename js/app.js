// on insère la key API
const APIKEY = '' ;
// on récupère l'url dans la documentation du site 
// units=metric correspond à la récupération de la température en celsius

let url = `https://api.openweathermap.org/data/2.5/weather?q=Nevers&units=metric&lang=fr&appid=${APIKEY}`;

fetch(url).then( (response) => response.json().then((data) => 
    {console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
        document.querySelector('.humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    })
).catch(err => console.log('Erreur : ' + err));