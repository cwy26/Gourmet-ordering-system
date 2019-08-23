<template>
  <div class="container">
    <div v-if="list.length" class="title">
      <div>
        <div class="name">购物车</div>
        <div class="count">共{{totalCount}}件宝贝</div>
      </div>
      <div @click="handel">{{isDelete?"完成":"管理"}}</div>
    </div>
    <div v-else class="title_empty">购物车</div>
    <div v-if="list.length">
        <div class="list" v-for="(item,i) of list" :key="i">
            <div class="left">
            <div class="choose"><input type="checkbox" v-model="radio_choice[i]" @click="radio_choose($event,i)"></div>
            <div class="pic">
                <img :src="'http://127.0.0.1:3001/'+item.Pimg" alt="">
            </div>
            </div>
            <div class="right">
                <div class="pname" v-text="item.pname"></div>
                <div class="add">
                    <div class="price" v-text="`¥${item.price}`"></div>
                    <div>
                        <a href="#" @click="minus(pCount[i], i)">-</a>
                        <input type="text" v-model="pCount[i]">
                        <a href="#" @click="add(pCount[i], i)">+</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!isDelete" class="goBuy">
            <div class="left">
                <input id="chooseAll" type="checkbox" v-model="chooseAll" @click="choose_all">
                <label for="chooseAll" class="choose_all">全选</label>
            </div>
            <div class="right">
                <div>
                  <div class="calInfo">
                    <span class="notFee">不含运费</span>
                    <span class="totalCal">合计：</span>
                    <span class="total" v-cloak>¥{{total.toFixed(2)}}</span>
                  </div>
                  <div class="checkout">结算({{kinds}})</div>
                </div>
            </div>
        </div>
        <div v-show="isDelete" class="delete">
            <div class="left">
                <input id="chooseAll" type="checkbox" v-model="chooseAll" @click="choose_all">
                <label for="chooseAll" class="choose_all">全选</label>
            </div>
            <div class="do_delete" @click="del">删除</div>
        </div>
   </div>
   <div class="empty" v-else>您还没添加任何宝贝哦，快点去逛逛吧！</div>      
    </div>
</template>
<script>
export default {
  inject: ["reload"],
  data() {
    return {
      list: [],
      pCount: [],
      chooseAll: true,
      radio_choice: [],
      total: 0,
      kinds: 0,
      isDelete: false
    };
  },
  watch: {
    list() {
        var totalPrice = 0;
      for (var i = 0; i < this.list.length; i++) {
        this.pCount.push(this.list[i].count);
        this.radio_choice.splice(i,1,this.chooseAll)
        this.calTotal();
      }
    },
    radio_choice() {
      //计算选择的商品种类
      for (var i = 0, j=0; i < this.radio_choice.length; i++) {
           if(this.radio_choice[i]) {
              j++
           }
      }
      this.kinds = j;
    }
  },
  computed: {
    totalCount() {
      var count = 0;
      for (var i=0; i<this.pCount.length;i++) {
         if(this.radio_choice[i]) {
           count += parseInt(this.pCount[i]);
         }
         
      }
      return count;
    }
  },
  created() {
    this.getCart();
    this.calTotal();
  },
  methods: {
    getCart() {
    this.axios.get("/cart").then(result => {
      if (result.data.code === 1) {
        this.list = this.list.concat(result.data.data);
      } else {
        this.$toast(result.data.msg);
        this.$router.push("/login");
      }
    });
    },
    add(count, i) {
      var count = parseInt(count);
      count += 1;
      this.pCount.splice(i, 1, count);
      this.calTotal(); 
    },
    minus(count, i) {
      if (count == 1) {
        this.calTotal();   
        return;
      }
      var count = parseInt(count);
      count -= 1;
      this.pCount.splice(i, 1, count);
      this.calTotal(); 
    },
    choose_all() {
     for(var i=0; i < this.list.length; i++) {
        this.radio_choice.splice(i,1,!this.chooseAll)
      };
     this.calTotal(); 
    },
   //计算总金额的函数
   calTotal() { 
       //遍历前将总金额置为0
       this.total = 0;
       for (var i=0; i< this.list.length; i++) {
        //遍历购物车列表，如果为选中，则加入计算
          if(this.radio_choice[i]) {
            var price = Number(this.list[i].price);
            var count = Number(this.pCount[i]);
             this.total += price * count;
          } 
       }
   },
   //点击单选按钮
   radio_choose(e,i) {
        //如果点击的单选框checked为false，直接设置全选框checked为false
        if (!e.target.checked) {
          //将该单选框的radio_choice值设为false
            this.radio_choice[i] = false;
            //将全选框设置为false;
            this.chooseAll = false;
            this.calTotal();
            return;     
        } else {
       //否则先将该单选框的radio_choice值设为true并遍历单选框checked属性数组
       this.radio_choice[i] = true;
       //console.log(this.radio_choice);
       //因为走的是else语句，被点击的单选框的radio_choice已经为true，所以j初始化值为1
       for (var i =1,j=1 ; i < this.list.length; i++) {
        //如果遍历到未选中的单选框，将全选框置为false,跳出函数
         if(!this.radio_choice[i]) {
            this.chooseAll = false;
            this.calTotal();
            break;
         } else {
           //遍历到一个选中的单选框则j+1  
             j++;
            if (j == this.list.length) {
            this.chooseAll = true;
            this.calTotal();
              }            
           }         
       }

   } 
   },
   handel() {
     this.isDelete = !this.isDelete;
   },
   del() {
     //如果没有选择要删除的宝贝
    // console.log(this.radio_choice);
     for(var i=0,j=0,arr=[]; i<this.list.length; i++) {
       if(this.radio_choice[i]) {
         //找到选中的要删除的宝贝,数量加1并且将索引值存入数组z
         j++;
         arr.push(i);
       }
     }
        if(j==0) {
        this.$messagebox.confirm("请选择要删除的宝贝");
        return;
       }
     this.$messagebox.confirm(`是否删除这${j}个宝贝`).then( (action) => {
       //遍历要删除宝贝的索引数组执行删除操作
       var str = "";
        for (var item of arr) {
        str += `${this.list[item].pid},`
        }
        str = str.slice(0,str.length-1);
         this.axios.get("/cart/del",{params:{pids: str}}).then( result => {
           console.log(result.data.code);
           if(result.data.code === -1) {
            this.$toast(result.data.msg);
            this.$router.push("/login");
           } else {            
            this.$toast(result.data.msg);
            this.reload();  //调用方法
           }
         });

     }, (action) => {
       return;
     });
   }
  
   }
};
</script>
<style scoped>
.container {
  padding-bottom: 85px;
}
.title, .title_empty{
  height: 50px;
  background: orange;
  font-size: 16px;
  color: #fff;
}
.title {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
}
.title>div:first-child{
  text-align: left;
}
.title .name {
  margin-bottom: 10px;
}
.title .count{
  font-size: 12px;
}
.title_empty{
  text-align: center;
  line-height: 50px;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  font-size: 14px;
}
.list .left {
  display: flex;
  align-items: center;
}
.list .right{
    width: 60%;
}
.list .pic img {
  width: 80px;
  margin-left: 10px;
  border: 1px solid #ccc;
}
.list .pname {
  margin: 15px 0;
}
.add {
  display: flex;
  justify-content: space-between;
}
.add a {
  text-decoration: none;
  padding: 2px 5px;
  border: 1px solid #ccc;
}
.add a:first-child {
  border-right: 0;
}
.add a:last-child {
  border-left: 0;
}
.add input {
  width: 40px;
  height: 18px;
  border: 1px solid #ccc;
  text-align: center;
}
.add .price {
  color: red;
}
.goBuy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 14px;
  padding: 10px 15px;
}
.goBuy .chooseAll {
  margin-left: 10px;
}
.goBuy .right {
  width: 72%;
}
.goBuy .right .total {
  color: red;
}
.goBuy .right > div {
  display: flex;
}
.goBuy .right .calInfo {
  padding-top: 5px;
}
.goBuy .right .checkout {
  padding: 5px 15px;
  background: orange;
  color: #fff;
  border-radius: 10px;
  margin-left: 10px;
}
.goBuy .right .notFee {
  font-size: 12px;
  color: #ccc;
}
.goBuy .right .totalCal {
  margin-left: 5px;
  font-size: 14px;
  color: #000;
}
.empty {
  padding-top: 50px;
  font-size: 14px;
}
.delete{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 106px 10px 70px;
  font-size: 14px;
}
.do_delete {
  padding: 5px;
  border: 1px solid red;
  border-radius: 10px;
  color: red;
}
</style>
