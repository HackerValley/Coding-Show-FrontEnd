# coding-show-frontend

> Coding-Show 前端部分

## 部署策略
设置webpack三个配置文件，完成多页面。  
其中，首页入口单独配置，其他页面通过子目录自动抓取。  
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

## 多页面路由策略
单页面应用，通过路由相互之间传递参数  
多页面，同样通过路由？

## 截图  
npm run dev 截图  
![基本View](./doc/screenshots/baseView.png)  
显示模板文件结构  
![文件结构](./doc/screenshots/fileStuc.png)   
拆分页面部分，创建组建、布局、页面，进行拼接  

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
