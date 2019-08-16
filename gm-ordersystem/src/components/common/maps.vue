<template>
  <div class="maps">
    <div class="mapsHeight">
    <!-- 搜索框 -->
   <el-amap-search-box class="search-box" 
   :search-option="searchOption" :on-search-result="onSearchResult">
   </el-amap-search-box>
    <el-amap vid="amapDemo" 
    :center="center" 
    :zoom="zoom" 
    :plugin="plugin" 
    class="amap-demo" 
    :events="events" >
      <el-amap-marker v-for="(marker,i) in markers" :key="i" :position="marker" >
      </el-amap-marker>
    </el-amap>
    <div class="toolbar">
      <span v-if="loaded" >
        当前位置:{{address}}
      </span>
      <span v-else>
        正在定位
      </span>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let self = this;
    return {
      markers: [
        [121.59996, 31.197646],
        [121.40018, 31.197622],
        [121.69991, 31.207649]
      ],
      searchOption: {
        city: "全国",
        citylimit: true
      },
      zoom: 100,
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      address: "",
      loaded: false,
      events: {
        click(e) {
          // console.log(e);
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;
          self.addMarker();
          // console.log(lng,lat);

          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
          });
          geocoder.getAddress([lng, lat], function(status, result) {
            if (status === "complete" && result.info === "OK") {
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          });
        }
      },
      //定位
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  // 这里通过高德 SDK 完成。
                  var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                  });
                  geocoder.getAddress([self.lng, self.lat], function(
                    status,
                    result
                  ) {
                    if (status === "complete" && result.info === "OK") {
                      if (result && result.regeocode) {
                        self.address = result.regeocode.formattedAddress;
                        self.$nextTick();
                      }
                    }
                  });
                  self.$nextTick();
                }
              });
            }
          }
        }
      ]
    };
  }, //return end
  watch: {
    address() {
      console.log(`address变为:${this.address}`);
      this.sendPosi();
    }
  },
  methods: {
    // 向父元素传递地址
    // 当地址发生变化的时候，自动向父元素发送
    sendPosi() {
      this.$emit("changeLocation", this.address);
    },
    addMarker: function() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.lng = center.lng;
        this.lat = center.lat;
        this.center = [center.lng, center.lat];

        // 这里通过高德 SDK 完成。
        var geocoder = new AMap.Geocoder({
          radius: 1000,
          extensions: "all"
        });
        geocoder.getAddress([this.lng, this.lat], (status, result) => {
          if (status === "complete" && result.info === "OK") {
            if (result && result.regeocode) {
              this.address = result.regeocode.formattedAddress;
              console.log(this.address);
              this.$nextTick();
            }
          }
        });
      }
    }
  }
};
</script>
<style>
.maps {
  position: relative;
}
.maps .mapsHeight{
  height: 100%;
}
.maps .search-box {
  position: absolute;
  top: 10px;
  left: 10px;
}

</style>
