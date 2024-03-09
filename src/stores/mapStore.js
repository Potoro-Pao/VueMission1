// src/stores/mapStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('mapStore', {
  state: () => ({
    country: null,
    city: null,
    latitude: null,
    longitude: null,
    bookPhoto: null,
    bookTitle: null,
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
        const res = await axios.get('https://randomuser.me/api/');
        if (res.data && res.data.results && res.data.results.length > 0) {
          const { country, city } = res.data.results[0].location;
          await this.getCountryCoordinates(country, city);
          this.getBooks();
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
        console.error('获取坐标失败:', error);
      }
    },

    getBooks() {
      const booksphotos = ['https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/F01/722/67/F017226772.jpg&v=60be1cb3k&w=348&h=348', 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/F01/156/62/F011566277.jpg&v=5dc17b1dk&w=348&h=348', 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/F01/986/47/F019864769.jpg&v=64185ee5k&w=348&h=348'];
      const booktitles = ['Simulacron3', 'Abhorsen', 'Eragon'];
      const randomIndex = Math.floor(Math.random() * booksphotos.length);
      this.bookPhoto = booksphotos[randomIndex];
      this.bookTitle = booktitles[randomIndex];
    },
  },
});
