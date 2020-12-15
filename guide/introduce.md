---
title: 介绍
order: 0
---

包含高频次自定义业务组件，和一些常用方法库的封装，支持按需打包。

## 安装

z-react-pkg是一个多包的项目，组件与方法分离。

安装包
```sh
npm install z-react-pkg --save
```

## 使用  

使用包中的组件  
```javascript
import { HeaderMenu } from 'z-react-pkg';
```

使用包中的方法 
```javascript
import { isEmpty } from 'z-react-pkg/utils';
```




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

