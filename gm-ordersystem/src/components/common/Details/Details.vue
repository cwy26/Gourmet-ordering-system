<template>
  <div>
    <div> 
      <img src="../../../assets/ds/1.jpg">
      <div class="no_1">
        <Look msg1="安格斯黑金双人餐"></Look> 
        <Look msg="Angus Double Combo"></Look> 
     <div class="s1">
      <img class="img1" src="../../../assets/ds/11.png">
      <img class="img1" src="../../../assets/ds/10.png"> 
      </div>
      <div class="a1">
       <span class="s2">收藏</span>
       <span>{{70}}</span> 
     </div>    
  </div>
    <Look msg="安格斯厚牛培根堡一份+安格斯厚牛芝士堡1份＋麦格鸡4块＋麦辣鸡翅4块＋中杯可口可乐2杯"></Look>
    <p class="p1">查看更多信息
      <img src="../../../assets/ds/xia.png">
       </p>
    </div>
    <div class="cart">
        <span class="right_a"> <Look msg="单价¥ 89"></Look>
          <img src="../../../assets/ds/20.png">
          <span class="right_b">1</span>
          <img class="right_c" src="../../../assets/ds/21.png">
        </span>
      <hr>
       <Look msg="合计¥ 89"></Look>
       <mt-button class="btn">加入购物车</mt-button>
    </div>
  </div>
</template>
<script>
import Look from "./Look"
export default {
  data(){
   return {}
  },
  components:{
    "Look":Look
  }
}
</script>
<style>
  #app{
    text-align: left;
    color:#414141;
    font-size:13px;
    overflow: hidden;
  }
  .cart{
    width:100%;
    position:fixed;
    left:0px;bottom:15px;
    font-size: 16px;
    color:#000;
    /* display:inline; */
    border-top:1px solid #414141;
    /* position: relative; */
  }
  #app .btn{
    width:40%;
    position: fixed;
    right:15px;
    bottom:15px;
    background: #ffc107;
    color:#000;
    height:40px;
    text-decoration: underline;
    border-radius: 20px;
  }
  img{
    width:100%;
  }
  .img1{
    width:20px;
    height:20px;
    margin-right:15px;
  }
  .no_1{
    width:100%;
    position:relative;

  }
  .s1{
    position:absolute; 
    top:0%;right:0%;
    margin-right:18px;
  }
  .a1{
    position:absolute;
    top:60%;left:76%;                                                                   
  }
  .p1{
    line-height: 20px;
    margin-top:10px;
  }
  .p1 img{
    width:16px;
    height:16px;
    vertical-align:text-top;

  }
  .s2{
    margin-right:15px;
  }
  .right_a img{
    position: absolute;
    top:-40px;left:305px;
    width:20px;height:20px;
  }
  #app .right_c{
     position: absolute;
    top:-40px;left:255px;

  }
  .right_a{
    position:relative;
    margin-bottom: 20px;
  } 
  .right_b{
    position:absolute;
    top:-38px;left:285px;
  }
</style>