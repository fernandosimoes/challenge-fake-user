import React, { Component } from 'react';
import Breadcrumbs from "./Breadcrumbs";
import Loading from "./Loading";
import {
    Link, Redirect
} from "react-router-dom";

import { connect } from "react-redux";

import {adduser, hidemessage} from '../actions/users';

class FormUser extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.changeFormValue = this.changeFormValue.bind(this);
        this.dayoftheweek = this.dayoftheweek.bind(this);

        this.state = {
            username:'',
            name:'',
            email:'',
            city:'',
            ridegroup:'',
            weekday:[],
            errors: false,
            emailInvalid: false
        }

    }

    submitForm(e) {
        e.preventDefault();

        const validemail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email));
        if (this.state.username.length === 0 || this.state.name.length === 0 || this.state.email.length === 0 || this.state.ridegroup.length === 0 || this.state.weekday.length === 0){
            this.setState({errors: true});
            return false;
        } else {
            this.setState({errors: false});
        }
        if (!validemail) {
            this.setState({emailInvalid: true});
            return false;
        } else {
            this.setState({emailInvalid: false});
        }
        const newUser = {};
        newUser.username = this.state.username
        newUser.name = this.state.name
        newUser.email = this.state.email
        newUser.address = {};
        newUser.address.geo = false;
        newUser.address.city = this.state.city;
        newUser.ridegroup = this.state.ridegroup;
        newUser.weekday = this.state.weekday;
        newUser.posts = []
        newUser.albums = []
        newUser.photos = []

        this.props.adduser(newUser);

    }

    dayoftheweek(e) {
        let daysweek = this.state.weekday;
        if(e.target.checked) {
            daysweek.push(e.target.value);
        } else {
            daysweek = daysweek.filter(day => {
                return day != e.target.value;
            })
        }
        this.setState({weekday: daysweek});
    }

    changeFormValue(e) {
        const field = {};
        field[e.target.name] = e.target.value;
        this.setState(field);
    }
    render() {
        if (this.props.addwithsuccess) {
            setTimeout(() => {
                this.props.hidemessage()
                document.querySelector('.backtousers').click()
            }, 1500);
        }
        return (
            <div>
                <Breadcrumbs urlinfo={ this.props.location } />
                <div className="registration">
                    <div className="centerontent">
                        <div className="registerTitle">
                            <h2>Registration</h2>
                            <span className="registerline"></span>
                        </div>
                        <div className="registerinformation">
                            <div className="info">
                                <h3>Need help?</h3>
                                <div className="icon-details">
                                    <i className="far fa-life-ring"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique iure sint, repellat et.</p>
                                </div>
                            </div>
                            <div className="info">
                                <h3>Why register?</h3>
                                <div className="icon-details">
                                    <i className="fas fa-heartbeat"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique iure sint, repellat et.</p>
                                </div>
                            </div>
                            <div className="info">
                                <h3>What people are saying...</h3>
                                <div className="icon-details">
                                    <i className="far fa-smile"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique iure sint, repellat et.</p>
                                </div>
                            </div>
                        </div>
                        {this.props.addwithsuccess && <div className="successadded">User added with success</div>}
                        <form className="registerform" onSubmit={this.submitForm}>

                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label htmlFor="username">Username</label>

                                        <input type="text" name="username" id="username" className={(this.state.errors && this.state.username.length === 0) ? 'inputerror' : ''} onChange={this.changeFormValue}/>
                                        {this.state.errors && this.state.username.length === 0 && <span className="error">Username is requied</span>}

                                        <div className="hint">
                                            Instructions username
                                    </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" className={(this.state.errors && this.state.name.length === 0) ? 'inputerror' : ''} onChange={this.changeFormValue}/>
                                        {this.state.errors && this.state.username.length === 0 && <span className="error">Name is requied</span>}
                                        <div className="hint">
                                            Instructions name
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">E-mail</label>
                                        <input type="text" id="email" name="email" className={(this.state.errors && this.state.name.length === 0 || this.state.emailInvalid) ? 'inputerror' : ''}  onChange={this.changeFormValue} required={false}/>
                                        {this.state.errors && this.state.email.length === 0 && <span className="error">Email is requied</span>}

                                        {this.state.errors &&this.state.email.length > 0 && this.state.emailInvalid && <span className="error">Invalid E-mail</span>}

                                        <div className="hint">
                                            Instructions email
                                    </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <label htmlFor="city">City
                                        <span>optional</span>
                                        </label>
                                        <input id="city" type="text" name="city" onChange={this.changeFormValue}/>
                                        <div className="hint">
                                            Instructions City
                                    </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="name">Ride in group?</label>
                                        <div className="radios">
                                            <input type="radio" id="always" name="ridegroup" value="Always" onClick={this.changeFormValue}/>
                                            <label htmlFor="always">Always</label>
                                            <input type="radio" id="sometimes" name="ridegroup" value="Sometimes" onClick={this.changeFormValue}/>
                                            <label htmlFor="sometimes">Sometimes</label>
                                            <input type="radio" id="never" name="ridegroup" value="Never" onClick={this.changeFormValue}/>
                                            <label htmlFor="never">Never</label>
                                        </div>
                                        {this.state.errors && this.state.ridegroup.length === 0 && <span className="error">Ride in Group is required.</span>}
                                    </div>
                                    <div className="field">
                                        <label htmlFor="name">Days of the week</label>
                                        <div className="checkboxes">
                                            <input className="" type="checkbox" id="sun" name="weekday" value="Sun" onClick={this.dayoftheweek}/>
                                            <label className="" htmlFor="sun">Sun</label>
                                            <input className="" type="checkbox" id="mon" name="weekday" value="Mon" onClick={this.dayoftheweek}/>
                                            <label className="" htmlFor="mon">Mon</label>
                                            <input className="" type="checkbox" id="tue" name="weekday" value="Tue" onClick={this.dayoftheweek}/>
                                            <label className="" htmlFor="tue">Tue</label>
                                            <input className="" type="checkbox" id="wed" name="weekday" value="Wed" onClick={this.dayoftheweek}/>
                                            <label className="" htmlFor="wed">Wed</label>
                                            <input className="" type="checkbox" id="thu" name="weekday" value="Thu" onClick={this.dayoftheweek}/>
                                            <label className="" htmlFor="thu">Thu</label>
                                            <input className="" type="checkbox" id="fri" name="weekday" value="Fri" onClick={this.dayoftheweek}/>
                                            <label className="" htmlFor="fri">Fri</label>
                                            <input className="" type="checkbox" id="sat" name="weekday" value="Sat" onClick={this.dayoftheweek}/>
                                            <label className="" htmlFor="sat">Sat</label>
                                        </div>
                                        {this.state.errors && this.state.weekday.length === 0 && <span className="error">Week day is required.</span>}
                                    </div>
                                </div>

                            </div>
                            <div className="buttons">
                                <button id="submitButton" type="submit">Save</button>
                                <button id="clearform" type="reset">Discard</button>
                                <Link to="/" className="backtousers" >Back to users</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        addwithsuccess: state.addwithsuccess
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        adduser: (newuser) => {
            return dispacth(adduser(newuser))
        },
        hidemessage: () => {
            return dispacth(hidemessage())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
