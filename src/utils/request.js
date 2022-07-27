//axios二次封装
import axios from "axios";

const request = axios.create({
  baseURL: "http://liufusong.top:8080",
}); //根据配置项创建axios实例
export default request;
