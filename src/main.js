import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//引入vant
import {
  Search,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  Image as VanImage,
  Cell,
  CellGroup,
  Col,
  Row,
  Swipe,
  SwipeItem,
  DropdownMenu,
  DropdownItem,
  Icon,
  Area,
} from "vant";

Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);
Vue.use(Area);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
