<template>
  <div>
    <!-- 订位列表 -->
    <div class="reservation">
      <!-- 左边一级菜单(人数) -->
      <div>
        <ul class="menu-wrapper">
          <!-- current -->
          <li
            class="menu-item"
            v-for="(table,index) in Table"
            :key="index"
            :class="{current: index == currentIndex}"
            @click="clickList(index)"
            ref="menuList"
          >
            <span>{{table.capacity}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边二级菜单(桌子详情) -->
      <div class="reservation-wrapper">
        <ul ref="itemList">
          <li class="table-li" v-for="(table,index1) in Table" :key="index1">
            <!-- 右边二级菜单列表项的标题 -->
            <div class="table-title">
              <h4>{{table.capacity}}</h4>
              <a href="javascript:;">查看更多</a>
            </div>
            <!-- 右边二级菜单列表项的内容 -->
            <ul class="table-type">
              <li v-for="(Tname,index) of table.category" :key="index">{{Tname.picture}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scrollY: 0, //右侧列表滑动的y轴坐标
      rightLiTops: [], //所有分类头部位置
      Table: [
         {
          capacity: "八仙过海",
          tag: "eight",
          category: {
            ChinaType: { picture: "暂时没有中国图片" },
            FranceType: { picture: "暂时没有法国图片" },
            BritainType: { picture: "暂时没有英国图片" },
            AmericaType: { picture: "暂时没有美国图片" }
          }
          //   items: {title1: "中国",title2: "法国",title3: "英国",title4: "中国"}
        },
         {
          capacity: "六合时邕",
          tag: "six",
          category: {
            ChinaType: { picture: "暂时没有中国图片" },
            FranceType: { picture: "暂时没有法国图片" },
            BritainType: { picture: "暂时没有英国图片" },
            AmericaType: { picture: "暂时没有美国图片" }
          }
        },
         {
          capacity: "五子登科",
          tag: "five",
          category: {
            ChinaType: { picture: "暂时没有中国图片" },
            FranceType: { picture: "暂时没有法国图片" },
            BritainType: { picture: "暂时没有英国图片" },
            AmericaType: { picture: "暂时没有美国图片" }
          }
        },
         {
          capacity: "扬名四海",
          tag: "four",
          category: {
            ChinaType: { picture: "暂时没有中国图片" },
            FranceType: { picture: "暂时没有法国图片" },
            BritainType: { picture: "暂时没有英国图片" },
            AmericaType: { picture: "暂时没有美国图片" }
          }
        },
        {
          capacity: "二人世界",
          tag: "second",
          category: {
            ChinaType: { picture: "暂时没有中国图片" },
            FranceType: { picture: "暂时没有法国图片" },
            BritainType: { picture: "暂时没有英国图片" },
            AmericaType: { picture: "暂时没有美国图片" }
          }
        },
         {
          capacity: "孤芳自赏",
          tag: "first",
          category: {
            ChinaType: { picture: "暂时没有中国图片" },
            FranceType: { picture: "暂时没有法国图片" },
            BritainType: { picture: "暂时没有英国图片" },
            AmericaType: { picture: "暂时没有美国图片" }
          }
        }
      ]
    };
  },
  computed: {
    //   动态绑定class名
    currentIndex(index) {
      const { scrollY, rightLiTops } = this;
      return rightLiTops.findIndex((tops, index) => {
        this._initLeftScroll(index);
        return scrollY >= tops && scrollY < rightLiTops[index + 1];
      });
    }
  },
  mounted() {
    this.scroll = new BScroll(".menu-wrapper", {
      click: true //scroll: true 是默认开启的
    });
    this.rightBscroll = new BScroll(".reservation-wrapper", {
      probeType: 3, //在滚动中触发scroll事件
      scrollbar: {//添加滚动条显示
        fade: true,
        interactive: false // 1.8.0 新增
      },
      pullDownRefresh: {
        //下拉刷新
        threshold: 50,
        stop: 20
      }
    });
  },
  methods: {
    _initBScroll() {
      //左边滚动
      this.leftBscroll = new BScroll(".menu-wrapper", {
        click: true
      });
      //右边滚动
      this.rightBscroll = new BScroll(".reservation-wrapper", {
        probeType: 3 //在滚动中触发scroll事件
      });
      //   监听右边滚动事件
      this.rightBscroll.on("scroll", pos => {
        this.scrollY = Math.abs(pos.y);
      });
    },
    _initRightHeight() {
      //   求出右边列表的高度
      let itemArray = []; //定义一个伪数组
      let top = 0;//窗口顶端
      itemArray.push(top);
      //获得右边标题所有li的集合
      let lis = this.$refs.itemList.getElementsByClassName("table-li");
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.offsetHeight; //获取所有li的每一个高度
        itemArray.push(top);
      });
      this.rightLiTops = itemArray;
    },
    // 点击左边实现滚动
    clickList(index) {
      this.scrollY = this.rightLiTops[index];
      this.rightBscroll.scrollTo(0, -this.scrollY, 200);
    },
    //左右联动
    _initLeftScroll(index) {
      let menu = this.$refs.menuList;
      let el = menu[index];
      this.leftBscroll.scrollToElement(el, 200, 0, 0);
    }
  },
  created() {
    this.$nextTick(() => {
      //左右两边滚动
      this._initBScroll();
      //右边列表高度
      this._initRightHeight();
    });
  }
};
</script>
<style scoped>
/* 清除ul标签的左外边距 */
ul {
  list-style: none;
  padding: 0;
}
/* 预约订位座位列表的框架 */
.reservation {
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 50px;
  width: 100%;
  height: 636px;
  overflow: hidden;
}
/* 一级菜单的样式 */
.menu-wrapper {
  background-color: #e0e0e0;
  width: 80px;
  flex: 0 0 80px;
}
/* 一级菜单的列表项样式 */
.menu-item {
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #666;
  position: relative;
}
/* 被选中的一级菜单列表项的样式 */
.current {
  color: var(--red);
  background: #fff;
}
/* 被选中的一级菜单列表项的导航条样式 */
.current::before {
  content: "";
  background-color: var(--red);
  width: 4px;
  height: 30px;
  position: absolute;
  left: 0;
}
/* 二级菜单的样式 */
.reservation-wrapper {
  flex: 1;
  background: #fff;
}
/* 二级菜单的标题样式 */
.table-title {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  color: #999;
}
.table-title a {
  text-decoration: none;
  color: #9c9c9c;
  font-size: 14px;
}
.table-type {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
}
.table-type li {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}
.table-items {
  display: flex;
  flex-wrap: wrap;
}
.table-items li {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;
}
</style>
