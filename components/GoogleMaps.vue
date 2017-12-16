<template>
    <div class="map-wrapper" :class="{ 'revealed': revealed}">
        <div class="overlay">
            <div class="container grid-xl">
                <div class="columns">
                    <div class="column col-12">
                        <div class="address">
                            115th G. Benkovski St.<br>
                            4400 Pazardzhik, Bulgaria <br><br>
                            <a href='#' class='btn btn-sm btn-primary'>Directions</a>
                            <a v-on:click.prevent="reveal" class='btn btn-sm btn-link'>Hide</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <googlemaps-map ref="map" class="map" :center.sync="center" :zoom.sync="zoom" :options="mapOptions">
            <googlemaps-marker title="Paris" :position="{ lat: 42.20364, lng: 24.330489 }"></googlemaps-marker>
        </googlemaps-map>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        revealed: false,
        center: {
          lat: 42.20364,
          lng: 24.330489,
        },
        userPosition: null,
        zoom: 14,
        mapOptions: {
          mapTypeControlOptions: {
            mapTypeIds: ['ROADMAP']
          },
          streetViewControl: false,
          styles: [{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#9853ff"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#263238"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#40545e"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#20292f"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#263238"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#222e33"},{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#29363d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2e3d43"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#2f3e44"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1a2124"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}]
        }
      }
    },
    methods: {
      reveal: function () {
        this.revealed = true;
      }
    },
    mounted: function () {
      this.$nextTick(() => {
        console.log('render');
      });
    }
  }
</script>