<template>
    <div>
     <input type="file" name='image' id="imagelist" multiple>
    <img class="nickName" :src="imgUrl">
    <button @click="Req_ajax"> 上传</button>
    </div>
</template>
<script>
export default {
  data() {
      return {
        imgUrl: ""
      }
  },
  methods: {
      Req_ajax() {
     // 获取file域里的图片信息
     var formData = new FormData();
     //创建formdata对象
    formData.append("test",$("#imagelist")[0].files[0])  
    var OL_Action_Root = "http://127.0.0.1:3001/";
    // 将文件信息 append 进入formdata对象  key值 为后台 single 设置的值 
    this.axios.post("/uploads/img",formData).then( (result) => {
      if(result.data.err==0) {
       this.imgUrl = OL_Action_Root+result.data.data;
       console.log(this.imgUrl);
      }
    });
   }
   }  
 }
</script>
<style scoped>
    img{
        width: 50px;
        height: 50px;
    }
</style>
