import React, { Component } from 'react';
import Breadcrumbs from "./Breadcrumbs";
import MiddleInfo from "./MiddleInfo";
import Loading from "./Loading";
import {
  Link
} from "react-router-dom";

import { connect } from "react-redux";
import {users, removeuser} from '../actions/users';


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
  remove(user) {
    this.props.removeuser(user);
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
  dayoftheweek() {
    const numberDays = Math.floor(Math.random() * 7);
    if (numberDays == 6) {
      return 'Every Day'
    } else if (numberDays == 5) {
      return 'Weekend';
    } else if (numberDays == 0) {
      return 'Mon'
    } else {
      let days = '';
      for (let i = 0; i < numberDays; i++) {
        let day = Math.floor(Math.random() * 5);
        if (day == 0 && days.indexOf('Mon') == -1) {
          days = days.length > 0 ? `${days} Mon` : 'Mon'
        }
        if (day == 1 && days.indexOf('Tue') == -1) {
          days = days.length > 0 ? `${days} Tue` : 'Tue'
        }
        if (day == 2 && days.indexOf('Wed') == -1) {
          days = days.length > 0 ? `${days} Wed` : 'Wed'
        }
        if (day == 3 && days.indexOf('Thu') == -1) {
          days = days.length > 0 ? `${days} Thu` : 'Thu'
        }
        if (day == 4 && days.indexOf('Fri') == -1) {
          days = days.length > 0 ? `${days} Fri` : 'Fri'
        }
      }
      return days;
    }
  }

  rideingroup() {
    const numberDays = Math.floor(Math.random() * 3);
    if (numberDays == 2) {
      return 'Always'
    } else if (numberDays == 1) {
      return 'Sometimes';
    } else if (numberDays == 0) {
      return 'Never'
    }
  }

  render() {

    let users = !this.state.filtervalue.length ? this.props.users : this.filterusers(this.props.users)
    users = !this.state.order ? users : this.orderUsers(users);
    console.log('users', users);

    if(this.props.loading) {
      return (
        <div className="content">
          <Breadcrumbs urlinfo={this.props.location} />
          <MiddleInfo />
          <Loading />
        </div>
      )
    }

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
                <input type="text" onChange={this.filterbyname} placeholder='Filter users by name' />
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
                    <th className="filter"><a onClick={() =>{return this.orderAsc('username')}}> Username</a></th>
                    <th className="filter"><a onClick={() =>{return this.orderAsc('name')}}> Name</a></th>
                    <th className="filter"><a onClick={() =>{return this.orderAsc('email')}}> E-mail</a></th>
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
                  {!users.length && <tr> <td colSpan="9">No user Founded</td> </tr>}
                  {users.length > 0 && users.map((user, key) => {
                    const rideingroup = user.ridegroup ? user.ridegroup : this.rideingroup();
                    const dayoftheweek = user.weekday ? user.weekday : this.rideingroup();
                    const showmaplink = user.address.geo === false ? false : true;
                    return (
                      <tr key={key}>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td><a href='mailto: {user.email}'>{user.email}</a></td>
                        <td>
                          {showmaplink && (user.address.geo.lat || user.address.geo.lng) && <a target="_blank" href={`https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`}>{user.address.city}</a>}
                          {!showmaplink && <a>{user.address.city.length > 0 ? user.address.city:' - '}</a>}
                        </td>
                        <td>{rideingroup}</td>
                        <td>{dayoftheweek}</td>
                        <td>{user.posts.length}</td>
                        <td>{user.albums.length}</td>
                        <td>{user.photos.length}</td>
                        <td>
                          <a className="trash" onClick={() => {return this.remove(user)}}>
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
  return {
    users: state.users,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispacth) => {
  return {
    getusers: () => {return dispacth(users())},
    removeuser: (user) => {
      return dispacth(removeuser(user))
    }
  }
}

const User = connect(mapStateToProps, mapDispatchToProps)(UserTable)


export {User, UserTable};