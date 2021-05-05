import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/middlware';
import { useHistory } from 'react-router';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

export const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values: any) => {
    logIn(values, history)(dispatch);
  };

  return (
    <Form
      {...layout}
      name='logIn'
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Form.Item
        label='Login or Email'
        name='loginOrEmail'
        rules={[
          { required: true, message: 'Please input your login or email!' },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          { required: true, message: 'Please input your password!' },
          { pattern: /^[a-z0-9]+$/i, message: 'Invalid Password' },
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
