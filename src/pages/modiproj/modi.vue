<template>
  <div>
      <header-component></header-component>
  <div class="container">
    <div class="row">
      <h2>修改项目 <span class="fr"><small><a href="/pages/Project/public">返回列表</a></small></span></h2>
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
              {{ data }}
            </div>
          </div>
          <div class="from-group form-group-lg text-right">
            <div class="well">
              {{ test }}
            </div>
            <hr>
            <button type="submit" class="btn btn-primary btn-lg" v-on:click='add'>新增</button>
            <a class="btn btn-lg btn-info" v-on:click='request'>修改</a>
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
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css')

export default{
  beforeMount () {
    // this.request()
  },
  data () {
    return {
      data: {
        'developer_count': 10,
        'description': '预设1',
        'details': [
          'pre_string1',
          'pre_string2'
        ],
        'project_link': '预设2',
        'imagePath': [
          'pre_string3',
          'pre_string4'
        ],
        'dev_projects': {},
        'project_name': '预设3'
      },
      test: '---',
      msg: '预留44',
      status: 2323
    }
  },
  computed: {
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
