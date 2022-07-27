<template>
  <div>
    <div>
      <van-search
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        icon="location-o"
        v-for="item in newList"
        :key="item"
      />
    </div>
    <van-dropdown-menu>
      <van-dropdown-item title="区域" ref="item">
        <van-area title="标题" :area-list="areaList" value="110101" />
        <!-- 此处插入内容 -->
        <!-- value后面绑定点击事件 -->
        <div style="padding: 5px 16px">
          <van-button type="danger" block round>
            <van-area
              title="标题"
              :area-list="areaList"
              :columns-placeholder="['请选择', '请选择', '请选择']"
            />
            确认
          </van-button>
        </div>
      </van-dropdown-item>

      <van-dropdown-item title="方式" ref="item">
        <div style="padding: 5px 16px">
          <van-button type="danger" block round> 确认 </van-button>
        </div>
      </van-dropdown-item>

      <van-dropdown-item title="租金" ref="item">
        <div style="padding: 5px 16px">
          <van-button type="danger" block round> 确认 </van-button>
        </div>
      </van-dropdown-item>

      <van-dropdown-item title="筛选" ref="item">
        <div style="padding: 5px 16px">
          <van-button type="danger" block round> 确认 </van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  name: "SearchIndex",
  data() {
    return {
      newList: [],
    };
  },
};
</script>

<style></style>
