<template>
  <el-container>
    <el-aside style="wdth:200px;margin-top: 20px">
      <switch></switch>
      <Side-menu @indexSelect="listByCategory" ref="sideMenu"></Side-menu>
    </el-aside>
    <el-main>
      <books class="books-area" ref="booksArea"></books>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from "./SideMenu";
import Books from "./books";
export default {
  name: "LibraryIndex",
  components: {Books, SideMenu},


  methods:{
    listByCategory(){
      var _this = this
      var cid = this.$refs.sideMenu.cid
      var url = 'categories/'+ cid + '/books'
      this.$axios.get(url).then(res =>{
        if(res&& res.status ===200){
          console.log('_this.$refs.booksArea',_this.$refs.booksArea)
          _this.$refs.booksArea.books = res.data
        }
      })
    }
  }
}
</script>

<style scoped>
  .books-area{
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>