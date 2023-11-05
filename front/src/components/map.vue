<template>
    <div  id="map" class="leaflet-map"></div>
  </template>
  
  <script setup>

  
import L from 'leaflet'
import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
// Initialize the map 
onMounted(()=>{
  const container = document.getElementById('map')
  if(container){
    var map = L.map('map').setView([30.427755,-9.598107], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
addMarker("hello",map);

  }
 

})
let addMarker=(coordonnees,map)=>{

   // var marker = L.marker([30.427755,-9.598107]).addTo(map);
    var myIcon = L.icon({
    iconUrl: '../src/assets/marker.png',
    iconSize: [50, 50],
   /*  iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94] */
});

L.marker([30.427755,-9.598107], {icon: myIcon}).addTo(map);


}

</script >
<style>
#map { height:100vw; }
  </style>
  