<template>
    <div class="NewProduct-app">
        <div class="TopHeader">
            <div>
                <span @click="song" data-id="disc"  :class="discClass">新碟</span>
                <span>|</span>
                <span @click="song" data-id="playlist" :class="playlistClass" >新歌</span>
            </div>
            <Song :MoreSong="RightSong"></Song>
        </div>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="disc">
               <DiscPanel></DiscPanel>
            </mt-tab-container-item>
            <mt-tab-container-item id="playlist">
                <NewSongPanel></NewSongPanel>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
// 引入子组件
import Song from "./Song"
import DiscPanel from "./DiscPanel"
import NewSongPanel from "./NewSongPanel"
    export default {
        data(){
            return{
                active:"disc",
                RightSong:"更多新碟",
                discClass:{vali_success:false},
                playlistClass:{vali_success:false}
            }
        },
        // 定义事件函数
        methods:{
            song(e){
                 this.active=e.target.dataset.id;
                if(this.active=="disc"){
                    this.RightSong="更多新碟";
                    this.discClass={vali_success:true},
                    this.playlistClass={vali_success:false}
                }else{
                    this.RightSong="新歌推荐";
                     this.discClass={vali_success:false},
                    this.playlistClass={vali_success:true}
                }
            }
        },
        // 注册
        components:{
            "Song":Song,
            "DiscPanel":DiscPanel,
            "NewSongPanel":NewSongPanel
        }
    }
</script>
<style scoped>
    .TopHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
    
    .NewProduct-app{
        padding: 10px 20px;
    }
    span{
        font-size:15px ;
        color:#666666;
        margin: 0 2px;   
    }
    span:nth-child(2){
        color:#eee;
    }
    .vali_success{
        font-size: 20px;
        font-weight:bold;
        color:#000;
     }
</style>
