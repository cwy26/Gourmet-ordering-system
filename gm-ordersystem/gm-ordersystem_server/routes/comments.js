const express = require("express");
const query = require("../query.js");
const router = express.Router();

//查看全部评论内容
router.get("/", (req,res) => {
  var sql="SELECT mtime, head_url, nickname, score, comments, comment_url,hasImg, isLowscore FROM comments ORDER BY mid DESC";
  (async function(){
      var result = await Promise.all( [query(sql)]);
      res.send({code:1, msg:"数据获取成功", data:result[0]});
  } )();
});
//查看某位用户的评论内容
router.get("/mycomment", (req,res) => {
  var uid =  req.session.uid;
  if(!uid) {
    res.send({code: -1, msg: "请先登录"});
    return;
  }
  var sql="SELECT mtime, head_url, nickname, score, comments, comment_url,hasImg, isLowscore FROM comments WHERE uid = ? ORDER BY mid DESC";
  (async function(){
      var result = await Promise.all( [query(sql, [uid])]);
      res.send({code:1, msg:"数据获取成功", data:result[0]});
  } )();
});
//提交评论接口
router.post("/mycomment", (req,res) => {
    var uid =  req.session.uid;
    if(!uid) {
      res.send({code: -1, msg: "请先登录"});
      return;
    }
   var oid = req.body.oid;
   var obj = {};
       obj.uid = uid;
       obj.head_url = req.body.head_url;
       obj.nickName = req.body.nickName;
       obj.score = req.body.score;
       obj.comments = req.body.comments;
       obj.comment_url = req.body.comment_url;
       obj.hasImg = req.body.hasImg;
       obj.isLowscore = req.body.isLowscore;
      obj.mtime = new Date();
  //将数据提交至评论数据表
   var sql1 = "INSERT INTO comments SET ?";
   //将订单表中的isComment(是否已评)设置为1(已评)
   var sql2 = "UPDATE orders SET isComment=1 WHERE oid = ?";
   (async function() {
  var result1 = await query(sql1, [obj]);
  var result2 = await query(sql2,[oid]); 
  if (result1.affectedRows > 0 && result2.affectedRows>0) {
     res.send({code: 1, msg: "评论发表成功"});   
 };

  })();
 
   
})
module.exports = router;