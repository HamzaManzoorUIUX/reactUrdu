import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import BtnAction from "./BtnAction";
import logo from "../../../images/logo.png";

export default class AdminBar extends Component {
  renderFunction() {
    const rend = localStorage.getItem("lastname");
    return rend === null ? <Redirect to="/Admin" /> : null;
  }

  render() {
    return (
      <div>
        {this.renderFunction()}
        <div className="bg-dark p-3 mb-2">
          <img src={logo} alt="Logo" className="myLogo" />
        </div>
        <div className="row">
        <div className="offset-md-9 col-md-3 text-right p-5 text-center">
        <BtnAction myNavigater={this.props.nextAction}/>
        </div>
      </div>
      </div>
    );
  }
}
