<template>
  <div class="order_index" @click="hiseMore">
    <!-- 第一层 背景图 -->
    <div class="floor1">
      <ul class="top_fixed">
        <li class="top_location">
          <!-- 定位图标 -->
          <i class="iconfont icon-xinaixin" @click="goMaps"></i>
          <!-- 点位地址 -->
          <weather class="myweather"></weather>
          <maps @changeLocation="changeLocation" style="display:none"></maps>
          <span>{{position}}</span>
        </li>
        <li class="top_notification">
          <!-- 信息提醒图标 -->
          <i class="iconfont icon-xinaixin"></i>
          <!-- 信息提醒数字 -->
          <span class="top_number">1</span>
        </li>
        <li class="top_more">
          <!-- 更多图标 -->
          <i class="iconfont icon-wenjian" @click.stop="showMore"></i>
          <ul class="top_more_showMore" :class="show" >
            <li :class="show">
              <!-- 扫一扫 -->
              <i class="iconfont icon-xinaixin"></i>
              <span>扫一扫</span>
            </li>
            <li>
              <!-- 付款码 -->
              <i class="iconfont icon-xinaixin"></i>
              <span>付款码</span>
            </li>
            <li>
              <!-- 开发票 -->
              <i class="iconfont icon-xinaixin"></i>
              <span>开发票</span>
            </li>
          </ul>
        </li>
      </ul>
      <div class="top_user_msg">
        <!-- 头像 -->
        <div class="top_user_img">
        <img src="./../assets/imgs/img.png" alt="">          
        </div>
        <div class="top_user_others">
        <!-- 时间 -->
        <span>{{times}}</span>,
        <!-- 用户名 -->
        <span>zala</span>
        <!-- 右侧箭头 -->
        <i class="iconfont icon-pengyouquan" @click="loginMsg"></i>          
        </div>

      </div>
    </div>
    <!--第二层 轮播图  -->
    <div class="floor2">
      <ul class="ulCarousel">
        <li class="liCarousel">
          <img src="./../assets/imgs/tmp1532592561_1734504_s.jpg" alt="">
        </li>
      </ul>
    </div>
    <!-- 第三层 点/下单 -->
    <div class="floor3">
      <div class="left_btns">
        <div class="btns_msg">
          <span>排队</span>          
        </div>
        <div class="btns_img">
          <img src="./../assets/imgs/tmp1538293878_1734504_s.jpg" alt="">
        </div>
      </div>
      <div class="right_btns">
        <div class="btns_msg">        
          <span>点单</span>
        </div>
        <div class="btns_img">
          <img src="./../assets/imgs/tmp1538293878_1734504_s.jpg" alt="">
        </div>
      </div>
      <div class="right_btns">
        <div class="btns_msg">        
          <span>预定</span>
        </div>
        <div class="btns_img">
          <img src="./../assets/imgs/tmp1538293878_1734504_s.jpg" alt="">
        </div>
      </div>
    </div>
      <!-- 第四层 名菜推荐 -->
      <div class="floor4">
        <div class="signature_dishes">
          <img src="./../assets/imgs/tmp1532592561_1734504_s.jpg" alt="">
        </div>
        <div class="dishes_msg">
          <span>真香</span>
        </div>
      </div>
      <div class="floor4">
        <div class="signature_dishes">
          <img src="./../assets/imgs/tmp1532592561_1734504_s.jpg" alt="">
        </div>
        <div class="dishes_msg">
          <span>真香</span>
        </div>
      </div>
      <!-- 底部优惠卷     -->
      <div class="coupon">
        <i class="iconfont icon-xinaixin"></i>
      </div>

  </div>
</template>
<script>
import maps from './common/maps.vue'
import weather from './common/weather'
export default {
  data(){
    return{
      mywidth:window.innerWidth,
      show:{
        showIn:true,
        showOut:false        
      },
      times:"",
      position:"",
    }
  },
  methods: {
    //跳转
    goMaps(){
      this.$router.push('/maps');
    },
    changeLocation(posi){
      var city=posi.indexOf("市");
      var province=posi.indexOf("省");
      var loc=posi.slice(province+1,city+1);
      this.position=loc;
    },
    showMore(){
      this.show.showOut=!this.show.showOut;    
    },
    hiseMore(){
      this.show.showOut=false;
    },
    // 获取当前时间
    getCurrentTime(){
      var currentTime=new Date();
      var hours=currentTime.getHours();
      // console.log(hours)
      var data=["早上好呀","下午好呀","晚上好呀"];
      if(hours>=0&&hours<=11){
        this.times=data[0];
      }else if(hours>=12&&hours<=18){
        this.times=data[1];
      }else{
        this.times=data[2];
      }
    },
    loginMsg(){
      console.log(123)
    }
  },
  created() {
    this.getCurrentTime();
  },
  components:{
    maps,
    weather,
  }
}

</script>
<style scoped>
  /* order_index样式 */
  /* 第一层 样式 */
  .order_index .floor1 {
    background-image: url('./../assets/imgs/tmp1532592561_1734504_s.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .order_index .floor1 .top_fixed{
    padding: 0px;
    list-style: none;
    position: relative;
    margin: 0px;
  }
  .order_index .floor1 .top_fixed>li{
    float: left;
    margin: 10px 10px;
  }
  .order_index .floor1 .top_fixed li:not(:first-child){
   margin: 10px 5px;
  }
  .order_index .floor1 .top_fixed li:nth-child(2){
   padding-left:50% ;
  }
  .order_index .floor1 .top_fixed li:nth-child(3){
    position: relative;
    margin-left: 35px;
  }
  .order_index .floor1 .top_number{
    width: 20px;
    height: 20px;;
    position: absolute;
    top: 3px;
    border: 1px solid red;
    background-color: red;
    border-radius: 50%;
    line-height: 20px;
  }
  /* 解决父元素高度坍塌 */
  .order_index .floor1 .top_fixed:after,.top_more_showMore:after{
    display: block;
    content: "";
    clear: both;
  }
  .order_index .floor1 .top_fixed .top_more .top_more_showMore{
    position: absolute;
    right: 5px;
    list-style: none;
    padding: 0px;
  }

  .order_index  .showIn{
    /* height: 0px; */
    display: none;
  }
  .order_index  .showOut{
    transition: all 1s linear;
    /* height: 50px; */
    display:block;
  }

  .order_index .floor1 .top_fixed .top_more .top_more_showMore>li{
    width: 90px;
    margin-bottom: 10px;
  }
    .order_index .floor1 .top_more_showMore>li span{
      margin-left: 5px;
    }
  .order_index .floor1 .top_fixed .top_more .top_more_showMore li:nth-child(2),.order_index .floor1 .top_fixed .top_more .top_more_showMore li:nth-child(3){
    padding: 0px;
    margin: 0px;
    margin-bottom: 10px;
  }

   
  .order_index .top_user_msg .top_user_img {
    width: 30%;
    height: 30%;
    margin: 0 auto;
  }
  .order_index .top_user_msg .top_user_img img{
    width: 60%;
  }
  .order_index .top_user_msg  .top_user_others{
    height: 50px;
    text-align: center;
  }
  .order_index .top_user_msg  .top_user_others i{
    margin-left: 10px;
  }

  /* 定位和天气 */
  .order_index .weather{
    position: absolute;
    top: 5px;
    width: 50%;
  }
   .order_index .weather .iframe-weather{
     width: 100%;
     padding: 20px;
   }
  /* 第二层 轮播图样式 */
  .order_index .floor2 .ulCarousel{
    margin:10px 15px;
    padding: 0px;
    list-style: none;

  }
  .order_index .floor2 .ulCarousel img{
    width: 100%;
    border: 1px solid transparent;
    border-radius: 5px;   
  }
  /* 第三层 点/下单 */
  .order_index .floor3{
    display: flex;
    justify-content: space-around;
  }
  .order_index .floor3 .left_btns,.order_index .floor3 .right_btns{
    background-color: #fff;
    box-shadow: 3px 3px 3px rgb(240, 240, 240);
    border: 1px solid transparent;
    border-radius: 5px;
  }
  .order_index .floor3 .btns_img{
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
  .order_index .floor3 .btns_img img{
    width: 100%;
    height: 100%;
  }
  /* 第四层 推荐菜 */
  .order_index .floor4 {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgb(240, 240, 240);
    border: 1px solid transparent;
    border-radius: 5px;
    margin-top: 5%;    
  }
  .order_index .floor4 .signature_dishes{
    width: 60%; 
  }
  .order_index .floor4 .signature_dishes img{
    width: 100%;
  }
  /* 底部优惠劵 */
  .order_index  .coupon{
    position: fixed;
    bottom: 100px;
    right: 15px;
    z-index: 10;
    color: red;
  }
</style>

