import React, { useState} from "react";
import {useDispatch} from 'react-redux';
import * as actions from "../actions/todo";
import { Drawer, Form, Button, Col, Row, Input, Select,DatePicker,notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

const ModalPage = ({ ...props }) => {
  const dispatch=useDispatch();
    const [visible, setvisible] = useState(false);
    const showDrawer = () => {
        setvisible(true)
    };
    const onClose = () => {
        setvisible(false)
        
    };
    const onOk=(value)=> {
      console.log('onOk: ', value);
    }
    
    
    const onSubmit=(values)=>
    {
      const args = {
        message: 'Create Notification ',
        description:
            'Successfully Created',
        duration: 0,
    };
    const onSuccess = () => {
        notification.open(args);
    }
      const { description,  date} = values
        const create={"date":moment(date).format('MMMM Do YYYY, h:mm a'),"description":description,"status":"undone"}
        dispatch(actions.create(create, onSuccess));
    }
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                <PlusOutlined />
            </Button>
            <Drawer
                title="Add new Task"
                width={300}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                
            >
                <Form layout="vertical" hideRequiredMark onFinish={onSubmit}>
                    <Row gutter={16}>
                        <Col span={12}>
                        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="date"
                                label="Date and Time"
                                rules={[{ required: true}]}
                            >
                                <DatePicker showTime onOk={onOk}  />
                            </Form.Item>
                        </Col>
                    </Row>
                    
                        
                    
                    <Row gutter={48}>
                        <Col span={24}>
                    <Form.Item >
                                <Button type="primary" htmlType="submit" style={{ marginRight: 2 }} >
                                    Save 
                                </Button>
                                <Button onClick={onClose} style={{ marginRight: 2 }}>
                                    Cancel
                                </Button>
                    </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
         );
}




export default ModalPage;