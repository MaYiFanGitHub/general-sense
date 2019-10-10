import React, { Component } from 'react'
import { Button, Form, Input, message } from 'antd'

import logo from '../../assets/images/logo.png'
import './login.less'

const { Item } = Form

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, { username, password }) => {
      if (!err) {
        if (username === 'admin' && password === 'admin') {
          message.success('登录成功')
          this.props.history.replace('/')
        }
      }
    })
  }
  render() {

    const getFieldDecorator = this.props.form.getFieldDecorator

    return (
      <div className="login">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="login-main">

          <h1>用户登录</h1>
          <Form onSubmit={this.handleSubmit}>
            <Item >
              {
                getFieldDecorator('username', {
                  rules: [
                    { required: true, message: '请输入用户名', whitespace: true },
                    { min: 4, message: '用户名长度大于4位' },
                    { max: 12, message: '用户名长度小于12位' },
                  ]
                })(
                  <Input placeholder="用户名" size="large" />
                )
              }
            </Item>
            <Item >
              {
                getFieldDecorator('password', {
                  rules: [
                    { required: true, message: '请输入密码' },
                    { min: 4, message: '密码长度大于4位' },
                    { max: 12, message: '密码长度小于12位' },
                  ]
                })(
                  <Input type="password" placeholder="密码" size="large" />
                )
              }
            </Item>
            <Item>
              <Button
                type='primary'
                size="large"
                style={{ width: '100%' }}
                htmlType="submit"
              >
                登录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)