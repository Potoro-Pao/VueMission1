// import {defineStore} from 'pinia';
// import axios from 'axios';

// export default defineStore('mapStore', {
//     state: () =>({
//         map: null,
//       marker: null,
//       intervalId: null, 
//       country: null,
//       city: null,
//       latitude: null,
//       longitude: null,
//     }),
//     actions: {
//         clearIntervalId(){
//             clearInterval(this.intervalId); 
//         },
//         pokeInterval(){
//             this.intervalId = setInterval(this.getRandom, 10000); // 每10秒更新一次位置信息
//         },
//         getRandom() {
//             axios
//               .get('https://randomuser.me/api/')
//               .then((res) => {
//                 if (res.data && res.data.results && res.data.results.length > 0) {
//                   this.country = res.data.results[0].location.country;
//                   this.city = res.data.results[0].location.city;
//                   this.getCountryCoordinates(this.country);
//                 }
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           },
      
//           getCountryCoordinates(countryName) {
//             const cityName = this.city;
//             const url = `https://nominatim.openstreetmap.org/search?country=${countryName}&city=${cityName}&format=json&limit=1`;
//             axios
//               .get(url)
//               .then((response) => {
//                 if (response.data && response.data.length > 0) {
//                   const { lat, lon } = response.data[0];
//                   this.latitude = parseFloat(lat);
//                   this.longitude = parseFloat(lon);
//                   // 确保地图在这里初始化，确保有数据后才初始化或更新地图
//                   if (!this.map) {
//                     this.getMap(); // 地图未初始化，则初始化地图
//                   }
//                   this.updateMap(); // 更新地图视图和标记
//                 }
//               })
//               .catch((error) => {
//                 console.error('获取坐标失败:', error);
//               });
//           },
      
//           getMap() {
//             this.map = L.map(this.$refs.mapContainer).setView(
//               [this.latitude, this.longitude],
//               8,
//             );
//             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//               attribution:
//                 '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//             }).addTo(this.map);
//             this.marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
//             this.marker.bindPopup(`${this.city}, ${this.country}`).openPopup();
//           },
//           updateMap() {
//             this.map.setView([this.latitude, this.longitude], 8);
//             this.marker.setLatLng([this.latitude, this.longitude]);
//             const imageUrl = 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/F01/986/47/F019864769.jpg&v=64185ee5k&w=348&h=348';
//             const popupContent = `
//           <div style="display: flex; align-items: center;">
//             <div style="flex: 1;">
//               <img src="${imageUrl}" alt="Image" style="width: 100px; height: auto;">
//             </div>
//             <div style="flex: 2; margin-left: 10px;">
//               <p>SomeOne from ${this.city}, ${this.country} <br> bought Eragon with free delivery</p>
//             </div>
//           </div>`;
//             this.marker.getPopup().setContent(popupContent).openPopup();
//           },
//         },
    
// })