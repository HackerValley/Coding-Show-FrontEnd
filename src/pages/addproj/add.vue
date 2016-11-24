<template>
<div>
  <header-component/>
  <h1>添加项目</h1>
  <other-component/>
</div>
</template>
<style>
/*add.vue*/
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import HeaderComponent from '../../components/header.vue'
    import OtherComponent from '../../components/other.vue'
    export default{
      data () {
        return {
          msg: 'hello vue'
        }
      },
      components: {
        'other-component': OtherComponent,
        HeaderComponent
      }
    }
</script>
