<template>
    <div class="container">
        <search-box @querySuggest="querySuggest" @hotHide="hotHide_handel" @hotShow="hotShow_handel" @canquery="canqueryhandeler" @noquery="noqueryhandeler"></search-box>
        <div class="history">
        <search-history :history_list="history_list"></search-history>
        </div>
        <div class="hot" v-show="hotShow">
            <hot-search :hot_list="hot_list" @noquery="noqueryhandeler"></hot-search>
        </div>
        <div>
        <suggest :suggest_list="suggest_list" v-show = "!hotShow"></suggest>
        </div>
        <div class="recomendlist">
        <search-recomendlist :recomend_list="recomend_list"></search-recomendlist>
        </div>        
    </div>
</template>
<script>
import searchBox from "./common/searchBox.vue";
import hotSearch from "./common/hotSearch.vue";
import suggest from "./common/suggest.vue";
import searchRecomendlist from "./common/search_recomendlist.vue";
import searchHistory from "./common/search_history.vue";
import {jsonp} from "../jsonp.js";
import base from "../base.js"; 
export default {
data() {
    return {
    hot_list: [],  //热搜词列表
    suggest_list: [],  //推荐词列表
    recomend_list: [], //热搜榜列表
    hotShow: true,  //热门搜索词是否显示，默认为显示
    canquery: false,  //是否发起推荐词搜索，默认不发起
    history_list: []
    }
},
created() {
    this.loadData();
    this.getHistory();
},
components: {
    searchBox,hotSearch,suggest,searchRecomendlist,searchHistory
},
methods: {
    //将参数对象拼接成查询字符串
    _o2s(obj) {
        var str = "?";
        for (var key in obj){
            str += `${key}=${obj[key]}&`;
        };
        str = str.slice(0,str.length-1);
        return str;
    },
    //遍历从服务器端获取的数据并更改data数据
    _changeData(data,key,target) {
        for (var i=0; i < data.length; i++) {
            //判断key的数据类型
            if(typeof key == "string") {
               target.push(data[i][key]);
            }
            //如果key为数组
            if(Object.prototype.toString.call(key) === "[object Array]") {
              var obj = {};
              for (var value of key) {
                obj[value] = data[i][value];
              }
              target.push(obj);
            }

        }
    },
    loadData() {
        //热门搜索接口
        var hot_url = "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg";
        //热搜榜接口
        var recomend_url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
        var hot_obj = Object.assign({},base,{uin: 0,platform: "h5"});
        var recomend_obj = Object.assign({},base,{
            g_tk: 70107596,
            uin: 0,
            platform: "h5",
            _: 1512548815061
        });
        hot_url += this._o2s(hot_obj);
        recomend_url += this._o2s(recomend_obj);
       //保存一份vue实例
        var that = this;
        (async function() {
           var result = await Promise.all([jsonp(hot_url),jsonp(recomend_url)]);
           //获取热门搜索接口数据
           var hot_list = result[0].data.hotkey;
           //截取前六条数据
            hot_list = hot_list.slice(0,6);
           var recomend_list = result[1].data.songList;
           that._changeData(hot_list,"k",that.hot_list);
           that._changeData(recomend_list, ["songListDesc","songListAuthor"], that.recomend_list);
          // console.log(that.recomend_list);
        })()
    },
    querySuggest(keyword){
        //当canquery为true时才发起推荐词搜索
        if(this.canquery) {
        //查询之前先隐藏热门搜索内容
         this.hotShow = false;
         //搜索推荐接口
        var suggest_url = "https://c.y.qq.com/soso/fcgi-bin/client_search_cp";
        //拼接搜索推荐接口查询字符串 
          var suggest_obj = Object.assign({},base,{
            p: 1,
            n : 20,
            w : keyword,
            loginUin: 0,
            hostUin: 0,
            platform: "yqq",
            needNewCode: 0,
            remoteplace: "txt.yqq.song",
            t: 0,
            aggr: 1,
            cr: 1,
            carZhida: 1,
            flflag_qc:0
        })  
      suggest_url += this._o2s(suggest_obj);    
      jsonp(suggest_url).then(result => {
          var arr = result.data.song.list;
          this.suggest_list = [];
          this.suggest_list.push(`搜索 "${suggest_obj.w}"`);
          for(var i = 0; i < arr.length; i++){
            this.suggest_list.push(`${suggest_obj.w} ${arr[i].albumname}`);
          } 
      });
        }
    },
    //隐藏热门搜索词
    hotHide_handel() {
        this.hotShow = false;
    },
    //显示热门搜索词
    hotShow_handel() {
        this.hotShow = true;
    },
    //允许发起推荐词搜索
   canqueryhandeler() {
        this.canquery = true;
    },
    //禁止推荐词搜索
    noqueryhandeler() {
       this.canquery = false; 
    },
    getHistory() {
        var history_arr = JSON.parse(localStorage.getItem("history"));
        if(history_arr) {
        var length = history_arr.length;
       // 截取后六个值
       var last = history_arr.slice(length-6,length);
       //倒转位置
       last = last.reverse();
       this.history_list = this.history_list.concat(last);
        };

        
    }
}
}
</script>
<style scoped>
.container {
    margin-top: 10px;
    padding-bottom: 80px;
}
.hot{
    margin-top: 15px;
}
.recomendlist{
    margin-top: 100px;
}
.history{
    margin-top: 15px;
}
</style>
