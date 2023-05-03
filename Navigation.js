import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container,Button} from "react-bootstrap"
import "./Nav.css"
function Navigation(){
    return (
        <Navbar bg="danger" expand="lg" variant="dark">
      <Container>
        <h1 className="text">Online Voting </h1>
          <Nav className="me-auto">
            <Button variant="light"className="user" >User</Button>
            <Button variant="light">Admin</Button>
          </Nav>
      </Container>
    </Navbar>
    )
}

export default Navigation