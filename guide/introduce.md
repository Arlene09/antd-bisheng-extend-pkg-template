---
title: 介绍
order: 0
---

### React组件库包开发模板 (antd、bisheng)

- 一个用于npm包项目开发的干净模板。拿来即可直接用于开发及npm发布，干净、无个人特色插件。<br/>
- 可用于开发高频次自定义业务组件(已集成antd)，和一些常用方法库的封装，支持按需打包。<br/>
- 已经包含了一个对antd组件的扩展/二次封装的示例，可实现本地组件开发预览、调试。<br/>
- 使用了antd的文档系统bisheng自动生成文档。




## 安装

`antd-bisheng-extend-pkg-template`是一个多包的项目，组件与方法分离。

安装包
```sh
npm install antd-bisheng-extend-pkg-template --save
```

## 使用  

使用包中的组件  
```javascript
import { DModal } from 'antd-bisheng-extend-pkg-template';
```

使用包中的方法 
```javascript
import { isEmpty } from 'antd-bisheng-extend-pkg-template/utils';
```

## 源码地址

`antd-bisheng-extend-pkg-template`https://github.com/Arlene09/antd-bisheng-extend-pkg-template


## 开发与发布

启动服务 
```javascript
npm run start
```

生成文档文件
```javascript
npm run site
```

发布到npm上
```javascript
npm run propub
npm publish
```

