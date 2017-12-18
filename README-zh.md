# 反洗钱项目-VUE实现

[1. 本框架相关文档及工具](http://192.168.1.100:3000)
[2. ElementUI文档](http://192.168.1.100:8085)


## Extra·
如果你想要根据用户角色来动态生成侧边栏和router，你可以使用该分支[permission-control](https://github.com/PanJiaChen/vueAdmin-template/tree/permission-control)
 
 ## 相关项目
 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

配套教程，如何从零构建后一个完整的后台项目:
 - [系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
 - [系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
 - [系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
 - [系列四(vueAdmin 一个极简的后台基础模板,专门针对本项目的文章,算作是一篇文档)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
 - [封装一个vue component](https://segmentfault.com/a/1190000009090836)


## Build Setup

``` bash

# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## MOCK
[mock数据](https://easy-mock.com)

## 目录结构
```
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局 filter
│   ├── icons                  // 项目所有 svg icons
│   ├── lang                   // 国际化 language
│   ├── mock                   // 项目mock 模拟数据
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── views                   // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json
```

## 样式目录结构

```
├── styles
│   ├── btn.scss                 # 按钮样式
│   ├── element-ui.scss          # 全局自定义 element-ui 样式
│   ├── index.scss               # 全局通用样式
│   ├── mixin.scss               # 全局mixin
│   ├── transition.scss          # vue transition 动画
│   └── variables.scss           # 全局变量
```

**工作流程是，全局样式都写在 src/styles 目录下，每个页面自己对应的样式都写在自己的 .vue 文件之中**

## 自定义 element-ui 样式
**由于element-ui的样式我们是在全局引入的，所以你想在某个页面里面覆盖它的样式就不能加 scoped，但你又想只覆盖这个页面的element样式，你就可在它的父级加一个class，用命名空间来解决问题。**
```
.aritle-page{ /* 你的命名空间 */
  .el-tag { /* element-ui 元素*/
    margin-right: 0px;
  }
}
```


