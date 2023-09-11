import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "./style.css";
import "element-plus/dist/index.css";
import { createRouter, createWebHashHistory } from "vue-router"; // 修改导入语句
import About from "./pages/About.vue";
import HelloWorld from "./pages/HelloWorld.vue";
import Booking from './pages/Booking.vue';
import Sign from './pages/Sign.vue';
import HotelDetail from './pages/HotelDetail.vue';
import User from './pages/User.vue';
import { createPinia } from "pinia";
import MyBooking from "./pages/MyBooking.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/about", component: About },
  {path:"/booking", component: Booking},
  {path:"/sign", component:Sign},
  {path:"/detail", component:HotelDetail},
  {path:"/user", component:User},
  {path:"/mybooking", component: MyBooking}
];

// 创建路由实例时不需要使用 VueRouter 前缀
const router = createRouter({
  // 使用 createWebHashHistory
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
