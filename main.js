let countrey = document.querySelector(".countery")
let temp = document.querySelector(".temp")
let tempmax = document.querySelector(".tempmax")
let tempmin = document.querySelector(".tempmin")
let sunrise = document.querySelector(".sunrise")
let sunset = document.querySelector(".sunset")
let humidity =document.querySelector(".humidity")
let visibilite = document.querySelector(".visibilite")
let wind = document.querySelector(".wind")
let pressure = document.querySelector(".pressure")
let day1 = document.querySelector(".day1")
let day2 = document.querySelector(".day2")
let day3 = document.querySelector(".day3")
let day4 = document.querySelector(".day4")
let day5 = document.querySelector(".day5")
let day6 = document.querySelector(".day6")
let temp1 = document.querySelector(".temp1")
let temp2 = document.querySelector(".temp2")
let temp3 = document.querySelector(".temp3")
let temp4 = document.querySelector(".temp4")
let temp5 = document.querySelector(".temp5")
let temp6 = document.querySelector(".temp6")

let select = document.querySelector(".select");


async function getcontry() {
    let response = await fetch("https://restcountries.com/v2/all");
    let data = await response.json();
     return data
     
}




async function getData(value) {
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}/next07days?key=NEEQ4JTA6EZ5UXVC8YZ3HAAGN&include=days&elements=humidity,sunrise,sunset,windspeed,visibility,pressure,description,temp,tempmax,tempmin,datetime&unitGroup=metric`);
    let data = await response.json();
     return data ;
}

async function showData(e) {
    let option = e.target.value
    if(option !== "select"){ 
        let data = await getData(option)
        console.log(data)
        console.log(data.days[0])
        countrey.innerText = data.address
        temp.innerText = data.days[0].temp
        tempmax.innerText = data.days[0].tempmax
        tempmin.innerText = data.days[0].tempmin
        sunrise.innerText = data.days[0].sunrise
        sunset.innerText = data.days[0].sunset
        humidity.innerText = data.days[0].humidity
        visibilite.innerText = data.days[0].visibility
        wind.innerText = data.days[0].windspeed
        pressure.innerText = data.days[0].pressure

        day1.innerText = data.days[1].datetime
        day2.innerText = data.days[2].datetime
        day3.innerText = data.days[3].datetime
        day4.innerText = data.days[4].datetime
        day5.innerText = data.days[5].datetime
        day6.innerText = data.days[6].datetime

        temp1.innerText = data.days[1].temp
        temp2.innerText = data.days[2].temp
        temp3.innerText = data.days[3].temp
        temp4.innerText = data.days[4].temp
        temp5.innerText = data.days[5].temp
        temp6.innerText = data.days[6].temp


    }
}


document.addEventListener("DOMContentLoaded" , async function() {
    let data2 = await getcontry();
        data2.forEach((element) => {
        let option = document.createElement("option");
        option.value = element.name;
        option.text = element.name;
        select.appendChild(option);   
    });

    let data = await getData("Algeria")
    countrey.innerText = data.address
    temp.innerText = data.days[0].temp
    tempmax.innerText = data.days[0].tempmax
    tempmin.innerText = data.days[0].tempmin
    sunrise.innerText = data.days[0].sunrise
    sunset.innerText = data.days[0].sunset
    humidity.innerText = data.days[0].humidity
    visibilite.innerText = data.days[0].visibility
    wind.innerText = data.days[0].windspeed
    pressure.innerText = data.days[0].pressure

    day1.innerText = data.days[1].datetime
    day2.innerText = data.days[2].datetime
    day3.innerText = data.days[3].datetime
    day4.innerText = data.days[4].datetime
    day5.innerText = data.days[5].datetime
    day6.innerText = data.days[6].datetime

    temp1.innerText = data.days[1].temp
    temp2.innerText = data.days[2].temp
    temp3.innerText = data.days[3].temp
    temp4.innerText = data.days[4].temp
    temp5.innerText = data.days[5].temp
    temp6.innerText = data.days[6].temp


});

select.addEventListener("change",showData)

