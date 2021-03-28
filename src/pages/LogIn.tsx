import React from 'react';
import { Form, Input, Button } from 'antd';

const Login = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ width: '480px', margin: '0 auto', padding: '16px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to Hiden no Tare</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
