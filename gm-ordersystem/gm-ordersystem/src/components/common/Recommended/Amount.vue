<template>
    <div class="amount-app">
        <img src="../../../assets/imgs/Recommended/bofanlaing.png" alt="图片已损坏">
        <span>{{item}}</span>
    </div>
</template>
<script>
    export default {
        // 接受父组件传来的数据
       props:{
           item:{default:""}
       }
    }
</script>
<style scoped>
    .amount-app{
        display:flex;
        align-items: center;
        position: absolute;
        top:6px;
        left:45px;
    }
    .amount-app>img{
        width: 10px;
    }
    .amount-app>span{
        font-size: 10px;
        color: #fff;
    }
</style>
