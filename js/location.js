var x = document.getElementById("demo");
let latitude, longitude;

function onReady() { 
   getLocation();
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    var x = document.getElementById("demo");
    x.innerText = "Latitude: " + position.coords.latitude + "\n"+
    "Longitude: " + position.coords.longitude;
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

if (document.readyState !== 'loading') { 
	setTimeout(onReady, 0); 
} else { 
	document.addEventListener('DOMContentLoaded', onReady) 
}