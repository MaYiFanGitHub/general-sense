import React, { Component } from 'react'
import { Layout } from 'antd'

import './css/admin.less'
import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/Header'

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    return (
      <Layout className="admin">
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header></Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
