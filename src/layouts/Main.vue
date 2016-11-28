<template>
    <div class="main">
        <header-component/>
        <div>this is template body</div>
        <slot></slot>
        <footer-component/>
    </div>
</template>
<style>
/*Main.vue*/
    body{
        background-color:#ffffff;
    }
    /*底栏固定*/
    html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  background-color: #f5f5f5;
}
</style>
<script>
    require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')
    import HeaderComponent from '../components/header.vue'
    import FooterComponent from '../components/other.vue'

    export default{
      components: {
        HeaderComponent,
        FooterComponent
      }
    }
</script>
