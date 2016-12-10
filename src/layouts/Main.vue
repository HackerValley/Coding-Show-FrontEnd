<template>
    <div class="main">
        <header-component/>

        <slot></slot>
        <footer-component/>
    </div>
</template>
<style>
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
 /* position: absolute; */
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  background-color: #f5f5f5;
}
</style>
<script>
    require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')
    import HeaderComponent from '../layouts/header.vue'
    import FooterComponent from '../layouts/footer.vue'

    export default{
      components: {
        HeaderComponent,
        FooterComponent
      }
    }
</script>
