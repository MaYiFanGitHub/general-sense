import React, { Component } from 'react'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import { Button } from 'antd'

import Login from './pages/Login/login'
import Admin from './pages/Admin/admin'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Admin} exact></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    )
  }
}
