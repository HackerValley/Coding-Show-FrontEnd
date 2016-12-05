# coding-show-frontend

> Coding-Show 前端部分

## 部署策略
设置webpack三个配置文件，完成多页面。  
其中，首页入口单独配置，其他页面通过子目录自动抓取。    
每个页面通过路由实现相近的功能，如：  
- 添加项目、修改项目 ： modiProj.html
- 开源项目、发布的项目、开发的项目： listProj.html  
- ...

**示例** ：  
```
首页  入口文件(main.js)位于src目录
      html模板(index.html) 位于根目录  
      vue模板(通过路由自动配置)
添加页面  ./pages/addProj/AddProj.js(入口文件)
          ./pages/addProj/AddProj.html(html模板)
          ./pages/addProj/add.vue(vue模板)
修改页面  ./pages/modiProj/ModiProj.js
          ...
          ...
``` 

## 已处理细节列表  
- webpack 根据目录结构打包多页面
- proxyTable 设置
- 通过 hashbang 选择页面功能
- axios 发送http请求

## 待解决问题  

已引入bootstrap.min.css, 引入bootstrap.min.js 出错！

## 编译安装

``` bash
# 安装依赖
npm install

# 启动服务在 localhost:8080
npm run dev

# build for production with minification
npm run build

```
