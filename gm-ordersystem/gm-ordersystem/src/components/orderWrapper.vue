<template>
    <div class="container">
      <login v-show="notLogin" @hasLogin="hasLogin"></login>
      <div v-show="!notLogin">
      <div class="head_intro">
        <img src="http://127.0.0.1:3001/head_url2.jpg" alt=""><span>文文和仙仙的故事</span>
      </div> 
        <address-show v-show="hasAddress" @noAddress="hideAddress"></address-show>
        <address-add v-show="!hasAddress" @saveAddress = "saveAddress"></address-add>
        <h5>我的消费清单</h5>
        <order-list :order_list="order_list" :order_info="order_info" @postComment_event="postComment_event" @tomyComment_event="tomyComment_event"></order-list>
        <button class="login_out" @click="login_out">退出登录</button>
        </div>
    </div>
</template>
<script>
import orderList from "./common/order_list.vue";
import addressAdd from "./common/address_add.vue";
import addressShow from "./common/address_show.vue";
import login from "./login.vue";
export default {
  data() {
    return {
      order_list: [],
      order_info: [],
      hasAddress: true,
      notLogin: true
    };
  },
  computed: {
    address() {
      return `${this.province}${this.city}${this.area}${this.details}`;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    saveAddress() {
      this.hasAddress = true;
    },
    hideAddress() {
      this.hasAddress = false;
    },
    _getData(url, obj) {
      return this.axios.get(url, { params: obj });
    },
    async getData() {
      var result = await Promise.all([this._getData("/order")]);
      if (result[0].data.code === 1) {
        this.order_list = this.order_list.concat(result[0].data.data);
        this.notLogin = false;
      }
      if(result[0].data.code === -1) {
          this.$toast(result[0].data.msg);
          this.notLogin = true;
      }
    },
    //退出登录
    login_out() {
      this.axios.get("/user/login_out").then(result => {
        if (result.data.code === 1) {
          this.$toast(result.data.msg);
          this.$router.push("/login");
        }
      });
    },
    postComment_event() {
      this.$emit("postComment_event");
    },
    tomyComment_event() {
      this.$emit("tomyComment_event");
    },
    hasLogin() {
      this.notLogin = false;
    }
  },
  components: {
    orderList,
    addressAdd,
    addressShow,
    login
  }
};
</script>
<style scoped>
 .container{
   padding-bottom: 90px;
 }
  .head_intro {
      display: flex;
      align-items: center;
      padding: 10px 0 0 10px;
  }
  .head_intro img{
      border-radius: 100%;
      margin-right: 10px;
  }
.login_out {
  padding: 5px;
  background: orange;
  color: #fff;
  border: 0;
  outline: 0;
  font-size: 14px;
}
</style>
