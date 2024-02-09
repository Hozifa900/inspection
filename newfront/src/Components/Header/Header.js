import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../../Model/DataContext";
import Mode from "../../Data/Mode";
import { Button, Container, Navbar, Nav, Form } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  const [mode, setMode] = useContext(DataContext);
  const background = {
    backgroundColor: mode.color,
  };
  const DarkMode = () => {
    document.getElementById("custom-switch").checked
      ? setMode(Mode.dark)
      : setMode(Mode.light);
  };
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./assets/logo.png" className="header-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#give">Give List</Nav.Link>
              <Nav.Link href="#wish">Wish List</Nav.Link>
              <Nav.Link href="#donation">Donation</Nav.Link>
              <Nav.Link href="#Docs">Contact Us</Nav.Link>
              <Nav.Link href="#Hatom">Feed-Back</Nav.Link>

              <Nav.Link href="#light">
                <div>
                  <img
                    src="./assets/brightness.png"
                    style={{
                      width: "15px",
                      height: "15px",
                      float: "left",
                      marginTop: "7px",
                    }}
                  />
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    style={{ float: "left" }}
                    onChange={DarkMode}
                  />
                  <img
                    src="./assets/moon.png"
                    style={{
                      width: "15px",
                      height: "15px",
                      float: "left",
                      marginTop: "7px",
                      marginLeft: "-7px",
                    }}
                  />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
