> 想要使用vue + webpack 生成多个页面

## 更新
###1. 多页面的设置，主要在webpack的配置上
js文件和css文件分开加载，可以通过配置chrunks完成  
解释的比较清楚的一篇[文章](http://blog.csdn.net/ychyssss/article/details/52494785)  

参考链接：
- [参考 repo](https://github.com/jarvan4dev/vue-multi-page)
- [webpack 官方文档 多页面优化](https://webpack.github.io/docs/optimization.html#multi-page-app)  
- [multiple-commons-chunks](https://github.com/webpack/webpack/tree/master/examples/multiple-commons-chunks)  
- [multiple-entry-points](https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points)  
-------------------

##1. 多页面的必要性？  
单页面是可以完成所有功能的。  

**参考：**  
- 这个[问题](https://laracasts.com/discuss/channels/vue/vuejs-multi-page-application-code-structure)的第一个答案
  - [vue-starter 前端部分](https://github.com/layer7be/vue-starter)
  - [vue-starter 后端部分](https://github.com/layer7be/vue-starter-laravel-api)

##2. 多页面能够分开渲染js、vue文件，方便按照文档尝试各种方法。  

参考部分第三个链接，是基本的多页面方法，第一个和第二个链接，是将基本的方法自动完成了。  
多页面关键设置步骤：  
  **Step 1.**    
修改webpack.base.conf.js 的 entries 属性  
  **Step 2.**   
修改webpack.dev.conf.js  增加 一个新的 HtmlWebpackPlugin 配置 
且要准确设置chunks属性，如果省略，所有的js都会注入到html文件中。  
  **Step 3.**  
修改webpack.prod.conf.js 同样增加一个HtmlWebpackPlugin配置  

**参考：**  
- [yaoyao1987/vue-cli-multipage](https://github.com/yaoyao1987/vue-cli-multipage)  
- [bluefox1688 对前者进行了改进](https://github.com/bluefox1688/vue-cli-multi-page)  
- [简单的多页面](http://www.itdadao.com/articles/c19a371822p0.html)
