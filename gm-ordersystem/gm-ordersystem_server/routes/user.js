const express = require("express");
const query = require("../query.js");
const router = express.Router();

//查询某位用户是否已经注册过
router.get("/register", (req,res) => {
var uname = req.query.uname;
var sql = "SELECT uid FROM user WHERE uname = ?";
query(sql,[uname]).then(result => {
    if (result.length>0) {
        res.send({code: -1,msg: "该用户名已经被注册"});
    } else {
        res.send({code: 1, msg: "该用户名可用"});
    }
});
});
   
//提交用户数据到用户表
router.post("/addUser", (req,res) => {
var obj = req.body;
var sql = "INSERT INTO user SET ?";
query(sql,[obj]).then( result => {
    if(result.affectedRows > 0) {
      res.send({code: 1, msg: "用户注册成功"});
    }
});
});

//登录接口，查看用户名和密码是否正确
router.get("/login", (req,res) => {
var uname = req.query.uname;
var upwd = req.query.upwd;
var sql = "SELECT uid FROM user WHERE uname = ? AND upwd = ?";
query(sql,[uname,upwd]).then(result => {
    if(result.length > 0) {
     var uid = result[0].uid;
      req.session.uid = uid;
     res.send({code: 1, msg: "登录成功"});
    } else {
     res.send({code: -1, msg: "用户名或密码错误"});
    }
});
});

//退出登录接口
router.get("/login_out", (req, res) => {
    req.session.uid = "";
    res.send({code: 1, msg: "退出成功"});
});

module.exports = router;