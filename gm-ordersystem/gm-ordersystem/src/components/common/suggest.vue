<template>
    <div>
        <ul>
            <li v-text="suggest_newlist.first"></li>
            <li v-for="(item,i) of suggest_newlist.list" :key="i">
                <i class="iconfont icon-sousuo"></i>
                <span v-text="item"></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        suggest_list: {
            default() {
                return []
            }
        }
    },
    computed: {
      suggest_newlist() {
          //去掉“搜索...”这一项
          var first = this.suggest_list.shift();
          return {
              first,
              list: this.suggest_list
          }
      }
    }
}
   
</script>
<style scoped>
  ul {
      position: absolute;
      top: 40px;
      left: 30px;
      list-style: none;
      box-shadow: #ccc 0 0 5px ;
      background: #fff;
      padding-left: 15px;
      width: 80%;
      margin: 30px auto;
  }
  ul li{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #ccc;
      line-height: 50px;
      text-align: left;
      /* 超出内容隐藏 */
      overflow: hidden; 
  }
  ul li:first-child {
      color: blue;
  }
  ul li i{
    margin-right: 10px;
  }

</style>

