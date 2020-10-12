<template>
  <div class="hello">
    <h1>第三页面   初始化调用 axios 获取后台数据 进行渲染  点击button按钮进行调用后台数据进行渲染 </h1>
    <el-button  @click.native="getSelect">调用后端</el-button>
  </div>
</template>

<script>
export default {
  name: 'no3',
  data () {
    return {
    }
  },
  //方法
  methods: {
    getSelect(){
      this.axios.post('/user', {
          name: 'name',
          pwd: 'pwd'
        })
        .then(function (response) {
        //成功方法
          console.log(response);
        })
        .catch(function (error) {
        //失败方法
          console.log(error);
        });

    }

  },
  //初始化的时候调用 axios 
  mounted(){
    let  params={};
    params.name1="1"
    params.name2="2"
    params.name3="3"
    this.axios.post('/user', params) .then(function (response) {
      //成功方法
        console.log(response);
      })
      .catch(function (error) {
        //失败方法
        console.log(error);
      });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
