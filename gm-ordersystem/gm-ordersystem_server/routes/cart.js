const express = require("express");
const query = require("../query.js");
const router = express.Router();

//查询某位用户的购物车列表
router.get("/", (req,res) => {
  var uid = req.session.uid;
  if(!uid) {
   res.send({code: -1, msg: "请先登录"});
   return;
  }
  var sql = "SELECT gtime, pid, Pimg, pname, price,count FROM cart WHERE uid =? ORDER BY gid DESC";
  query(sql, [uid]).then( result => {
      res.send({code: 1, msg: "数据获取成功", data: result});
  });
})

//加入购物车
router.post("/addCart", (req,res) => {
    var uid = req.session.uid;
    if(!uid) {
     res.send({code: -1, msg: "请先登录"});
     return;
    }
    var obj = req.body;
    obj.gtime = new Date();
    obj.uid = uid;
    console.log(obj);
    console.log(111);
    var sql = "INSERT INTO cart SET ?";
    query(sql,[obj]).then(result => {
      res.send({code: 1, msg: "购物车加入成功"});
    });
});

//删除购物车中的商品
router.get("/del", (req,res) => {
var uid = req.session.uid;
if(!uid) {
  res.send({code: -1, msg: "请先登录"});
  return;
 }
 //获得要删除的商品ids
 var pids = req.query.pids;
 console.log(pids);
 var sql = `DELETE FROM cart WHERE pid in (${pids})`;
 query(sql,[pids]).then( result => {
   if(result.affectedRows> 0) {
    res.send({code: 1, msg: "宝贝删除成功"});
   }
 });


});
module.exports = router;