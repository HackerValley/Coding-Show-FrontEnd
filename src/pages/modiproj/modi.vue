<template>
    <div>
        <header-component/>
        <div>this is template body</div>
        <other-component/>
    </div>
</template>
<style>
/*Modi.vue*/
    body{
        background-color:#ffff00 !important;
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
