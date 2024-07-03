console.log('HEllo Jee Babbar');

const API_KEY="939ae3f78f6c35d60762d5a5abde089f";
function renderWeatherInformation(data)
{
        let newPara=document.createElement('p');
        newPara.textContent=`${data?.main?.temp.toFixed(2)} C`;
    
        document.body.appendChild(newPara);
}
async function fetchWeatherDetails(){
    // let latitude=15.3333;
    // let longitude=74.083;
    try{

        let city="goa";
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data =await response.json();
        console.log('Weather dara:->',data);
    
        
        renderWeatherInformation(data);

    }
    catch(err){
        //handle error here

    }    
}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}

async function getCustomWeatherDetails(){

    try{
        let lat = 1544.6333;
        let lon = 18.3333;

        let result = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        let data = await result.json();
        console.log(data);
    }
    catch(err){
        console.log('Bad request',err);
    }

}

function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
      else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
      }
  
      // console.log("Current Tab", currentTab);
    }
}
  
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geoLocation Support");
    }
}
  
function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
  
    console.log(lat);
    console.log(longi);
}