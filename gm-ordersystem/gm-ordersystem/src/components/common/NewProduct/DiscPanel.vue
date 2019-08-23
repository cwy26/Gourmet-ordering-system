<template>
    <div class="DiscPanel-content">
            <div class="item">
                <img :src="require('../../../assets/imgs/NewProduct/huanyibo.jpg')" alt="图片已损坏">
                <span>王一博热门单曲</span>
            </div>
            <div class="item">
                <img :src="require('../../../assets/imgs/NewProduct/care.jpg')" alt="图片已损坏">
                <span>Care package Drake</span>
            </div>
            <div class="item">
                <img :src="require('../../../assets/imgs/NewProduct/resue.jpg')" alt="图片已损坏">
                <span>Rescue Me (BYNT.Remix)</span>
            </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
  .DiscPanel-content{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
    }
  .DiscPanel-content>.item{
        width:30%;
        border-radius: 5px;
        margin:2px 0;
        padding:2px; 
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: relative;
         min-height: 130px;
    }
    .item>img{
        width: 100%;
        border-radius: 5px;
    }
    .item>span{
        margin: 5px 0;
        color: #000;
        font-size: 5px;
         overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display:-webkit-box;
        -webkit-box-orient: vertical;
    }
</style>

