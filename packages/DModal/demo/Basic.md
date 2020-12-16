---
title: 基本用法
order: 0
---

默认示例

```jsx
import React from 'react';
import { Button } from 'antd';
// import { DModal } from 'antd-doddle';
import DModal from "../index";

function DetailModal(props) {
    return (
        <DModal title="测试框" {...props}>
            这是一个测试的modal
        </DModal>
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
                <Button type="primary" onClick={() => this.handleModal()}>普通模态框</Button>
                <DetailModal {...modalProps}/>
            </div>
        );

    }
}

ReactDOM.render(<Basic />, mountNode);
```