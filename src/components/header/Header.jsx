import React, { Component } from 'react'

import './header.less'
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="location">
          当前位置：<span>首页</span>
        </div>
        <div className="user">
          欢迎回来，<span>Admin</span>，
          <a href="#">退出</a>
        </div>
      </div>
    )
  }
}
