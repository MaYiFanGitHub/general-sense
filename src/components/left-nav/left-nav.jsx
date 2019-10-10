import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';

import './left-nav.less'
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig'

const { SubMenu, Item } = Menu;

export default class LeftNav extends Component {

  // 生成导航菜单
  getMenuListNode = (menuList) => {
    return menuList.map(menu => {
      if (!menu.children) { // 一级菜单
        return (
          <Menu.Item key={menu.key}>
            <Icon type="pie-chart" />
            <span>{menu.title}</span>
          </Menu.Item>
        )
      } else { // 有二级菜单
        return (
          <SubMenu
            key={menu.key}
            title={
              <span>
                <Icon type="mail" />
                <span>{menu.title}</span>
              </span>
            }
          >
            {this.getMenuListNode(menu.children)}
          </SubMenu>
        )
      }
    })
  }
  render() {
    return (
      <div className="left-nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-list">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            {this.getMenuListNode(menuList)}
          </Menu>
        </div>
      </div>
    )
  }
}
