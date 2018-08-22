import React, { Component } from 'react';
import logo from '../../assets/img/logo.png'
import {
    Link
} from "react-router-dom";
class Header extends Component {
  render() {

    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Venturus Sport Logo" />
          <span>Venturus Sport</span>
        </div>
        <div className="usermenu">
          <ul>
            <li className="firstli">
              <div className="initials">JB</div>
              <div className="name">
                Json Bourne
              </div>
              <div className="icon">
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="dropdownmenu">
                <ul>
                  <li>
                    <Link to={`/friendlist`}>
                    Friend List</Link>
                  </li>
                  <li>
                    <Link to={`/saveditems`}>
                    Saved Items</Link>
                  </li>
                  <li>
                    <Link to={`/notifications`}>
                    Notifications</Link>
                  </li>
                  <li>
                    <Link to={`/userpreferences`}>
                    User Preferences</Link>
                  </li>
                  <li>
                    <Link to={`/logout`}>
                    Log Out</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;