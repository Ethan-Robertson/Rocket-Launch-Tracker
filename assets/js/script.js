
// APOD API
function getAstronomyImage() {
    const requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=b42EJNM4mHurfnOSldM0PPgzarPZgdean7wvURrJ';
    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        const{url, title, explanation} = data
        console.log(url, title, explanation)
        const card = document.querySelector(".card-astronomy")
            card.querySelector(".url").src = url
            card.querySelector(".title-astronomy").textContent = title
            card.querySelector(".explanation").textContent = explanation
        }
    )}

getAstronomyImage();

// Launch API
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

var floatingButtonContainer = document.querySelector('.floating-button');
var scrollY = window.scrollY

window.addEventListener('scroll', function() {
    scrollY = window.scrollY;
    floatingButtonContainer.computedStyleMap.top = scrollY + window.innerHeight - 150 + 'px';
});

let mybutton = document.getElementById(".floating-button");

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

