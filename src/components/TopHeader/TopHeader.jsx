import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';
const TopHeader = ({
}) => (
  <Navbar className="navbar navbar-inverse navbar-static-top" inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">PS4VR</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem componentClass={Link} href="/news" to="/news">新聞</NavItem>
        <NavItem eventKey={2} href="#">遊戲</NavItem>
        <NavItem eventKey={3} href="#">影片</NavItem>
      </Nav>

      <Nav pullRight>
        <NavDropdown eventKey={1} title="Language" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>English</MenuItem>
          <MenuItem eventKey={3.2}>繁體中文</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopHeader;

// <NavItem eventKey={1} href="#/news">新聞</NavItem>