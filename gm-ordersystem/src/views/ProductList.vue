<template>
  <div>
    <!-- 轮播图 -->
    <div class="carousel">
      <img src="@/assets/logo.png" alt="图片已破损" />
    </div>
    <!-- 菜单搜索列表 -->
    <div class="search">
      <!-- 菜单栏 左-->
      <div class="menu-bar" ref="menu_bar">
        <ul>
          <!-- 菜单种类 -->
          <li
            class="menu-item"
            v-for="(menus,i) of searchMenus"
            :key="i"
            :class="{current:i === currentIndex}"
            @click="selectLeft(i,$event)"
          >
            {{menus.name}}
            <!-- 有有添加商品就显示红色数量园点 -->
            <div class="left-red" v-show="redNum(menus.data)">{{redNum(menus.data)}}</div>
          </li>
        </ul>
      </div>
      <!-- 菜品 右-->
      <div class="shop-wrapper" ref="shop_wrapper">
        <ul>
          <li class="menusKind" v-for="(menus,i) of searchMenus" :key="i" ref="rItem">
            <!-- 菜品类 -->
            <h6>{{menus.name}}</h6>
            <!-- 菜品 -->
            <div v-for="(menus,i) of menus.data" :key="i" class="menusName">
              <div class="menuImg">
                <img id="img" src="@/assets/hamburger.jpg" alt="图片以损坏" />
              </div>
              <div class="menuContent">
                <h4>{{menus.name}}</h4>
                <span>{{menus.details}}</span>
                <div class="content-bottom">
                  <h6>￥{{menus.price}}</h6>
                  <!-- 应用添加按钮组件 -->
                  <cartcontrol :listItem="menus" class="num-red"></cartcontrol>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 应用购物车组件 -->
    <shopcart :foodlist="checkCount"></shopcart>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Cartcontrol from "@/components/ProductList/Cartcontrol";
import Shopcart from "@/components/ProductList/Shopcart";
export default {
  data() {
    return {
      searchMenus: [
        {
          name: "超值套餐",
          data: [
            { name: "超好吃", details: "特辣麻辣", price: "45" },
            { name: "超好吃", details: "特辣麻辣", price: "45" },
            { name: "超好吃", details: "特辣麻辣", price: "45" },
            { name: "超好吃", details: "特辣麻辣", price: "45" }
          ]
        },
        {
          name: "黑金系列",
          data: [
            { name: "黑金超好吃", details: "特辣麻辣", price: "45" },
            { name: "黑金超好吃", details: "特辣麻辣", price: "45" },
            { name: "黑金超好吃", details: "特辣麻辣", price: "45" },
            { name: "黑金超好吃", details: "特辣麻辣", price: "45" }
          ]
        },
        {
          name: "金供门桶",
          data: [
            { name: "金供超好吃", details: "特辣麻辣", price: "45" },
            { name: "金供超好吃", details: "特辣麻辣", price: "45" },
            { name: "金供超好吃", details: "特辣麻辣", price: "45" },
            { name: "金供超好吃", details: "特辣麻辣", price: "45" }
          ]
        },
        {
          name: "大卡套餐",
          data: [
            { name: "大卡超好吃", details: "特辣麻辣", price: "45" },
            { name: "大卡超好吃", details: "特辣麻辣", price: "45" },
            { name: "大卡超好吃", details: "特辣麻辣", price: "45" },
            { name: "大卡超好吃", details: "特辣麻辣", price: "45" }
          ]
        },
        {
          name: "小食甜品",
          data: [
            { name: "小食超好吃", details: "特辣麻辣", price: "45" },
            { name: "小食超好吃", details: "特辣麻辣", price: "45" },
            { name: "小食超好吃", details: "特辣麻辣", price: "45" },
            { name: "小食超好吃", details: "特辣麻辣", price: "45" }
          ]
        }
      ],
      rightLiTops: [],
      scrollY: 0
    };
  },
  // 注册
  components: {
    cartcontrol: Cartcontrol,
    shopcart: Shopcart
  },
  // dom和数据加载渲染完，初始化左右两边滚动
  mounted(){
   document.getElementById("img").onload=()=> {
        
      if(this.searchMenus){
        console.log(this.searchMenus);
       this.$nextTick(() => {
        this.getHeight();
        this.scrollInit();
        }); 
      }
    }    
  },
  
  methods: {
    // data参数来接受传入的menus,data，也就是JSON数据中的data数组。
    //首先要判断数组是否存在，否则可能报错，如果存在，那么遍历对象，
    //获取各个商品的count赋值给num，return num
    redNum(data) {
      if (data) {
        let num = 0;
        data.forEach(val => {
          if (val.count) {
            num += val.count;
          }
        });
        return num;
        console.log(num);
      }
    },
    // 计算每个li的高度
    getHeight() {
      //获取所有li的列
      let lis = this.$refs.shop_wrapper.getElementsByClassName("menusKind");
      let height = 0;
      //heightList的第一个元素为0
      this.rightLiTops.push(height);
      //之后的高度即为当前li的高度加上之前面li的高度和
      for (var i = 0; i < lis.length; i++) {
        let item = lis[i];
        // console.log(item);
        height += item.clientHeight;
        this.rightLiTops.push(height);
      }
      console.log(this.rightLiTops);
    },
    // 初始化左右滚动
    scrollInit() {
      //左边滚动
      this.leftBscroll = new BScroll(this.$refs.menu_bar, {
        click: true //表示允许点击
      });
      //右边滚动
      if(!this.rightBscroll){
      this.rightBscroll = new BScroll(this.$refs.shop_wrapper, {
         //在滚动中触发scroll 事件 ，值是3时表示实时派发scroll事件，2表示一段时间内会派发多次，
         //1，表示会派发scroll事件，但会截流,简单来说就是一段时间内会派发一次
        probeType: 3,
        click: true //表示允许点击
      });
      }else{
        // 否则就重新初始化，计算高度
        this.rightBscroll.refresh();
      }
      console.log(this.rightBscroll);
      this.rightBscroll.on("scroll", pos => {
        //获取实时滚动的距离 使用scrollY接收
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    //点击事件
    selectLeft(i, event) {
      // 判断是否是better-sroll派发是点击事件， 如果是原生自带的点击事件就禁止，
      if (!event._constructed) {
        return;
      }
      // 获取
      let shop_wrapper = this.$refs.shop_wrapper.getElementsByClassName(
        "menusKind"
      );
      let el = shop_wrapper[i];
      this.rightBscroll.scrollToElement(el, 300);
    }
  },
  computed: {
    // 遍历传来数据的每一项，然后又遍历每一项中的每一项,
    //判断是否有count，有就传给购物车
    checkCount() {
      let foodlist = [];
      this.searchMenus.forEach(val => {
        val.data.forEach(val => {
          if (val.count) {
            foodlist.push(val);
          }
        });
      });
      return foodlist;
    },
    //如果滚动值scrollY大于等于i区间，小于i+1区间，那么说明此时滚动到i区间，所以此时左边对应的i下标区块要高亮
    currentIndex() {
      for (var i = 0; i < this.rightLiTops.length; i++) {
        let height1 = this.rightLiTops[i];
        let height2 = this.rightLiTops[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  }
};
</script>
<style scoped>
/* 轮播图 */
.carousel {
  width: 100%;
}
/* 菜单搜索列表 */
.search {
  width: 100%;
  /* background-color: #f5f5f5; */
  overflow: hidden;
  display: flex;
}
/* 菜单栏 左*/
.menu-bar {
  width: 20%;
  padding-right: 15px;
  height: 415px;
  padding-right: 10px;
}
/* 添加的商品数量 */
.left-red {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 9px;
  line-height: 15px;
  text-align: center;
  right: 0;
  top: 0;
}
/* 菜单的栏的种类 */
ul {
  list-style: none;
  padding-inline-start: 0px;
}
.menu-item {
  text-align: center;
  padding: 18px 10px;
  font-size: 10px;
  border-bottom: 0.5px solid #f5f5f5;
  font-weight: bold;
  position: relative;
  background-color: #f6f6f6;
}
/* 菜单的栏的第一个和最后一个种类 */
.menu-item:first-child {
  border-top-right-radius: 5px;
}
.menu-item:last-child {
  border-bottom-right-radius: 5px;
}
/*菜品  右 */
div > .shop-wrapper {
  overflow: hidden;
  width: 80%;
  height: 415px;
  margin: 0;
}
 .menusKind {
  border: 0.5px solid #f6f6f6;
  padding: 10px 10px;
}
/* 类标题 */
.menusKind > h6 {
  width: 100%;
  /* background: #eee; */
  margin: 0 10px;
  text-align: left;
  font-size: 15px;
}
/* 类名 */
.menusKind > .menusName {
  width: 100%;
  display: flex;
}
/* 菜图片 */
.menusName > .menuImg {
  width: 40%;
  padding: 5px;
}
.menusName > .menuImg > img {
  width: 100%;
  border-radius: 5px;
}
/* 菜的详情 */
.menuContent {
  width: 60%;
  padding: 5px 16px;
  display: flex;
  flex-direction: column;
  line-height: 30px;
  justify-content: space-between;
}
/* 菜名 */
.menusName > .menuContent > h4 {
  margin: 0;
  color: #000;
}
.menusName > .menuContent > span {
  font: 5px PingFang SC 微软雅黑;
  color: #666666;
}
.menuContent > .content-bottom {
  display: flex;
  justify-content: space-between;
  bottom: 0;
}
/* 价格 */
.menuContent > .content-bottom > h6 {
  font-size: 10px;
  margin: 0;
  font-weight: bold;
  color: #e02e24;
}
/* 添加按钮 */
.menusName > span {
  font-weight: bold;
  font-size: 20px;
}

.menusKind:first-child {
  padding-top: 0px;
}
.menusKind:last-child {
  padding-bottom: 0px;
}
.current {
  color: #e02e24;
  background: #ffffff;
}
.current::before {
  content: "";
  background-color: #e02e24;
  width: 4px;
  height:10px;
  position: absolute;
  left: 0;
}
</style>
