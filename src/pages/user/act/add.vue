<template>
  <main-layout>
    <div class="main container">
      <div class="row">
        <div class="main-header col-12">
          <h1>添加项目</h1>
          <h2 class="fr"><a href='/user/list/pub'>返回到项目列表</a></h2>
        </div>
      </div>
      <div class="row" id='stage'>
        {{ talk }}
      </div>
    </div>
  </main-layout>
</template>
<style>
  .main-header{overflow:hidden;border-bottom:thick solid darkgray}
  .main-header h1{float:left}
  .main-header .fr{float:right}
</style>
<script>
  import MainLayout from '../../../layouts/Main.vue'

  export default {
    data: {
      talk: '随意说一些内容'
    },
    components: {
      MainLayout
    }
  }
</script>
