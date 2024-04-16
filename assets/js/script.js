
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
    .then(function(data){
        console.log(data);
        for (let i = 0; i < 1; i++) {
            const launch = data.results[i];
            console.log("launch", launch);
            console.log("pad", launch.pad.location.name)
            console.log("provider", launch.launch_service_provider.name)
            console.log("launch_start", launch.window_start)
            console.log(launch.name, launch.image)
         const card = document.querySelector(".card")
            card.querySelector(".card-title").textContent = launch.name
            card.querySelector(".img-fluid").src = launch.image
            card.querySelector(".provider").textContent = launch.launch_service_provider.name
            card.querySelector(".pad").textContent = launch.pad.location.name
            card.querySelector(".launch_start").textContent = launch.window_start
        }
    }) ;
}

getLaunchData();

// 