// APOD API
function getAPI() {
    const requestUrl = 'https://api.nasa.gov/planetary/apod';
}
//Launch API
function getLaunchData() {
    const requestUrl = 'https://lldev.thespacedevs.com/2.2.0/launch/upcoming/';
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(launches){
        console.log(launches)
    }) 
}

getLaunchData();