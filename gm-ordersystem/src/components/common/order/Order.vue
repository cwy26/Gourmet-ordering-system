<template>
  <div class="order">
      <mt-navbar v-model="selected">
  <mt-tab-item id="fir">订金</mt-tab-item>
  <mt-tab-item id="sec">预约</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="fir">
    <div class="zf">
      <div class="zf-table">
        <div class="zf-row">
          <div class="zf-cell">
            <span>
              <img src="../../../assets/ds/dt.png" alt="">
              店铺地址</span>
          </div>
          <div class="zf-cell-1">
             <button>查看地图</button>
          </div>
        </div>
        <div class="zf-row">
          <div class="zf-cell">
            <span>
               <img src="../../../assets/ds/lx.png" alt="">
               联系方式</span>
          </div>
          <div class="zf-cell-1">
            100000000
          </div>
        </div>
        <div class="zf-row">
          <div class="zf-cell">
            <span>
               <img src="../../../assets/ds/zhifu.png" alt="">
               支付方式</span>
          </div>
          <div class="zf-cell-1">
            在线支付
          </div>
        </div>
      </div>
    </div>
    <!-- <mt-cell v-for="n in 5" :title="'content ' + n" /> -->
  </mt-tab-container-item>
  <mt-tab-container-item id="sec">
    <div class="make">
      <div class="make-table">
        <div class="make-row">
          <div class="make-cell">
            <span>
              <img src="../../../assets/ds/dt.png" alt="">
              店铺地址</span>
          </div>
          <div class="make-cell-1">
            <button>查看地图</button>
          </div>
          </div>
          <div class="make-row">
           <div class="make-cell">
             <span>
               <img src="../../../assets/ds/lx.png" alt="">
               联系方式</span>
           </div>
           <div class="make-cell-1">10000000000</div>
        </div>
          <div class="make-row">
           <div class="make-cell">
             <span>
               <img src="../../../assets/ds/sj.png" alt="">
               到店时间</span>
           </div>
           <div class="make-cell-1">尽快到店</div>
        </div>
        <div class="make-row">
           <div class="make-cell">
             <span>
               <img src="../../../assets/ds/zhifu.png" alt="">
               支付方式</span>
           </div>
           <div class="make-cell-1">在线支付</div>
        </div>
      </div>
    </div>
    <!-- <mt-cell v-for="n in 5" :title="'content ' + n" /> -->
  </mt-tab-container-item>
</mt-tab-container>
  <div class="selected">
   <div class="table">
    <div class="table-row">
      <div class="table-cell_1">
        已选商品
      </div>
      <div class="table-cell_2">
       共2件
      </div>
    </div>
    <hr>
    <div class="table-row">
      <div class="table-cell">长长久久组合</div>
      <div class="table-cell">x1</div>
      <div class="table-cell">¥77</div>
    </div>
  </div>
</div>
  <div class="price">
       <div class="price-table">
          <div class="price-row">
            <div class="price-cell">整单商品优惠</div>
            <div class="price-cell_1">未使用优惠
              <img src="../../../assets/ds/you.png" alt="">
            </div>
            <p class="price-cell">(不可与单商品优惠共享)</p>
          </div>
          <hr>
          <div class="price-row">
            <div class="discount-cell">原价</div>
            <div class="discount-cell-1">¥154</div>
            <div class="discount-cell">活动优惠</div>
            <div class="discount-cell-1">- ¥20</div>
            <div class="discount-cell-2"><span>总计</span>
              ¥134</div>
          </div>
        </div>
      </div>
    <div id="rem">
      <div>
        <span>备注</span>
        <input type="text" placeholder="请输入备注">
        <hr>
        <span>发票抬头</span>
        <input placeholder="请输入个人或者公司抬头">
        <hr>
        <span>纳税人识别号</span>
        <input placeholder="请输入纳税人识别号">
      </div>
    </div>
    <div id="jz">
      <div>
        <span>已优惠-¥20</span>
        <span>还需付¥134</span>
        <button>确认下单</button>
      </div>
    </div>
 
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:"fir",//点击id为sec的标签时,selected变为'sec',则内容区跟着切换到id为sec的内容块
    }
  },
}
</script>
<style>
  #app{
    width:100%;
    justify-content: space-between;
    overflow: hidden;
    
  }
  .order {
    padding-bottom: 52px;
  }
  .selected{
    color:#645656;
    margin:10px;
    font-size: 16px;
    border-radius: 5px;
    border:1px solid #ccc;
  }
  .table{
    width:100%;
    display: table;
    /* table-layout:fixed; */
    
  }
  .table-row{
    width:100%;
    display:table-row;
  }
  .table-cell{
    width:33.33%;
    display:inline-block;
    text-align: right;
    margin:10px -10px 10px 0;
  }
  .table-cell_1{
    width:43%;
    display:inline-block;
    text-align: left;
    margin:10px;
  }
  .table-cell_2{
    width:43%;
    display:inline-block;
    text-align: right;
    margin:10px;
  }
  .price{
    display:flex;
    table-layout:fixed;
    border:1px solid #ccc;
    font-size: 16px;
    color:#645656;
    margin:10px;
    border-radius: 5px;
  }
  .price-table{
    width:100%;
    display: table; 
  }
  .price-row{
    width:100%;
    display: table-row;
  }
  .price-cell{
    width:45%;
    display:inline-block;
    margin:10px;
  }
  .price-cell_1{
    width:45%;
    display:inline-block;
    text-align: right;
    color:red;
    font-size: 16px;
  }
  .price-cell_1 img{
    width:20px;
    height:17px;
    vertical-align:text-top;
  }
  #app p.price-cell{
    margin-top:0;
    font-size: 14px;
  }
  .discount-cell{
    width:43%;
    display:inline-block;
    margin:10px;
    font-size: 14px;
  }
  .discount-cell-1{
    width:43%;
    display:inline-block;
    text-align: right;
    margin:10px;
    color:red;
  }
  .discount-cell-2{
    width:92%;
    display:inline-block;
    text-align: right;
    margin:10px;
    color:red;
  }
  .discount-cell-2 span{
    color:#000;
  }
  #rem{
    border-radius: 5px;
    border:1px solid #ddd;
    margin:10px;
    /* width:95%; */
  }
  #rem>div{
    margin:15px;
  }
  input{
    outline:medium;
    border:none;
    text-align: right;
    float: right;
    margin:10px 0 10px;
  }
  #rem span{
    display:inline-block;
    margin:10px 0 10px;
    font-size: 16px;
    color:black;
  }
  #jz{
    border:1px solid #ddd;
    margin:10px;
    height:50px;
    line-height: 50px;
    position:fixed;
    left:-10px;
    bottom:-10px;
    width:100%;
    z-index: 1;
    background:#dbd0d0;
  }
  #jz button{
    float: right;
    width:30%;
    color:#fff;
    background:red;
    border:none;
    text-align: center;
    display: block;
    margin:0 auto;  
    height:50px;
    font-size: 14px;
  }
  #jz span{
    margin:10px 40px 10px 10px;
    font-size: 15px;
  }
  .zf{
    display:flex;
    border:1px solid #ccc;
    font-size: 16px;
    color:#645656;
    margin:10px;
    border-radius: 5px;
  }
  .zf-table{
    width:100%;
    display:table;
  }
  .zf-row{
    width:100%;
    display:table-row;
  }
  .zf-cell{
    width:45%;
    display: inline-block;
    color:#000;
    font-size: 16px;
    margin:10px 0 10px 10px;
  }
  .zf-cell img{
    width:15px;
    height:15px;
    vertical-align:center;
  }
  .zf-cell-1{
    width:45%;
    display: inline-block;
    text-align: right;
    color:#795a5a;
    font-size: 16px;
    margin:10px 10px 10px 0;
  }
  .zf-cell-1 button{
    width:38px;height:38px;
    background:#fff;
    color:red;
    font-size: 11px;
    border:1px solid #414141;
    border-radius: 9px;
  }
  .make{
    display:flex;
    border:1px solid #ccc;
    font-size: 16px;
    color:#645656;
    margin:10px;
    border-radius: 5px;
  }
  .make-table{
    width:100%;
    display: table;
  }
  .make-row{
    width:100%;
    display: table-row;
  }
  .make-cell{
    width:45%;
    display: inline-block;
    color:#000;
    font-size: 16px;
    margin:10px 0 10px 10px;
  }
  .make-cell-1{
    width:45%;
    display: inline-block;
    text-align: right;
    color:#795a5a;
    font-size: 16px;
    margin:10px 10px 10px 0;
  }
  .make-cell img{
    width:15px;
    height:15px;
    vertical-align:center;
  }
  .make-cell-1 button{
    width:38px;height:38px;
    background:#fff;
    color:red;
    font-size: 11px;
    border:1px solid #414141;
    border-radius: 9px;
  }
  .order .mint-tab-item-label{
    font-size: 16px;
  }
</style>