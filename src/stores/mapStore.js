// import { defineStore } from 'pinia';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';

// // Changed from named export to default export
// export default defineStore('mapStore', {
//   state: () => ({
//     map: null,
//     marker: null,
//     intervalId: null,
//     country: null,
//     city: null,
//     latitude: null,
//     longitude: null,
//   }),
//   actions: {
//     getRandom() {
//       axios.get('https://randomuser.me/api/').then((res) => {
//         this.country = res.data.results[0].location.country;
//         this.city = res.data.results[0].location.city;
//         this.getCountryCoordinates(this.country);
//       });
//     },
//     getCountryCoordinates(countryName) {
//       const url = `https://nominatim.openstreetmap.org/search?country=${countryName}&format=json&limit=1`;
//       axios.get(url).then((response) => {
//         if (response.data && response.data.length > 0) {
//           const { lat, lon } = response.data[0];
//           this.latitude = parseFloat(lat);
//           this.longitude = parseFloat(lon);
//           this.updateMap();
//         }
//       });
//     },
//     initializeMap(mapContainer) {
//       if (!this.map) {
//         this.map = L.map(mapContainer).setView([this.latitude, this.longitude], 8);
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(this.map);
//         this.marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
//       }
//       this.updateMap();
//     },
//     updateMap() {
//       if (this.map && this.latitude && this.longitude) {
//         this.map.setView([this.latitude, this.longitude], 8);
//         if (this.marker) {
//           this.marker.setLatLng([this.latitude, this.longitude]);
//           this.marker.getPopup().setContent(`${this.city}, ${this.country}`).openPopup();
//         } else {
//           this.marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
//           this.marker.bindPopup(`${this.city}, ${this.country}`).openPopup();
//         }
//       }
//     },
//     startLocationUpdate() {
//       this.getRandom();
//       this.intervalId = setInterval(this.getRandom, 10000);
//     },
//     stopLocationUpdate() {
//       if (this.intervalId) {
//         clearInterval(this.intervalId);
//       }
//     },
//   },
// });
