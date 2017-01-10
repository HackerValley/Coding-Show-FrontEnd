<template>
  <div>
    <header-component></header-component>
    <div class="container">
      <div class="row">
        <h2>我发布的项目 </h2>
        <hr>
      </div>
      <div class="row">
        <ProjItem :imgurl="item.pid" v-for='item in content.data'>
          <h4 slot='title'>{{ item.project_name }}</h4>
          <p slot='desc'>由<{{ item.uid }}>于{{ item.create_time }} 发布</p>
          <span slot='num1'>{{ item.star_count }}</span>
          <span slot='num2'>234</span>
          <span slot='num3'>34</span>
          <span slot='num4'>4567</span>
        </ProjItem>
      </div>
      <div class="row">
        <hr><nav class="text-center">
          <ul class="pagination pagination-lg">
            <li class="previous disabled"><a href="#">&larr; </a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li class="next"><a href="#">&rarr;</a></li>            
          </ul>
      </div>
      <a v-on:click='request'>拉取</a>
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

/* 列表组件，图标数值 */
.items ul,items ul li{list-style:none;margin:0;padding:0}
.items{overflow:hidden;box-sizing:border-box;
    background:rgba(0,0,0,.05);
    padding:.6em;
    margin:.6em 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.3);
    border-radius:4px;
}
.items img{display:block;width:100%;margin: 0 auto;min-height:100px;background:skyblue}
items h4,.items .desc{font-size:1.1em;
    letter-spacing: .06em;
    position:relative;
    white-space: nowrap;
    height:1.4em;
    margin-bottom:10px
}
items h4,.items .desc p{
    cursor:pointer;
    text-overflow: ellipsis;
    overflow: hidden;margin-bottom:0;
    width:100%;
    box-sizing:border-box;
    }
.items .desc p:hover{
    padding:.3em;
    background: white;
    box-shadow:0 0 2px 0 rgba(0,0,0,.2);
    overflow:visible;
    white-space: normal;
    position:absolute;
    letter-spacing: 0;
    bottom:0;
    z-index:9
    }
.items .col-xs-6 {padding:0 .7em}
.items ul{overflow:hidden;list-style:none}
.items ul li{float:left;width:25%;white-space:pre;font-size:1em;color:#555}
.items ul li span:first-child{font-size:.8em}
.items ul li span:first-child::after{content: ' ';font-size:.8em;display: inline-block;width: .5em}
</style>
<script>
import axios from 'axios'
import HeaderComponent from '../../components/header.vue'
import OtherComponent from '../../components/other.vue'
import ProjItem from '../../components/item.vue'
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
    HeaderComponent,
    ProjItem
  },
  methods: {
    pull (url) {
      var _this = this
      if (!url) url = this.post_url
      if (!url) url = '/api2/projects/list'
      axios.get(url).then(function (rep) {
        // _this.content.data.splice(0)
        // console.log(rep.data.data)
        // _this.content.data.splice(0)
        for (let item in rep.data.data) {
          _this.content.data.push(item)
        }
        // _this.content.data.(rep.data.data)
        // _this.raw = rep.data
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
