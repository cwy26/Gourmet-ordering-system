const express = require("express");
const query = require("../query.js");
const router = express.Router();


router.get("/", (req,res) => {
  var isHot = req.query.isHot;
  var isRecomend = req.query.isRecomend;
  var output = {
    hot: [],
    recomend: []
  };
  var sql1="SELECT pid, Pimg,pname,price FROM product WHERE isHot = ?";
  var sql2="SELECT pid, Pimg,pname,price FROM product WHERE isRecomend = ?";
  (async function(){
    var result = await Promise.all( [query(sql1,[isHot]), query(sql2,[isRecomend]) ]);
    output.hot = result[0];
    output.recomend = result[1];
    res.send({code:1, msg:"数据获取成功", data:output});
  } )();
});

//根据传过来的pid获取商品的信息
router.get("/getItem", (req,res) => {
var pid = req.query.pid;
var sql = "SELECT Pimg FROM product WHERE pid = ?";
query(sql,[pid]).then( result => {
    res.send({code: 1, msg: "数据获取成功", data:result});
});
});

module.exports = router;