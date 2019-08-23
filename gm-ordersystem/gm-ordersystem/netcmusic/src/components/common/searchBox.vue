<template>
    <div class="container">
        <i class="iconfont icon-youjiantou1" @click="backToIndex"></i>
        <input type="text" :placeholder="placeholder" v-model="query" @input="input_change"> 
        <span class="close" @click="clear" v-show = "hasquery">
        <i class="iconfont icon-guanbi1"></i>
        </span>
        <i class="iconfont icon-mingxing"></i>
    </div>
</template>
<script>
export default {
   props: {
       placeholder: {
           default: "请输入歌手、歌曲"
       }
   },
   data() {
       return {
           query: "",
           hasquery: false,
           timer: null  //定义定时器
       }
   },
  created() {
     this.bus.$on("add",this.add.bind(this));
   },
   methods: {
       clear() {
           this.query = "";
           //清空搜索框的时候，通知父元素将canquery设置为false
           this.$emit("noquery");
            //通知父组件显示热门搜索词
           this.$emit("hotShow");
       },
       add(item) {
           //将点击的热门搜索词填入搜索框中
           this.query = item;
       },
       input_change() {
           //触发事件通知父组件允许发起推荐词搜索
           this.$emit("canquery");
           if(this.timer) {
               clearTimeout(this.timer);
           }
           //将搜索数据存入localStorage
           var that = this;
           this.timer = setTimeout(function(){
            //取出localStorage中的数据
            var history_list = JSON.parse(localStorage.getItem("history"));  
            //当搜索框中的数据不为空时 将搜索框中的数据加到localStorage中
            if(that.query) {
             //将搜索框中的数据追加到localStorage中
             history_list.push(that.query);
             //重新将追加好的数据放回localStorage中
              localStorage.setItem("history", JSON.stringify(history_list));
               }
            //如果localStorage中的数据大于10条，删除前面的数据，只留后面10条，避免localStorage中数据过大
            var length = history_list.length;
            var count = 10;
            if(length>10) {
             history_list.splice(0, length - count);
             //删除数据后将处理后的数据放回localStorage中
             localStorage.setItem("history", JSON.stringify(history_list));
            }
           },1000);
       } ,
       backToIndex() {
           this.$router.push("/index");
       }       
   },
   watch: {
       query() {
           if(!this.query) {
            //搜索框没有内容时隐藏右边的关闭按钮
            this.hasquery = false;
           //搜索框没有内容时，触发事件通知父组件隐藏推荐搜索项，显示热门搜索词
            this.$emit("hotShow");
           } else {
            //搜索框内容不为空时触发搜索查询事件
             this.$emit("querySuggest",this.query);            
            this.hasquery = true;   
           }
       }
   }

}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
}
.container input{
  width: 70%;
  height: 30px;
  padding: 5px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid var(--red);
  font-size: 14px;
}
.close{
    margin-left: -25px;
}

</style>
