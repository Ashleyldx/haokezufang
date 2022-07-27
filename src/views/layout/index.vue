<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/info" icon="friends-o"
        >咨询</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/my" icon="setting-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
};
</script>

<style></style>
