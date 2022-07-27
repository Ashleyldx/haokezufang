import request from "@/utils/request.js";
//@ ==>src 根路径应用

//定义接口
export const homeswiperList = (params) => {
  return request({
    url: "/home/swiper",
    params,
  });
};

//homegroupsList
export const homegroupsList = (params) => {
  return request({
    url: "/home/groups",
    params,
  });
};
