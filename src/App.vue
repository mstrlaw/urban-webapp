<template>
  <div id="app">
    <GmapMap
      ref="map"
      :center="{
        lat: lat,
        lng: lng
      }"
      :zoom="13"
      :options="mapOptions"
      style="width: 100%; height: calc(100vh)"
    >
      <GmapCircle
        :center="{
          lat: lat,
          lng: lng
        }"
        :radius="Math.sqrt(10) * 50"
        :options="circleStyle"
      />
    </GmapMap>
    <!--button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button-->
  </div>
</template>

<script>
import mapStyles from '@/data/mapStyles';

const interpolateColor = (color1, color2, factor) => {
  const newColor1 = color1.match(/\d+/g).map(Number);
  const newColor2 = color2.match(/\d+/g).map(Number);
  const result = newColor1.slice();
  for (let i = 0; i < 3; i += 1) {
    result[i] = Math.round(result[i] + factor * (newColor2[i] - newColor1[i]));
  }
  return result;
};

export default {
  name: 'App',
  data: () => ({
    lat: 38.735282,
    lng: -9.141095,
    red: 'rgb(213, 0, 0)',
    green: 'rgb(0, 200, 83)',
    interval: null,
    sentiment: 0,
    mapOptions: {
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      disableDefaultUi: false,
    },
  }),
  mounted() {
    this.$refs.map.$mapPromise.then((map) => {
      map.setOptions({ styles: mapStyles });
    });
    this.interval = setInterval(() => {
      const value = Math.floor(Math.random() * (10 + 1));
      this.sentiment = Math.round(value / 10 * 10) / 10;
    }, 2000);
  },
  computed: {
    color() {
      const color = interpolateColor(this.red, this.green, this.sentiment);
      return `rgb(${color.join(',')})`;
    },
    circleStyle() {
      return {
        strokeColor: this.color,
        strokeOpacity: 0.7,
        strokeWeight: 4,
        fillColor: this.color,
        fillOpacity: 0.9,
      };
    },
  },
};
</script>

<style lang="scss">

</style>
