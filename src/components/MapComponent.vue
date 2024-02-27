<template>
  <div ref="mapContainer">
    <p>Vue-Leaflet Demo: Dynamic Location Update</p>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

export default {
  data() {
    return {
      map: null,
      marker: null,
      intervalId: null, // 用于存储 setInterval 的 ID
      country: null,
      city: null,
      latitude: null,
      longitude: null,
    };
  },
  mounted() {
    this.getRandom(); // 初始获取一次位置信息
    this.intervalId = setInterval(this.getRandom, 10000); // 每10秒更新一次位置信息
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // 组件销毁时清除定时器
    }
  },
  methods: {
    getRandom() {
      axios.get('https://randomuser.me/api/').then((res) => {
        this.country = res.data.results[0].location.country;
        this.city = res.data.results[0].location.city;
        // 调用方法获取国家的经纬度
        this.getCountryCoordinates(this.country);
      });
    },
    // 新增方法：获取国家的经纬度
    getCountryCoordinates(countryName) {
      const url = `https://nominatim.openstreetmap.org/search?country=${countryName}&format=json&limit=1`;
      axios.get(url)
        .then((response) => {
          if (response.data && response.data.length > 0) {
            const { lat, lon } = response.data[0];
            // 更新经纬度
            this.latitude = parseFloat(lat);
            this.longitude = parseFloat(lon);
            if (!this.map) {
              this.getMap(); // 如果地图未初始化，则初始化地图
            } else {
              this.updateMap(); // 如果地图已初始化，则更新地图视图和标记
            }
          }
        });
    },
    getMap() {
      this.map = L.map(this.$refs.mapContainer).setView([this.latitude, this.longitude], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      this.marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
      this.marker.bindPopup(`${this.city}, ${this.country}`).openPopup();
    },
    updateMap() {
      this.map.setView([this.latitude, this.longitude], 8);
      this.marker.setLatLng([this.latitude, this.longitude]);
      this.marker.getPopup().setContent(`${this.city}, ${this.country}`).openPopup();
    },
  },
};
</script>
