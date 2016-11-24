<template>
    <div>
        <header-component/>
        <div>演示页面</div>
        <other-component/>
<pre>
  使用axios发送ajax请求
  在Vue模板文件的export default 中增加beforeMount
    ajax请求的过程加入其中
  =========
</pre>
<pre>
  {{ msg }}
</pre>
    </div>
</template>
<style>
    body{
        background-color:#f2f2f5;
    }
</style>
<script>
  import HeaderComponent from '../../components/header.vue'
  import OtherComponent from '../../components/other.vue'
  import axios from 'axios'
  export default {
    beforeMount () {
      var _this = this
      axios.post('/list/single').then(function (req) {
        _this.msg = req.data
      })
    },
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
