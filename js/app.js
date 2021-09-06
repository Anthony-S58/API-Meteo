// on insère la key API
const APIKEY = '' ;
// on récupère l'url dans la documentation du site 
let url = `https://api.openweathermap.org/data/2.5/weather?q=Nevers&appid=${APIKEY}`;

fetch(url).then( (response) => response.json().then((data) => console.log(data))
);