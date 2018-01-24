import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import page1 from './components/page1';

// ini fungsi lain
// export default function() {
class RouteHeader extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
      		<div className="container-fluid position-relative no-side-padding">
      			<a href="" className="logo">
              {/* <img/> */}
            </a>
            <div className="menu-nav-icon" data-nav-menu="#main-menu"><i className="ion-navicon"></i></div>
            <ul className="main-menu visible-on-click" id="main-menu">
              <li><NavLink to="/page1" activeStyle={{ fontWeight: 'bold' }}>Page 1</NavLink></li>
              <li><NavLink to="/page2" activeStyle={{ fontWeight: 'bold' }}>Page 2</NavLink></li>
              <li><NavLink to="/page3" activeStyle={{ fontWeight: 'bold' }}>Page 3</NavLink></li>
            </ul>
            <Switch>
              <Route exact path="/page1" component={page1}/>
            </Switch>
            <div className="src-area">
              <form>
                <button className="src-btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                <input className="src-input" type="text" placeholder="Type of search"/>
              </form>
            </div>
          </div>
        </header>
      </BrowserRouter>
    )
  }
}

export default RouteHeader