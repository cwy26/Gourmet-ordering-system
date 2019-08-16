<template>
  <div>
    <!-- 遮罩层 -->
    <div class="popContainer" v-show="listShow" @click="toggle()"></div>
    <!-- 购物车列表 -->
    <div v-show="isShow" class="shop-list">
      <div class="shop-list" v-show="listShow">
        <!-- 列表头 -->
        <p class="shop-list-title" @click="clearCart">
          <span>已选商品</span>
          <span>清空购物车</span>
        </p>
        <div class="shop-list-wrapper" ref="shopListScroll">
          <ul>
            <!-- 添加后的商品 -->
            <li class="shop-list-content" v-for="(item,i ) of foodlist" :key="i">
              <div class="shop-list-left">{{item.name}}</div>
              <div class="shop-list-middle">¥{{item.price}}</div>
              <div class="shop-list-right">
                <!-- 应用添加按钮组件 -->
                <cartcontrol :listItem="item"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 购物车 -->
    <div class="shopcart">
      <div class="left" @click="toggle">
        <div class="circle" :class="{'highlight': totalCount}">
          <img src="../../assets/shop/shop.png" alt="图片已损坏" />
          <div class="num-red" v-show="totalCount">{{totalCount}}</div>
        </div>
        <div class="left-text-before" v-show="!totalCount">{{check.trackingBefore}}</div>
        <div class="left-text-after" v-show="totalCount">
          <div class="total-money">￥{{totalMoney}}</div>
          <div class="tracking">{{check.trackingBefore}}</div>
        </div>
      </div>
      <div class="right" :class="{'highlight': totalCount}">{{checkAll}}</div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Cartcontrol from "./Cartcontrol";
export default {
  data() {
    return {
      check: {
        trackingBefore: "另需配送费￥5",
        checkBefore: "￥20起送",
        checkAfter: "去结算"
      },
      isShow: ""
    };
  },
  props: {
    foodlist: {
      type: Array
    }
  },
  components: {
    cartcontrol: Cartcontrol
  },
  methods: {
    // 当点击清除购物车，商品数量清零
    clearCart() {
      this.foodlist.forEach(val => {
        val.count = 0;
      });
      this.isShow = false;
    },
    //data中设置个控制隐藏显示的变量isShow,通过v-show绑定在购物车列表的DOM上。
    //点击购物车切换隐藏显示就很容易了。如果购物车没有totalCount，
    //说明没有商品被添加，那么购物车看列表是隐藏的。如果有那么切换就是this.isShow = !this.isShow
    toggle() {
      if (!this.totalCount) {
        this.isShow = false;
      }
      this.isShow = !this.isShow;
    }
  },
  computed: {
    //但是光靠一个isShow显然不能完全实现这个功能，
    //这里我添加了一个方法listShow. 来实现点击遮罩层，隐藏购物车列表。
    //遮罩层v-show="listShow" @click="toggle()"
    listShow() {
      if (!this.totalCount) {
        this.isShow = false;
        return false;
      }
      //  初始化better-scroll
      this.$nextTick(() => {
        if (!this.shopScroll) {
          this.shopScroll = new BScroll(this.$refs.shopListScroll, {
            click: true
          });
          this.shopScroll.refresh();
          console.log(this.shopScroll);
        } else {
          this.shopScroll.refresh();
        }
      });
      return this.isShow;
    },
    totalMoney() {
      let total = 0;
      this.foodlist.forEach(val => {
        if (!val.count) {
          return;
        } else {
          total += val.count * val.price;
        }
      });
      return total;
    },
    totalCount() {
      let num = 0;
      this.foodlist.forEach(val => {
        if (!val.count) {
          return;
        } else {
          num += val.count;
        }
      });
      return num;
    },
    checkAll() {
      if (this.totalCount) {
        return this.check.checkAfter;
      } else {
        return this.check.checkBefore;
      }
    }
  }
};
</script>
<style scoped>
/* 遮罩层 */
div.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
/* 购物车列表 */
.shop-list {
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 50px;
  background: #eee;
  flex-direction: column;
}
/* 购物车表头 */
.shop-list-title {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px 12px;
  background: #dfdbdb;
  color: #666666;
  font: 8px PingFang SC;
  border-bottom: 0.5px solid #eee;
}
/* 列表显示的窗口 */
.shop-list > .shop-list-wrapper {
  max-height: 200px;
  overflow: hidden;
}
.shop-list-wrapper > ul {
  margin: 0;
  padding-inline-start: 0;
}
/* 购物车列表内容 */
.shop-list-content {
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  line-height: 20px;
  border-bottom: 0.3px solid #bdc6ce;
}
/* 购物车列表的商品文字 */
/* 内容比较多的用省略号表示 */
.shop-list-left {
  text-align: left;
  width: 50%;
  font: 15px PingFang SC;
  color: #000;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
/* 购物车列表的商品文字价格 */
.shop-list-middle {
  font-size: 10px;
  color: red;
  font-weight: bold;
}
/* 购物车 */
.shopcart {
  width: 100%;
  background: #514f4f;
  position: fixed;
  bottom: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 70%;
}
.circle {
  width: 50px;
  height: 50px;
  background: #726d6d;
  border-radius: 50%;
  position: relative;
  left: 10px;
  bottom: 10px;
  float: left;
}
.circle .num-red {
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

.circle > img {
  margin-top: 10px;
}
.left-text-before {
  position: relative;
  left: 18px;
  font-size: 14px;
  line-height: 50px;
  color: #c4c4c4;
  float: left;
}
.left-text-after {
  position: relative;
  left: 18px;
  color: #c4c4c4;
  float: left;
}
.left-text-after .total-money {
  font-size: 24px;
  line-height: 28px;
  color: #fff;
}
.left-text-after .tracking {
  font-size: 9px;
  margin-top: 3px;
}
/* 结算 */
.right {
  line-height: 50px;
  text-align: center;
  color: #c4c4c4;
  float: right;
  width: 30%;
}
.highlight {
  background: #ffd161;
  color: #2d2b2a;
}
</style>