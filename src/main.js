import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import axios from "axios"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
Vue.use(ElementUI)
Vue.config.productionTip = false

// 使请求带上凭证信息
axios.defaults.withCredentials = true
const $axios = axios.create({
  baseURL:'http://localhost:8081/api',
  headers:{
    'x-requested-with':'XMLHttpRequest',
    'Authorization':`Bearer ${localStorage.getItem('token')}`
  },
})

// axios.defaults.baseURL='http://localhost:8081/api'


router.beforeEach((to,from,next) =>{
  if (to.meta.requireAuth){
    if(store.state.user.username){
      axios.get('/authentication').then(res =>{
        if(res){
          next()
        }
      })
    }else {
      next({
        path:'login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
})


Vue.prototype.$axios = $axios
Vue.config.productionTip = false
//axios.defaults.withCredentials = true

new Vue({
  el:'#app',
  router,
  store,
  components:{App},
  template:'<App/>',
  render: h => h(App),
}).$mount('#app')
