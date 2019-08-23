<template>
    <div  class="container">
      <div  v-for=" (item,i) of list" :key="i" :style="containerStyle">
       <div class="pic">
           <a href="#">
            <img :src=" 'http://127.0.0.1:3001/'+item.Pimg" alt="">              
           </a>
       </div>
       <div class="desc">
           <a href="#" v-text="item.pname">         
           </a>       
           </div>
           <div class="price">
             <div v-text="`¥${item.price}`"></div>
             <button @click="postOrder(item.pid,item.Pimg,item.pname,item.price)">购买</button>
             <button @click="addCart(item.pid,item.Pimg,item.pname,item.price)"><i class="iconfont icon-gouwuche"></i></button>
           </div>
       </div>
       <div class="cart_container" v-show="cart_hide">
          <cart-add class="cart" :pid="pid" :img_url="img_url" :pname = "pname" :price="price" @closeCart="closeCart"></cart-add>
       </div>
      </div>
</template>
<script>
import cartAdd from "./cart_add.vue";
export default {
  data() {
    return {
        pid: 1,
        img_url: "",
        pname: "",
        price: 0,
        cart_hide: false
    }
  },
  props: {
    containerStyle: {
      default() {
        return { width: "120px" };
      }
    },
    list: {
      default() {
        return [];
      }
    }
  },
  methods: {
    postOrder(pid, Pimg, pname, price) {
      //将购物商品加入订单表
      this.axios
        .post("/order/postOrder", {
          pid: pid,
          Pimg: Pimg,
          pname: pname,
          price: price,
          isComment: 0
        })
        .then(result => {
          if (result.data.code === 1) {
            this.$toast(result.data.msg);
            this.$router.push("/orderWrapper");
          } else {
            this.$toast(result.data.msg);
            this.$router.push("/login");
          }
        });
    },
    addCart(pid,Pimg,pname,price) {
    this.pid = pid;
    this.img_url = Pimg;
    this.pname = pname;
    this.price = price;
    this.cart_hide = true;
    },
    closeCart() {
      this.cart_hide = false;
    }
  },
  components: {
    cartAdd
  }

};
</script>
<style scoped>
.container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  padding: 10px;
}
.pic {
  width: 100%;
  height: 115px;
}
.pic img {
  width: 100%;
}
.desc {
  height: 52px;
  margin: 10px 0;
}
.desc a {
  font-size: 14px;
  text-decoration: none;
  color: #555555;
}
.price {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #19b955;
  margin-bottom: 10px;
}
.price button {
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
  padding: 2px;
}
.cart_container{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 667px;
  background: rgba(0,0,0,.5)
}
.cart{
    position: fixed;
    left: 0;
    bottom: 58px;
    width: 100%;
    background: #fff;
}
</style>
