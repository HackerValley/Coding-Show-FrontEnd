<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a class="navbar-brand" href="#" v-bind='sitename'>Coding-Show</a></li>
          <link-nav href='/'>开源项目</link-nav>
          <link-nav href='/onlinepj'>运营的项目</link-nav>
          <link-nav href='/user/pro'>专业用户入口</link-nav>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <link-nav href='/user/act/add'>添加项目</link-nav>
          <link-nav href='/user/list/pub'>发布的项目</link-nav>
          <link-nav href='/user/list/dev'>开发的项目</link-nav>
          <link-nav href='/user/act/reg'>注册</link-nav>
          <link-nav href='/user/act/login'>登入</link-nav>
        </ul>
    </div><!-- /.container-fluid -->
  </nav>
</template>
<style>
  .navbar ul{float:left;}
  .navbar ul li{float:left;}
  .navbar ul.navbar-right{float:right;}

</style>
<script>
  import LinkNav from '../components/linkNav.vue'
  export default{
    components: {
      LinkNav
    }
  }
</script>
