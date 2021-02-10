import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import './assets/scss/icon/iconfont.css'
// import { Form,FormItem,Input } from 'element-ui'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/element-variables.scss'
import BaiduMap from 'vue-baidu-map'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

//接口拦截
axios.interceptors.response.use((response)=>{
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data;
  } else if(res.status == 10) {  //10:未登录
    if(path != '/#/index'){
      window.location.href = '/#/login';
    }
    //to-do
    //Message.warning(res.msg);
    return Promise.reject(res);
  } else {  //业务出错
    alert(res.msg);
    //to-do
    //Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{  //接口调用出错
  let res = error.response;
  alert(res);
  //to-do
  //Message.error(res.data.message);
  return Promise.reject(error);
});

Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: 'fulcll9uqB7PAgcgewAWxKYnGkp3iXOj'
})
// Vue.component(Form.name, Form);
// Vue.component(FormItem.name, FormItem);
// Vue.component(Input.name, Input);
Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
