import React, { Component } from 'react';
import Breadcrumbs from "./Breadcrumbs";
import MiddleInfo from "./MiddleInfo";
import {
  Link
} from "react-router-dom";

import { connect } from "react-redux";
import {users} from '../actions/users';


class UserTable extends Component {
  constructor(props) {
    super(props);
    if(!props.users.length) {
      props.getusers();
    }
    this.state = {
      filtervalue: '',
      order: false
    }
    this.remove = this.remove.bind(this);
    this.filterbyname = this.filterbyname.bind(this);
    this.filterusers = this.filterusers.bind(this);
    this.orderAsc = this.orderAsc.bind(this);
    this.orderUsers = this.orderUsers.bind(this);
  }
  remove(e) {   
    e.target.parentElement.parentElement.parentElement.remove()
  }

  filterbyname(e) {
    this.setState({filtervalue: e.target.value});
  }

  filterusers(users) {
    return users.filter(user =>{
      return user.name.toLowerCase().includes(this.state.filtervalue.toLowerCase());
    })
  }
  orderAsc (field) {
    if(!this.state.order) {
      this.setState({
        order:{direction: 'asc', field: field}
      })
    } else {
      this.setState({
        order: {
          direction: this.state.order.direction === "asc" && field === this.state.order.field ? 'desc' : 'asc',
          field: field
        }
      })
    }
  }
  orderUsers(users){
    let sortUsers = [];
    if(this.state.order.direction === 'asc') {

     sortUsers = users.sort((a,b)=>{
        return String(a[this.state.order.field]).localeCompare(String(b[this.state.order.field]));
      })
    } else {
      sortUsers = users.sort((a, b) => {
        return String(b[this.state.order.field]).localeCompare(String(a[this.state.order.field]));
      })
    }
    return sortUsers;
  }
  render() {

    
    if(!this.props.users.length) {
      return false;
    }
    let users = !this.state.filtervalue.length ? this.props.users : this.filterusers(this.props.users)
    users = !this.state.order ? users : this.orderUsers(users);
    return (
      <div className="content">
        <Breadcrumbs urlinfo={this.props.location} />
        <MiddleInfo />
        <div className="users">
          <div className="centerontent">
            <div className="userTitle">
              <h2>Users</h2>
              <span className="userline"></span>
              <div className="input">
                <i className="fas fa-search"></i>
                <input type="text" onChange={this.filterbyname} placeholder='Filter table content' />
              </div>
            </div>
            <div className="margin--top margin--bottom">
              <Link to="/adduser" className="button">Add User</Link>
              <Link to="/pagina1/pagina2/pagina3/pagina4/pagina5/pagina6/pagina7/pagina8/pagina9/pagina10" className = "button margin--left" > BreadCrumb Test </Link>
            </div>
            <div className="dataTable-table" style={{ overflowX: 'scroll' }}>
              <table id="usertable" className="display">
                <thead>
                  <tr className="table--title">
                    <th><a onClick={() =>{return this.orderAsc('username')}}> Username</a></th>
                    <th><a onClick={() =>{return this.orderAsc('name')}}> Name</a></th>
                    <th><a onClick={() =>{return this.orderAsc('email')}}> E-mail</a></th>
                    <th>City</th>
                    <th>Ride in Group</th>
                    <th>Day of the week</th>
                    <th>Posts</th>
                    <th>Albums</th>
                    <th>Photos</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, key) => {
                    return (
                      <tr key={key}>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td><a href='mailto: {user.email}'>{user.email}</a></td>
                        <td>
                          <a target="_blank" href={`https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`}>{user.address.city}</a>
                        </td>
                        <td>funtion rideingroup aleatorio</td>
                        <td>functions dayof the week aleaotroiso</td>
                        <td>{user.posts.length}</td>
                        <td>{user.albums.length}</td>
                        <td>{user.photos.length}</td>
                        <td>
                          <a className="trash" onClick={this.remove}>
                            <i className="fas fa-trash"></i>
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispacth) => {
  return {
    getusers: () => {return dispacth(users())}
  }
}

const User = connect(mapStateToProps, mapDispatchToProps)(UserTable)


export {User, UserTable};