import React, { Component } from "react";
// import * as ReactBootStrap from "react-bootstrap";
import {  Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class NavBar extends Component {
  render() {
      const Brand="اردو کارنر"
    return (
      <div className="App sticky-top">
        <Navbar bg="dark"  variant="dark" expand="lg">
    <Navbar.Brand href="#home">{Brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
          
              <Link className="nav-link" to="/">گھر</Link>
              <Link className="nav-link" to="/about">ہمارے بارے میں</Link>
              <Link className="nav-link" to="/dictionary">لغت</Link>
              <Link className="nav-link" to="/poetry">شاعری</Link>
              <Link className="nav-link" to="/books">کتابیں</Link>
              <Link className="nav-link" to="/rasalay">رسالے</Link>
              <Link className="nav-link" to="/dayyou">اج کا دن</Link>
              <Link className="nav-link" to="/news">خبریں</Link>
              <Link className="nav-link" to="/intresting">دلچسپ خبریں</Link>
              <Link className="nav-link" to="/Admin">ایڈمن</Link>
             
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
