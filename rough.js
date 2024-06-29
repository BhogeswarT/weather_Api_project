// overview of some basic function that we will use in this project 

const API_KEY = "168771779c71f3d64106d8a88376808a";

function renderWeatherInfo(data){
        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

        document.body.appendChild(newPara);

}

async function fetchWeatherDetails() {
    try {
        let city = "vijayawada";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log("weather data:-> ", data);

        renderWeatherInfo(data);  //for updating in UI
    }
    catch (err) {
        console.log("Error Found",err);
    }

}

async function getCustomWeatherDetails() {
    try{
        let longitude = 18.355;
        let latitude = 17.294;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        let data = await result.json();
        console.log(data);
    }
    catch(err){
        console.log("Error Found",err);
    }

}

function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");

    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
           //getFromSessionStorage();
        }
    }
}

function getLocation(){
    if(navigator.getLocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(long);
}