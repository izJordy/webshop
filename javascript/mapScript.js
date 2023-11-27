var map = L.map('map').setView([51.285923589249514, 4.414530446245566], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.285923589249514, 4.414530446245566]).addTo(map);
marker.bindPopup("Board Elegance").openPopup();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  window.open("https://youtu.be/dQw4w9WgXcQ?si=i91z5Gd-dYToth9c"); 
});