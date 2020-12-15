---
title: 基本用法
order: 0
---

默认示例

```jsx
import React from 'react';
import { Button } from 'antd';
import HeaderMenu from "../index";

function DetailHeaderMenu(props) {
    return (
        <HeaderMenu title="测试框" {...props}>
            这是一个测试的modal
        </HeaderMenu>
    );
}

class Basic extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    handleModal(){
        this.setState({ visible: Symbol() });
    }

    render(){
        const { visible } = this.state;
        const modalProps = {
            visible,
            onOk: () => console.log('close')
        }
        return (
            <div>
                <Button type="primary" onClick={() => this.handleModal()}>预览顶部菜单</Button>
                <DetailHeaderMenu {...modalProps}/> 
            </div>
        );

    }
}

ReactDOM.render(<Basic />, mountNode);
```