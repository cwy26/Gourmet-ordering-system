<template>
    <div>
      <div class="general">
          <div class="left_pic">
              <img :src=" 'http://127.0.0.1:3001/' + img_url" alt="">
          </div>
          <div class="title">与宝贝描述相符</div>
          <div class="star">
            <i v-for ="(item,i) of 5" :key="i" class="iconfont icon-xingxing" @click="changeScore(i)" :class="{'bad':isBad[i]}"></i>
            <div class="rating_text">{{rating_text[index]}}</div>
          </div>          
      </div>
      <textarea class="contents" v-model="content" name="
      " id="" cols="55" rows="10" placeholder="有什么想对我们说的都可以写下来哦!">
      </textarea>
      <button class="rating_btn" @click="postComment">发布评论</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img_url: "",
            index: 5,
            isBad: [false,false,false,false,false],
            rating_text: ["0分,各方面都很差", "1分，很差","2分，比较差","3分，还需改善","4分 比较满意","5分 非常满意"],
            content: "",
            score: 5
        }
    },
    created() {
        this.loadData()
    },
    methods: {
    loadData() {
        //获取订单oid
        var pid = this.$route.query.pid;
       this._getData("/product/getItem",{pid:pid}).then(result => {
           if(result.data.code === 1) {
             this.img_url = result.data.data[0].Pimg;
           }
       });
    },
      //封装获取数据的函数
      _getData(url,obj) {
      return this.axios.get(url,{params: obj});
      },

      changeScore(i) {
          if(!this.isBad[i]) {             
            // 如果被点击的星星是点亮的,将其和其之后的星星都灭掉
            for (var j = i; j< this.isBad.length; j++) {
            this.isBad.splice(j, 1, true);
          }
          } else {          
            //如果被点击的星星是未点亮的,将其和其之前的星星都点亮
            for(var j = 0; j < i ; j++) {
                 var arr = [];
                 for (var z = 0; z < i+1; z++) {
                  arr.push(false);
                 }
                this.isBad.splice(0, i+1, ...arr);
            }
          }
          //循环遍历isBad,找出被点亮的星星个数，赋值给score
          for(var i = 0, total = 0; i < this.isBad.length; i++) {
              if(!this.isBad[i]) {
                 total += 1;
              }
          }
             this.score = total;  //total代表亮的星星个数，最大为5
             this.index = total;
      },
      postComment() {
         this.commentToServer();
         this.$router.push("/myComment");
      },
      commentToServer() {
        var oid = this.$route.query.oid;
        this.axios.post("/comments/mycomment",{
            oid: parseInt(oid),
            uid: 1,
            head_url: "head_url1.jpg",
            nickName: "文文仙仙的故事",
            score: this.score,
            comments: this.content,
            comment_url: "p_url1.jpg,p_url2.jpg,p_url3.jpg",
            hasImg: 1,
            isLowscore: this.score > 2? 0: 1
        }).then( (result) => {
            if ( result.data.code === -1) {
              this.$toast(result.data.msg);
              this.$router.push("/login");
            } else {
             this.$toast(result.data.msg);
            }
           
        });
      }
    }
}
</script>
<style scoped>
.general {
    display: flex;
    padding: 10px 15px;
    align-items: center;
}
.left_pic{
    width: 70px;
}
.general .title {
    margin-left: 15px;
    font-size: 14px;
}
.left_pic img{
    width: 100%;
    height: 100%;
}
.icon-xingxing {
    font-size: 28px;
    color: orange;
}
.star{
    margin-left: 20px;
}
.bad{
    color: #ccc;
}
.contents {
    padding: 10px;
    font-size: 12px;
}
.rating_btn{
    border: 0;
    margin-top: 10px;
    padding: 5px;
    background: orange;
    color: #fff;
    font-size: 12px;
}
.rating_text{
    font-size: 12px;
}
</style>

