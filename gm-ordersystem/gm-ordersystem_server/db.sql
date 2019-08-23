#设置编码
SET NAMES UTF8;
#丢弃数据库
DROP DATABASE IF EXISTS cloud_music;
#创建数据库
CREATE DATABASE cloud_music CHARSET = UTF8;
#进入数据库
USE cloud_music;


#创建首页轮播图
CREATE TABLE index_carousel (
id SMALLINT PRIMARY KEY AUTO_INCREMENT,
cid INT,
img_url VARCHAR(255),
ref VARCHAR(255)
);
#插入数据
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-1.jpg", "#"
);
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-2.jpg", "#"
);
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-3.jpg", "#"
);
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-4.jpg", "#"
);
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-5.jpg", "#"
);
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-6.jpg", "#"
);
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-7.jpg", "#"
);
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-8.jpg", "#"
);
INSERT INTO index_carousel VALUES (
null, 1, "Carousel-1.jpg", "#"
);


#创建产品表
CREATE TABLE product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  fid INT,
  Pimg VARCHAR(255),
  pname VARCHAR(32),
  price DECIMAL(10,2),
  isHot BOOLEAN,
  isRecomend BOOLEAN
);
#插入数据
INSERT INTO product VALUES(
null, 1, "5583547_1528166736.jpg", "小台农芒果新鲜水果 带箱10斤包邮", "66.6", 1, 0
);
INSERT INTO product VALUES(
null, 2, "5583529_1528166720.jpg", "周小帅私房菜麻辣小 龙虾3斤装5钱/只", "98", 1, 0
);
INSERT INTO product VALUES(
null, 4, "5583509_1528166701.jpg", "老杜香酥鸭500g*2烤 鸭整只酱板鸭", "49.6", 1, 0
);
INSERT INTO product VALUES(
null, 1, "5584013_1528167272.png", "珍享脐橙橙子 12个 单果约220g", "59.9", 0, 1
);
INSERT INTO product VALUES(
null, 1, "5584002_1528167256.png", "中科鲜 2.5kg礼盒 时令新鲜水果", "116", 0, 1
);
INSERT INTO product VALUES(
null, 2, "5583996_1528167238.png", "三都港 宁德大黄鱼 700g 2条 袋装", "39.9", 0, 1
);
INSERT INTO product VALUES(
null, 2, "5583978_1528167219.png", "美威 智利三文鱼排 240g/袋 4片装", "¥39.9", 0, 1
);
INSERT INTO product VALUES(
null, 3, "5583965_1528167193.png", "东来顺 羔羊上脑羊 肉片 300g/袋", "45.9", 0, 1
);
INSERT INTO product VALUES(
null, 4, "5583948_1528167175.png", "百年栗园 柴鸡蛋 家 庭装30枚/箱", "51.9", 0, 1
);
INSERT INTO product VALUES(
null, 4, "5583788_1528167008.png", "正大食品 单冻琵琶腿 1000g/袋", "19.9", 0, 1
);
INSERT INTO product VALUES(
null, 2, "5583909_1528167134.png", "大连鲜活鲍鱼 海鲜 水产 500g", "99.9", 0, 1
);
INSERT INTO product VALUES(
null, 1, "5583928_1528167155.png", "老杜香酥鸭500g*2烤 鸭整只酱板鸭威", "45.9", 0, 1
);
#创建分类表
CREATE TABLE catagory(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(255)
);
#插入数据
INSERT INTO catagory VALUES(
null, "羊毛垫子"
);
INSERT INTO catagory VALUES(
null, "羊毛拖鞋"
);
INSERT INTO catagory VALUES(
null, "羊毛公仔"
);
INSERT INTO catagory VALUES(
null, "羊毛抱枕"
);
#创建评论表
CREATE TABLE comments (
   mid SMALLINT PRIMARY KEY AUTO_INCREMENT, 
   uid INT, #标志为某个用户的评论
   mtime Date,
   head_url VARCHAR(255),
   nickName VARCHAR(32),
   score INT,
   comments  VARCHAR(300),
   comment_url VARCHAR(255),
   hasImg BOOLEAN,
   isLowscore BOOLEAN
);
#插入数据
INSERT INTO comments VALUES(
    null, 1, "2019-5-9", "head_url1.jpg", "文文和仙仙的故事", 5, "速度快，味道好，物超所值","p_url1.jpg,p_url2.jpg,p_url3.jpg",1, 0
);
INSERT INTO comments VALUES(
    null, 2, "2019-8-5", "head_url2.jpg", "像极了大神队",4, "有点辣","p_url1.jpg,p_url2.jpg,p_url3.jpg",1, 0
);
INSERT INTO comments VALUES(
    null, 3, "2019-8-6", "head_url3.jpg", "那些年",2, "有点辣，分量太少","",0, 1
);

#创建订单表
CREATE TABLE orders (
  oid INT PRIMARY KEY AUTO_INCREMENT,
  otime DATE,
  orderno VARCHAR(128),
  uid INT,
  pid INT,
  Pimg VARCHAR(255),
  pname VARCHAR(32),
  price DECIMAL(10,2),
  isComment BOOLEAN #是否已经评论，0：未评  1：已评
);
#插入数据  模拟同一个用户买了三个不同的商品
INSERT INTO orders VALUES(
    null,  "2019-8-5", "c524071718756721", 1, 1, "5583547_1528166736.jpg", "小台农芒果新鲜水果 带箱10斤包邮", "66.6", 0
);
INSERT INTO orders VALUES(
    null, "2019-8-7", "BB21787122568574", 1, 2, "5583529_1528166720.jpg", "周小帅私房菜麻辣小 龙虾3斤装5钱/只", "98", 0
);
INSERT INTO orders VALUES(
    null, "2019-8-10", "BA17827442070406",  1, 3, "5583509_1528166701.jpg", "老杜香酥鸭500g*2烤 鸭整只酱板鸭", "49.6", 0
);
#创建购物车表
CREATE TABLE cart (
  gid INT PRIMARY KEY AUTO_INCREMENT,
  gtime DATE,
  uid INT,
  pid INT,
  Pimg VARCHAR(255),
  pname VARCHAR(32),
  price DECIMAL(10,2),
  count VARCHAR(32)
);
#插入数据
INSERT INTO cart VALUES(
    null,  "2019-8-5", 1, 1, "5583547_1528166736.jpg", "小台农芒果新鲜水果 带箱10斤包邮", "66.6", "10"
);
INSERT INTO cart VALUES(
    null, "2019-8-7",  1, 2, "5583529_1528166720.jpg", "周小帅私房菜麻辣小 龙虾3斤装5钱/只", "98", "15"
);
#创建用户表
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(128),
  nickName VARCHAR(128),
  upwd VARCHAR(32),
  email VARCHAR(128),
  phone VARCHAR(32),
  sex BOOLEAN  # 1: 男  0：女
);

#插入数据
INSERT INTO user VALUES(
    null, "tom123", "文文和仙仙的故事", "123", "469775376@qq.com", "12147483647", 0
);
INSERT INTO user VALUES(
    null, "jerry055", "像极了大神", "456", "469775376@qq.com", "12454987540", 1
);

#创建地址表
CREATE TABLE addr(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  uname VARCHAR(32),
  phone VARCHAR(32),
  province VARCHAR(32),
  city VARCHAR(32),
  area VARCHAR(32),
  details VARCHAR(128)
);
#插入数据
INSERT INTO addr VALUES(
    null, 1, "黄先生", "15847563120","广东省", "湛江市", "霞山区","樱桃镇桃花村"
);
INSERT INTO addr VALUES(
    null, 2, "许小姐", "14587564102","湖南省", "长沙市", "长步镇", "十里镇杏花村"
);


