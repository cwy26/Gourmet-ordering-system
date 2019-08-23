<template>
  <div class="weather">
    <!-- <iframe class="iframe-weather" name="weather_inc" :src="url"  frameborder="0"  scrolling="no"></iframe> -->
    <!-- <span>{{city}}</span> -->
    <span class="wea">{{weather}}</span>
    <span class="week">{{week}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return{
      url:"",
      city:"",
      weather:"",
      week:""
    }
  },
  methods: {
    loadWeather() {
      this.axios.get('https://www.tianqiapi.com/api/').then(res=>{
        var obj=res.data;
        this.city=obj.city;
        var weatherObj=res.data.data;
        this.weather=weatherObj[0].wea;
        this.week=weatherObj[0].week;
      })
    }
 },
   created() {
    this.loadWeather();
  },
}
</script>
<style >
  .weather{
    position: relative;
    z-index: 11;
    left: 40px;
    margin-top: 5px;
  }
  
  .weather .iframe-weather{
    width: 98%;
    height: 100%;   
  }
  
  .weather .iframe-weather .box-base{
    z-index: 11; 
    height: 50px; 
  }
 .box-hd .box-t-l{
    font-size:20px !important; 
  }
.weather .iframe-weather .box-base label{
    margin-right: 10px !important;
  }
.weather .wea{
  padding-right: 5px;
}
</style>

