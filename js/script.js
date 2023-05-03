//slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("norseimg");
  if (n > slides.length - 1) {
    slideIndex = 0
  }
  if (n < 0) {
    slideIndex = slides.length - 1
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

var slideIndex = 0;
showSlides(slideIndex);

//map
var map;

function initMap(){
  const location = { lat: 37.548940, lng: -122.049650 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 11,
  });
  const icon = {
    url: "docs/assets/dumpling.png",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0)
  };
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Pan Fried Dumplings",
    animation: google.maps.Animation.DROP,
    icon: icon
  });
  
  //animations
  marker.addListener("mouseover", () => {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){ marker.setAnimation(null); }, 700);
  });
  var infoWindow = new google.maps.InfoWindow({
    position: location,
    content: marker.getTitle()
  });
  marker.addListener("click", () => {
    if (infoWindow.opened){
      infoWindow.close();
      infoWindow.opened = false;
    } else {
      infoWindow.open(marker.getMap(), marker);
    }
  });
}

initMap();