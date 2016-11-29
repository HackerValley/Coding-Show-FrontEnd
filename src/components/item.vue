<template>
    <div class='col-xs-6 col-sm-4 col-lg-3'>
      <div class="items">
        <img v-bind:src='imgurl' alt='image file'>
        <slot name='title'></slot>
        <div class="desc">
          <slot name="desc"></slot>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-3"><span class="glyphicon glyphicon-comment"></span> <slot name='num1'></slot></div>
          <div class="col-xs-6 col-sm-3"><span class="glyphicon glyphicon-wrench"></span> <slot name='num2'></slot></div>
          <div class="col-xs-6 col-sm-3"><span class="glyphicon glyphicon-eye-open"></span> <slot name='num3'></slot></div>
          <div class="col-xs-6 col-sm-3"><span class="glyphicon glyphicon-thumbs-up"></span> <slot name='num4'></slot></div>
        </div>
      </div>
    </div>
</template>

<style scope>
</style>

<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    props: {
      imgurl: String
    }
  }
</script>
