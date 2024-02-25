<template>
  <div ref="mapContainer" style="height: 600px; width: 800px">
    <p>Vue-Leaflet Demo: Adding Watercolor Layer in mounted</p>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  mounted() {
    // 在组件挂载后初始化地图
    const map = L.map(this.$refs.mapContainer).setView([48.1391, 11.5802], 13);

    // 初始化 watercolor 图层
    // const watercolor = L.tileLayer(
    //   'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}',
    //   {
    //     attribution:
    //       'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     subdomains: 'abcd',
    //     minZoom: 1,
    //     maxZoom: 16,
    //     ext: 'png',
    //   },
    // );
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });

    osm.addTo(map);
    // 添加一个标记
    const marker = L.marker([48.1391, 11.5802]).addTo(map);

    // 为标记添加一个弹出窗口
    marker.bindPopup('Johanniskirche, Munich').openPopup();
  },
};
</script>
