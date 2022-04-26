console.log('d')
let weather = {
    "apiKey": "6e39600b3dbabcfa770f20c29ed140a7",
    fetchWeather: function(city) {
        fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=
                ${city}
                &appid=${this.apiKey}&units=metric`
            ).then(response => response.json())
            .then(data => this.displayWeather(data));
    },
    displayWeather: function(data) {
        let { name } = data;
        let { icon, description } = data.weather[0];
        let { temp, humidity } = data.main;
        let { speed } = data.wind;
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.card img').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = "Humidity : " + humidity;
        document.querySelector('.wind').innerText = "Speed: " + speed + "km/h ";
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
        console.log(document.querySelector('body'))
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search').value);

    }

}
document.querySelector('.search-box button').addEventListener('click', function() {
    weather.search();
})

document.querySelector('.search').addEventListener("keyup", function(e) {
    if (e.key == 'Enter') {
        weather.search();
    }
})