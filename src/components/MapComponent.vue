<template>
  <div ref="mapContainer">
    <p>Vue-Leaflet Demo: Dynamic Location Update</p>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
import { mapActions, mapState } from 'pinia';
import mapStore from '../stores/mapStore';

export default {
  computed: {
    ...mapState(mapStore, ['latitude', 'longitude', 'country', 'city', 'bookPhoto', 'bookTitle']),
  },
  data() {
    return {
      map: null,
      marker: null,
      intervalId: null, // 用于存储 setInterval 的 ID
    };
  },
  mounted() {
    this.intervalId = setInterval(this.getRandom, 10000); // 每10秒更新一次位置信息
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // 组件销毁时清除定时器
    }
  },
  watch: {
    latitude: {
      handler(newVal, oldVal) {
        if (!this.map && newVal !== null && this.longitude !== null) {
          this.getRandom();
          this.getMap();
        } else if (this.map && newVal !== oldVal) {
          this.updateMap();
        }
      },
      immediate: true,
    },

    longitude: {
      handler(newVal, oldVal) {
        if (!this.map && newVal !== null && this.latitude !== null) {
          this.getRandom();
          this.getMap();
        } else if (this.map && newVal !== oldVal) {
          this.updateMap();
        }
      },
      immediate: true, // 立即触发一次，确保初始值被处理
    },
  },
  methods: {
    ...mapActions(mapStore, ['getRandom']),
    // getRandom() {
    //   axios
    //     .get('https://randomuser.me/api/')
    //     .then((res) => {
    //       if (res.data && res.data.results && res.data.results.length > 0) {
    //         this.country = res.data.results[0].location.country;
    //         this.city = res.data.results[0].location.city;
    //         this.getCountryCoordinates(this.country);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    // getCountryCoordinates(countryName) {
    //   const cityName = this.city;
    //   const url = `https://nominatim.openstreetmap.org/search?country=${countryName}&city=${cityName}&format=json&limit=1`;
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       if (response.data && response.data.length > 0) {
    //         const { lat, lon } = response.data[0];
    //         this.latitude = parseFloat(lat);
    //         this.longitude = parseFloat(lon);
    //         // 确保地图在这里初始化，确保有数据后才初始化或更新地图
    //         if (!this.map) {
    //           this.getMap(); // 地图未初始化，则初始化地图
    //         }
    //         this.updateMap(); // 更新地图视图和标记
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('获取坐标失败:', error);
    //     });
    // },
    secureMap() {
      if (!this.map && this.latitude != null && this.longitude != null) {
        this.getMap();
      } else {
        this.getRandom();
        this.getMap();
      }
    },
    getMap() {
      this.map = L.map(this.$refs.mapContainer).setView(
        [this.latitude, this.longitude],
        8,
      );
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      this.marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
      this.marker.bindPopup(`${this.city}, ${this.country}`).openPopup();
    },
    updateMap() {
      this.map.setView([this.latitude, this.longitude], 8);
      this.marker.setLatLng([this.latitude, this.longitude]);
      const imageUrl = this.bookPhoto;
      const popupContent = `
    <div style="display: flex; align-items: center;">
      <div style="flex: 1;">
        <img src="${imageUrl}" alt="Image" style="width: 100px; height: auto;">
      </div>
      <div style="flex: 2; margin-left: 10px;">
        <p>SomeOne from ${this.city}, ${this.country} <br> bought ${this.bookTitle} with free delivery</p>
      </div>
    </div>`;
      this.marker.getPopup().setContent(popupContent).openPopup();
    },
  },
};
</script>
