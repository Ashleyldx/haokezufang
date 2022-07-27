<template>
  <div>
    <form class="hkzf-swipe">
      <van-search show-action placeholder="请输入搜索关键词" />
    </form>
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item.id"
          ><van-image
            width="500"
            height="100"
            :src="'http://liufusong.top:8080' + item.imgSrc"
        /></van-swipe-item>
      </van-swipe>
    </div>

    <!-- 引入本地图标栏 -->
    <div>
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <!-- 加to -->
          <van-image
            to="/layout/search"
            :src="require('../../assets/1.png')"
          />整租
        </van-grid-item>
        <van-grid-item>
          <van-image
            to="/layout/search"
            :src="require('../../assets/2.png')"
          />合租
        </van-grid-item>
        <van-grid-item>
          <van-image
            to="/layout/search"
            :src="require('../../assets/3.png')"
          />地图找房
        </van-grid-item>
        <van-grid-item>
          <!-- 为什么要加to???? -->
          <van-image
            to="/layout/search"
            :src="require('../../assets/4.png')"
          />去出租
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 租房小组列表 -->
    <van-cell-group>
      <van-cell title="租房小组" value="更多" />
      <!-- 加个盒子 -->
      <div class="van-row">
        <van-row gutter="60">
          <van-col
            class="van-col"
            span="10"
            v-for="item in groupList"
            :key="item.id"
          >
            <van-image
              width="50"
              height="50"
              :src="'http://liufusong.top:8080' + item.imgSrc"
            />
            <span>{{ item.title }}{{ item.desc }}</span>
          </van-col>
        </van-row>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { homeswiperListApi, homegroupsListApi } from "@/api";
export default {
  name: "HomeIndex",
  data() {
    return {
      list: [],
      groupList: [],
    };
  },
  mounted() {
    this.homeswiperList();
    this.homegroupsList();
  },
  methods: {
    async homeswiperList() {
      try {
        const res = await homeswiperListApi({
          limit: 3,
        });
        this.list = res.data.body; //body是后端返回的数据
        // console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
    async homegroupsList() {
      try {
        const res = await homegroupsListApi();
        this.groupList = res.data.body;
        console.log(res);
        //body是后端返回的数据
        //之后开始渲染数据
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.hk-swipe {
  position: relative;
}
/* .hkzf-swipe {
  position: absolute;
  z-index: 9999999;

} */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-col span {
  /* display:flex; */
  display: inline-block;
}
.van-row {
  background-color: pink;
  flex-wrap: wrap;
}
</style>
