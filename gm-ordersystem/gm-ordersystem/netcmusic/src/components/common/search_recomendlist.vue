<template>
    <div>
       <div class="title" v-text="title"></div> 
       <ul>
           <li v-for="(item,i) of recomend_list" :key="i">
               <span class="no" v-text="i+1"></span>
               <div>
                 <a href="#" v-text="item.songListDesc"></a>
                <div class="author" v-text="item.songListAuthor"></div>
               </div>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    props: {
        title: {default: "热搜榜"},
        recomend_list: {
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
.title {
    padding-left: 33px;
    text-align: left;
    color: var(--red);
}
 ul{
     list-style: none;
 }
 ul li{
     display: flex;
     margin-bottom: 10px;
 }
 ul li .no{
     margin-right: 10px;
     color: var(--red);
     font-style: italic;
 }
 ul li a {
     text-decoration: none;
     color: #000;
     font-size: 14px;
 }
  ul li .author{
      margin-top: 5px;
      text-align: left;
      font-size: 12px;
      color: #666;
  }
</style>
