<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <ul class="nav navbar-nav">
        <li><a class="navbar-brand" href="#" v-bind='sitename'>Coding-Show</a></li>
        <page-nav href='/'>开源项目</page-nav>
        <page-nav href='#'>运营的项目</page-nav>
        <page-nav href='#'>专业用户入口</page-nav>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <page-nav href='/pages/ModiProj.html#!/add'>添加项目</page-nav>
        <page-nav href='#'>发布的项目</page-nav>
        <page-nav href='#'>开发的项目</page-nav>
        <page-nav href='#'>注册</page-nav>
        <page-nav href='#'>登入</page-nav>
      </ul>
    </div><!-- /.container-fluid -->
  </nav>
</template>
<style>
/*Header.vue*/
  .navbar ul{float:left;}
  .navbar ul li{float:left;}
  .navbar ul.navbar-right{float:right;}
</style>
<script>
  import LinkNav from '../components/linkNav.vue'
  import PageNav from '../components/pageNav.vue'
  export default{
    components: {
      LinkNav,
      PageNav
    }
  }
</script>
