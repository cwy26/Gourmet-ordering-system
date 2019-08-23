<template>
     <div class="NewSongPanel-content">
            <div class="item">
                <img src="../../../assets/imgs/NewProduct/bofang.png" alt="图片已损坏">
                <img :src="require('../../../assets/imgs/NewProduct/regrets.jpg')" alt="图片已损坏">
                <span>No Regrets(hoaprox Remix)</span>
            </div>
            <div class="item">
                <img src="../../../assets/imgs/NewProduct/bofang.png" alt="图片已损坏">
                <img :src="require('../../../assets/imgs/NewProduct/welcome.jpg')" alt="图片已损坏">
                <span>WELCOME 2 PARADISE</span>
            </div>
            <div class="item">
                <img src="../../../assets/imgs/NewProduct/bofang.png" alt="图片已损坏">
                <img :src="require('../../../assets/imgs/NewProduct/xihaun.jpg')" alt="图片已损坏">
                <span>十分喜欢</span>
            </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .NewSongPanel-content{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
    }
  .NewSongPanel-content>.item{
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
    .item>img:first-child{
        width:25px;
        position: absolute;
        top:67px;
        left: 64px;
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
