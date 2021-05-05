import React from 'react';
import { Form, Input, Button } from 'antd';
import { registration } from '../../store/middlware';
import { useHistory } from 'react-router';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

export const Registration: React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    registration(values, history);
  };

  return (
    <Form {...layout} name='basic' onFinish={onFinish}>
      <Form.Item
        label='Login'
        name='login'
        rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[
          { required: true, message: 'Please input your email!' },
          {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
            message: 'Invalid Email',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='First Name'
        name='firstName'
        rules={[
          { required: true, message: 'Please input your username!' },
          {
            pattern: /^[a-zа-яіїё]+$/i,
            message: 'Invalid First Name',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Last Name'
        name='lastName'
        rules={[
          {
            pattern: /^[a-zа-яіїё]+$/i,
            message: 'Invalid Last Name',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Phone'
        name='phone'
        rules={[{ pattern: /^(\+380)(\d+){9}$/, message: 'Invalid Phone' }]}>
        <Input placeholder='+380' />
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
