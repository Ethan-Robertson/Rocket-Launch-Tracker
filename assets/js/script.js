
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
            console.log(launch);
            console.log(launch.name, launch.image)
         const card = document.querySelector(".card")
            card.querySelector(".card-title").textContent = launch.name
            card.querySelector(".card-img-top").src = launch.image
        }
    }) ;
}

getLaunchData();

// 