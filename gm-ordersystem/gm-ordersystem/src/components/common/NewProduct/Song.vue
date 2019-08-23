<template>
    <div>
       <span>{{MoreSong}}</span>
    </div>
</template>
<script>
    export  default {
        props:{
           MoreSong:{default:""}
       }
    }
</script>
<style scoped>
    span{
        background: #fff;
        border:1px solid #eee;
        border-radius:15px;
        padding: 5px  10px;
        font-size: 10px;
    }
</style>
