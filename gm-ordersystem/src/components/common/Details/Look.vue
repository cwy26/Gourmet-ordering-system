<template>
<div>
   <p class="span1">{{msg1}}</p>       
    <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
  props:{
    msg:{default:""},
    msg1:{default:""}
  }
}
</script>
<style>
  p{
    margin-left:20px;
    color:#414141;
    width:80%;
  }
  .span1{
    text-align: left;
    font-size: 20px;
    color:#000;
  }
</style>