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
          <div class="well">
            {{ raw }}
          </div>
          <a v-on:click='request'>拉取</a>
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
      content: {
        'data': [
          {
            'create_time': '测试4d',
            'pid': '测试o2h',
            'project_name': '测试2hb',
            'star_count': 3565,
            'uid': '测试内yqe'
          },
          {
            'create_time': '测4d',
            'pid': '测试oh',
            'project_name': '测试hb',
            'star_count': 355,
            'uid': '测yqe'
          }
        ],
        'msg': '测试wrs',
        'page_num': 3643,
        'page_size': 6177,
        'page_total': 2704,
        'projects_total': 8746,
        'status': 4138
      },
      raw: '---',
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
    pull (url) {
      var _this = this
      if (!url) url = this.post_url
      if (!url) url = '/api2/projects/list'
      axios.get(url).then(function (rep) {
        _this.conent = rep.data
        _this.raw = rep.data
      })
    },
    request (event) {
      if (event) {
        event.preventDefault()
      }
      this.pull()
    }
  }
}
</script>
