<template>
  <div>
    <header-component></header-component>
    <div class="container">
      <div class="row">
        <h2>我发布的项目 </h2>
        <hr>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-lg-3 items" >
          <h4>原型名称</h4>
          <p>原型的介绍</p>

        </div>
      </div>
    </div>
    <other-component></other-component>
  </div>
</template>
<style>
/*Modi.vue*/
    body{
        background-color:#fefef5;
    }
    .item{
      min-height:120px;
      margin-bottom:2em;
      border:thin red solid
    }
</style>
<script>
import axios from 'axios'
import HeaderComponent from '../../components/header.vue'
import OtherComponent from '../../components/other.vue'
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css')

export default{
  beforeMount () {
    // this.request()
  },
  data () {
    return {
      data: {
      },
      test: '---',
      msg: '预留44',
      status: 2323
    }
  },
  computed: {
  },
  components: {
    'other-component': OtherComponent,
    HeaderComponent
  },
  methods: {
    add (event) {
      event.preventDefault()
      this.test = {
        description: this.data.description,
        details: this.data.details,
        imagePath: this.data.imagePath,
        project_link: this.data.project_link,
        project_name: this.data.project_name
      }
      var _this = this
      axios.post('/api/projects', {
        description: this.data.description,
        details: this.data.details,
        imagePath: this.data.imagePath,
        project_link: this.data.project_link,
        project_name: this.data.project_name
      }).then(function (rep) {
        _this.test = rep.data
        // _this.data = rep.data.data
        // _this.msg = rep.data.msg
        // _this.status = rep.data.status
      })
    },
    request (event) {
      if (event) {
        event.preventDefault()
      }
      this.test = 'Requested'
      var _this = this
      axios.post('/api/projects/3', {
        description: this.data.description,
        details: this.data.details,
        imagePath: this.data.imagePath,
        project_link: this.data.project_link,
        project_name: this.data.project_name
      }).then(function (rep) {
        _this.test = rep.data
        // _this.data = rep.data.data
        // _this.msg = rep.data.msg
        // _this.status = rep.data.status
      })
    }
  }
}
</script>
