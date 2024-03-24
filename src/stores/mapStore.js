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
    useExternalLocation: false,
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
        if (!this.products) {
          await this.getProducts();
        }
        this.getRandomBooks();
        const res = await axios.get('https://randomuser.me/api/');
        if (res.data && res.data.results && res.data.results.length > 0) {
          const { country, city } = res.data.results[0].location;
          await this.getCountryCoordinates(country, city);
        }
      } catch (error) {
        //
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
      } catch (e) {
        //
      }
    },
    async getProducts() {
      try {
        const api = `${VITE_URL}/api/${VITE_API}/products/all`;
        const response = await axios.get(api);
        this.products = response.data.products;
      } catch (error) {
        this.products = [];
      }
    },
    async setLocationFromExternal({ country, city }, bookTitle, bookPhoto) {
      this.useExternalLocation = true;
      this.country = country;
      this.city = city;
      await this.setBookPhoto(bookTitle, bookPhoto);
      await this.getCountryCoordinates(country, city);
      await this.getCountryCoordinates(country, city);
    },
    async setBookPhoto(goodsTitle, goodsPhoto) {
      this.bookTitle = goodsTitle;
      this.bookPhoto = goodsPhoto;
    },
    resetuseExternalLocation() {
      setTimeout(() => {
        this.useExternalLocation = false;
      }, 500);
    },

    getRandomBooks() {
      if (this.products && this.products.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.products.length);
        this.bookPhoto = this.products[randomIndex].imageUrl;
        this.bookTitle = this.products[randomIndex].title;
      }
    },
  },
});
