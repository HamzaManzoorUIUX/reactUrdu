import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import logo from "../images/logo.png";

export default class TopBar extends Component {
    render() {
        return (
            <div>
                <Container>
                    <img src={logo} height="100" alt="logo"/>
                </Container>
            </div>
        )
    }
}
