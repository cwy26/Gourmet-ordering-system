<template>
<!-- 这是你杰明爸爸的组件，你们这些渣渣，尤其是张兰同学 -->
<!-- 标题 -->
    <div class="recommended-app">
        <div class="recommended-title">
            <h4>推荐歌曲</h4>
            <span>歌曲广场</span>
        </div>
        <div class="recommended-content">
            <div class="item">
                <Amount item="350万"></Amount>
                <img :src="require('../../../assets/imgs/Recommended/chudon.jpg')" alt="图像已损坏">
                <span>那些触动人心的女生名谣</span>
            </div>
            <div class="item">
                <Amount item="350万"></Amount>
                <img :src="require('../../../assets/imgs/Recommended/laoge.jpg')" alt="图像已损坏">
                <span>老歌越听越经典，旧人越看越无情</span>
            </div>
            <div class="item">
                <Amount item="350万"></Amount>
                <img :src="require('../../../assets/imgs/Recommended/dianyin.jpg')" alt="图像已损坏">
                <span>[东方电音动] 璇跳律，参透神经</span>
            </div>
            <div class="item">
                <Amount item="350万"></Amount>
                <img :src="require('../../../assets/imgs/Recommended/ruanmeizi.jpg')" alt="图像已损坏">
                <span>软妹子 萝莉 暖音 软耳朵</span>
            </div>
            <div class="item">
                <Amount item="350万"></Amount>
                <img :src="require('../../../assets/imgs/Recommended/baidadj.jpg')" alt="图像已损坏">
                <span>[全球百大DJ] 2018百大DJ精选作品</span>
            </div>
            <div class="item">
                <Amount item="350万"></Amount>
                <img :src="require('../../../assets/imgs/Recommended/qiubai.jpg')" alt="图像已损坏">
                <span>[燃系ACG],吾驰骋于沙场，未曾经历一败</span>
            </div>
        </div>
        
    </div>
</template>
<script>
// 引入子组件
import Amount  from "./Amount";
    export default {
        data(){
            return {

            }
        },
        // <!-- 2注册 -->
         components:{
             "Amount":Amount
         }
    }
</script>
<style scoped>
    .recommended-app{
        padding: 10px 20px;
    }
    .recommended-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .recommended-title>h4{
        font-weight: bold;
    }
    .recommended-title>span{
        background: #fff;
        border:1px solid #eee;
        border-radius:15px;
        padding: 5px  10px;
        font-size: 10px;
    }
    .recommended-content{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
    }
    .recommended-content>.item{
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
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }  
</style>
