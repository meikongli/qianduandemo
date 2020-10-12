<template>

<el-container>
          <el-header>
            <el-row>
              <el-col :span="8"><i class="el-icon-share"></i></el-col>
              <el-col :span="8">&nbsp;</el-col>
              <el-col :span="8">
              <div>
              <router-link  to='/'>首页&nbsp;&nbsp;</router-link>
              <router-link  to='/no1'>页面一&nbsp;&nbsp;</router-link>
              <router-link  to='/no2'>页面二&nbsp;&nbsp;</router-link>
              <router-link  to='/no3'>页面三&nbsp;&nbsp;</router-link>
              </div>
              </el-col>
            </el-row>
            <div>
            </div>
          </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
          <el-main>
            <div style="height:750px;">
            <router-view/>
            </div>
        </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</el-container>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  },
  mounted(){
    alert("123");
  }
}
</script>
<style scoped>
/* 设置链接标签不带下划线 */
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
.router-link-exact-active{
  color:rgb(0, 255, 149);
}
  .marginleft > router-link{
      width: 100px;
  }
  .el-header, .el-footer {
    background-color:rgb(60, 179, 60);
    color: #333;
    text-align: center;
    line-height: 60px;
    
  }
  .el-container {
    height: 800px;
  }
  .el-main {
    height: 100%;
    overflow: auto;
    padding: 10px;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
