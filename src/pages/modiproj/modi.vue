<template>
  <div>
      <header-component></header-component>
  <div class="container">
    <div class="row">
      <h2>{{ act }}项目 <span class="fr"><small><a href="/pages/Project/public">返回列表</a></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <form action="" role="form" class="form-horizontal">
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="projName">项目名称</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input class="form-control" v-model='data.project_name' type="text" name="projName" id='projName' placeholder="项目名称">
              <p class="form-control-static text-muted">尽量用简短有代表性的项目名称</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="description">项目概述</label>
            <div class="col-xs-9">
              <input class="form-control" v-model='data.description' type="text" name="description" id='description' placeholder="项目概要">
              <p class="form-control-static text-muted">用一句话形容您的项目</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="details">项目要求</label>
            <div class="col-xs-9 col-md-8">
              <textarea class="form-control" v-model='details_all' rows="7" name="details" id='details' placeholder="项目详情"></textarea>
              <p class="form-control-static text-muted">详细描述您项目的所有要点和要求，逐条写清</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label' for="imgUpload">上传图像</label>
            <div class="col-xs-8 col-sm-7 col-md-5">
              <input class="form-control"  type="file" name="imgUpload" id='imgUpload'>
            </div>
            <div class="col-xs-1">
              <button type="button" class="btn btn-default">上传</button>
            </div>
          </div>
          <div class="row imgpool">
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2">
              <img width="140" height="100" v-for='img in data.imagePath' v-bind:alt='img' src=''>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label ' for="videolink">视频链接</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input class="form-control" v-model='data.project_link' type="text" name="videolink" id='videolink' placeholder="视频链接">
              <p class="form-control-static text-muted">您项目的视频介绍资料</p>
            </div>
          </div>
          <div class="form-group">
            <label class='col-xs-3 col-sm-2 control-label' for="imgUpload">开发文档</label>
            <div class="col-xs-8 col-sm-7 col-md-5">
              <input class="form-control"  type="file" name="docUpload" id='docUpload' placeholder="开发文档">
            </div>
            <div class="col-xs-1">
              <button type="button" class="btn btn-default">上传</button>
            </div>
          </div>
          <div class="row filepool">
            <div class="col-xs-9 col-xs-offset-3 col-sm-10 col-sm-offset-2">
              <img width="64" height="64" alt='假装是一个文件标识' src=''>
            </div>
          </div>
          <div class="from-group form-group-lg text-right">
            <div class="well">
              {{ toast }}
            </div>
            <hr>
            <button type="submit" class="btn btn-danger btn-lg" v-on:click='jump'>跳转</button>
            <a class="btn btn-lg btn-info" v-on:click='request'>{{ act }}</a>
          </div>
        </form>
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
    .fr{float:right}
    div[class$='pool'] {padding:0 0 2em 0;overflow: hidden;}
    div[class$='pool'] img{border:none; border-radius:6px; margin:.6em;float: left;}

    .proj{overflow:hidden}
    .proj div{float:left;margin:10px;border:thin solid red ;width:100px ;height:100px;text-align:center}
</style>
<script>
import axios from 'axios'
import HeaderComponent from '../../components/header.vue'
import OtherComponent from '../../components/other.vue'
// import routes from './route.js'
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css')

export default{
  beforeMount () {
    // this.request()
    var _this = this
    _this.loadinit('init') // 根据hashBang 初始化页面状态
  },
  data () {
    return {
      hashbang: window.location.hash,
      aim: {
        act: '',  // 动作
        id: '',  // 参数
        hashbang: '#!/', // 默认hashbang
        trimhash: false // 默认不更改hash
      },
      data: {
        'developer_count': 10,
        'description': '预设1',
        'details': ['pre_string2'],
        'project_link': '预设2',
        'imagePath': ['pre_string4'],
        'dev_projects': {},
        'project_name': '预设3'
      },
      toast: '---',
      msg: '预留44',
      status: 2323
    }
  },
  props: {
    prop1: String
  },
  computed: {
    testState () {
      return window.location.hash
    },
    act () {
      var actlib = {
        add: '添加',
        modi: '修改'
      }
      return actlib[this.aim.act]
    },
    post_url () {
      var url = '/api/projects'
      // var res = this.valid(window.location.hash.substr(2))
      // url += res['url']
      switch (this.aim.act) {
        case 'modi' :
          url += '/' + this.aim.id
          break
        default :
          // nothing
      }
      return url
    },
    post_data () {
      return {
        description: this.data.description,
        details: this.details_all,
        imagePath: this.data.imagePath,
        project_link: this.data.project_link,
        project_name: this.data.project_name
      }
    },
    details_all: {
      set: function (val) {
        this.data.details = val.split('\n')
      },
      get: function () {
        return this.data.details.join('\n')
      }
    }
  },
  components: {
    'other-component': OtherComponent,
    HeaderComponent
  },
  methods: {
    loadinit (rehash) {
      // 初次打开页面，初始化参数。组件父级传入值不会被改变，只能改变组件内的变量
      // 初始化变量，根据传入的hashbang，初始化行为
      // 如果是添加，则显示空表单
      // 如果是修改，则校验有效hashbang，然后获取属性，如果能获取到，则显示有效修改，否则显示错误提示，并导向新增页面
      if (!rehash || rehash === 'init') {
        rehash = window.location.hash
        var _this = this
        window.addEventListener('hashchange', function () {
          _this.loadinit(window.location.hash)
        })
        console.log('无参数')
      } else {
        console.log('有参数')
      }
      this.aim = this.valid(rehash)
      console.log(rehash)
      // console.log(this.aim)
      if (this.aim.trim) {
        // 需要更改，则执行 setPage
        this.setPage(this.aim.hashbang)
      }
      if (this.aim.act === 'add') {
        // 添加页面，需要清空数据
        this.clearform()
      } else if (this.aim.act === 'modi' && this.aim.id) {
        // 修改页面，需要拉取数据
        this.pull(this.post_url)
      }
      // this.reinit()
    },
    valid (hashbang) {
      var tmp = []
      var result = {}
      tmp = hashbang.substr(2).split('/').filter(function (val) { return val !== '' })
      if (tmp.length === 2 && tmp[0] === 'modi' && /\d/.test(tmp[1])) {
        result = {
          act: 'modi',
          id: tmp[1],
          hashbang: '#!/modi/' + tmp[1],
          trim: true
        }
      } else {
        result = {
          act: 'add',
          id: null,
          hashbang: '#!/add',
          trim: false
        }
        if (hashbang !== '#!/add') result.trim = true
      }
      this.hashbang = result.hashbang
      return result
    },
    setPage (hashbang) {
      this.hashbang = hashbang
      window.history.pushState(
        null,
        hashbang,
        hashbang
      )
    },
    clearform () {
      this.data.description = ''
      this.data.details = []
      this.data.imagePath = ''
      this.data.project_link = ''
      this.data.project_name = ''
    },
    jump (event) {
      event.preventDefault()
      var url = '#!/modi/123'
      var _this = this
      _this.loadinit(url)
      window.history.pushState(
        null,
        _this.hashbang,
        _this.hashbang
      )
    },
    request (event) {
      if (event) {
        event.preventDefault()
      }
      this.put()
    },
    put (url, data) {
      if (!url) url = this.post_url
      if (!data) data = this.post_data
      var _this = this
      axios.post(url, data).then(function (rep) {
        _this.toast = rep.data
      })
    },
    pull (url) {
      // console.log('pull方法内部')
      console.log('hash:' + window.location.hash)
      if (!url) url = this.post_url
      console.log('post_url:' + url)
      var _this = this
      axios.get(url).then(function (rep) {
        _this.toast = rep.data.data
        _this.data = rep.data.data
      })
    }
  }
}
</script>
