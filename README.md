# express-vue-demo

node 端使用 express, 开发环境下 babel 和 nodemon 监听 node 端文件改变自动编译重启，编译至当前 nodejs 版本语法。view 层使用 vue ，多入口应用。页面请求 node 接口开发环境下走代理，生产环境页面文件会打包生成 html 由 node 提供服务直接可访问。