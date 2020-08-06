import React from 'react'
import {Button, Card, Divider, Space} from 'antd';
import 'antd/dist/antd.css';
import DeleteFilled from "@ant-design/icons/lib/icons/DeleteFilled";

const Todo = ({onClick, content, status, deleteClick}) => ({
    render(){
        return (
            <Divider>
                <Space>
                    <Card title={content}
                          onClick={onClick}
                          style={{
                              textDecoration: status ? 'line-through' : 'none', width: 500, height: 40
                          }} hoverable
                    >
                    </Card>
                    <Button type="default" icon={<DeleteFilled />} onClick={deleteClick}>Delete</Button>
                </Space>
            </Divider>
        )
    }
})

export default Todo;