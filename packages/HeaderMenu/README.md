---
title: HeaderMenu 自定义顶部菜单组件
---

HeaderMenu
## 代码演示

## API

### HeaderMenu 输入
| 参数      | 说明                                     | 类型       | 默认值 |
|----------|------------------------------------------|-----------|-------|
| visible | 原子类型，每次改变值的时候，会显示modal框 | Symbol |  |
| form | 如果配置了form属性,则只有form validate成功后，才会触发关闭modal的处理 | antd form对象 |  |
| ...others | 传递给antd modal的其它属性, 请参考ant.modal属性 | - | - |