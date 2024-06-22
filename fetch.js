let cities_name = [
  { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
  { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  { name: "Allahabad", latitude: 33.5651, longitude: 73.0169 },
  { name: "Faisalabad", latitude: 31.4504, longitude: 73.135 },
  { name: "Rawalpindi",latitude: 33.5651,longitude: 73.0169},

{
    name: "Multan",
    latitude: 30.1575,
    longitude: 71.5249
},

{
    name: "Hyderabad",
    latitude: 25.3969,
    longitude: 68.3772
},

];

// console.log(cities_name );
var parent_box = document.getElementById("parent_box")
var display_weather = document.getElementById("display_weather");
var city_name_drope_down = document.getElementById("city_name_drope_down");
var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
// __________________________________(event listener (work when user selet city from dropdown))_____________________________________________

city_name_drope_down.addEventListener("change", function () {

  parent_box.style.display='block'

  cities_name.forEach(function (data, index) {    //here data refer city name array define in same js file 

    if (data.name == city_name_drope_down.value) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=c153479685c47f1b34a83591f3b1acbe`
      )
        .then((res) => res.json())

        .then((data) => {  //here data refer the object fect with the help of API
          console.log(data);
          var tem_in_celsius = data.main.temp - 272.15;
          var mini_tem_in_celsius = data.main.temp_min-272.15
          var max_tem_in_celsius = data.main.temp_max-272.15
          var real_feel_tem_in_celsius = data.main.feels_like-272.15
          var sunrise_time = (data.sys.sunset/1000/60/60/24)-24
          var d= new Date(); 
console.log(sunrise_time);


            var a = 
            `
            <h3 id="date"> ${days[d.getDay()]} __ ${d.getHours()}:${d.getMinutes()} __ ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}</h3>
            <br><br>
            
            <h2 id="country_name"> ${data.name}, Pakistan = ${tem_in_celsius.toFixed(2)} <sup>o</sup></h2>   

            <br><br>
            <h3> Min : ${mini_tem_in_celsius.toFixed(2)} <sup>o</sup></h3>
            <h3> Max : ${max_tem_in_celsius.toFixed(2)} <sup>o</sup></h3>
            <h3> Real Feel : ${real_feel_tem_in_celsius.toFixed(2)}<sup>o</sup></h3>
            <h3> Humidity : ${data.main.humidity}%
            <h3> Weather : ${data.weather[0].description}</h3>             
             `
          display_weather.innerHTML = a;

          console.log(data.weather[0].description);

        });
    }

  });

});


// var d= new Date()
// console.log(d.getTime(6/22/2024));