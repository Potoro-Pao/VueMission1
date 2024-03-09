// src/stores/mapStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_API } = import.meta.env;
export default defineStore('mapStore', {
  state: () => ({
    country: null,
    city: null,
    latitude: null,
    longitude: null,
    bookPhoto: null,
    bookTitle: null,
    products: null,
  }),
  actions: {
    updateLocation({
      country, city, latitude, longitude,
    }) {
      this.country = country;
      this.city = city;
      this.latitude = latitude;
      this.longitude = longitude;
    },
    async getRandom() {
      try {
        // 確保產品加載
        if (!this.products) {
          await this.getProducts();
        }
        // 產品以加載可以繼續隨機選取產品
        this.getRandomBooks();
        const res = await axios.get('https://randomuser.me/api/');
        if (res.data && res.data.results && res.data.results.length > 0) {
          const { country, city } = res.data.results[0].location;
          await this.getCountryCoordinates(country, city);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCountryCoordinates(country, city) {
      const url = `https://nominatim.openstreetmap.org/search?country=${country}&city=${city}&format=json&limit=1`;
      try {
        const response = await axios.get(url);
        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          this.updateLocation({
            country,
            city,
            latitude: parseFloat(lat),
            longitude: parseFloat(lon),
          });
        }
      } catch (error) {
        console.error('獲取座標失敗:', error);
      }
    },
    async getProducts() {
      try {
        const api = `${VITE_URL}/api/${VITE_API}/products/all`;
        const response = await axios.get(api);
        this.products = response.data.products;
      } catch (error) {
        console.error('獲取產品失敗:', error);
        this.products = [];
      }
    },

    getRandomBooks() {
      if (this.products && this.products.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.products.length);
        this.bookPhoto = this.products[randomIndex].imageUrl;
        this.bookTitle = this.products[randomIndex].title;
      } else {
        console.log('產品為空值');
      }
    },
  },
});
