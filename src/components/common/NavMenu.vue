<template>
  <div>
    <el-menu
    :default-active="currentPath"

    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px"
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>

<!--      <a href="#nowhere" style="color: #222;float:right;float: right;padding: 20px;">更多功能</a>-->
      <i class="el-icon-switch-button" @click="logout"></i>
      <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">hello world</span>
      <el-input
        placeholder="快速搜索.."
        prefix-icon="el-icon-search"
        size="medium"
        style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
        v-model="keywords">

      </el-input>

    </el-menu>
  </div>
</template>

<script>
let _this = this;
export default {
  name: "NavMenu",
  data(){
    return{
      navList:[
        {name:'/index',navItem:'首页'},
        {name: '/jotter',navItem: '笔记本'},
        {name:'/library',navItem: '图书馆'},
        {name:'/admin',navItem: '个人中心'}
      ],
      keywords:''
    }
  },
  computed:{
    hoverBackground(){
      return '#ffd04b'
    },
    currentPath(){

      var x = this.$route.path.indexOf('/',1)
      if(x!==-1){
        return this.$route.path.substring(0,x)
      }else{
        return this.$route.path
      }
    }
  },
  methods:{
    logout() {
      this.$axios.get('/logout').then(res =>{
        if(res.data.code === 200){
          _this.$store.commit('logout')
          _this.$router.replace('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .el-icon-switch-button{
    float: right;
    font-size:40px ;
    color: #222;
    padding: 10px;
    cursor: pointer;
    outline: 0;
  }
  span{
    pointer-events: none;
  }
</style>