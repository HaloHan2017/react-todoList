import React from 'react'
// import './li-style.css'
import {Button, Card, Divider, Space} from 'antd';
import 'antd/dist/antd.css';
import DeleteFilled from "@ant-design/icons/lib/icons/DeleteFilled";

const {Meta} = Card;
const Todo = ({onClick, text, completed, deleteClick}) => (
    <Divider>
        <Space>
            <Card title={text}
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none', width: 500, height: 40
                }} hoverable
                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            </Card>
            <Button type="default" icon={<DeleteFilled />} onClick={deleteClick}>Delete</Button>
        </Space>
    </Divider>
)

export default Todo;