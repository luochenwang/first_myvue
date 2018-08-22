import Vue from 'vue'
import App from './App'
// Use Vuex
import store from './store/index'
import post from './utils/asyncRequest'

Vue.config.productionTip = false;
Vue.prototype.store = store;
Vue.prototype.$post = post;

// 配置 后端统一的请求路径
Vue.prototype.$server = 'http://abc.defghijk.lmn/opqrst/'


App.mpType = 'app'

const app = new Vue(App)
app.$mount()
