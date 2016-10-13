import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';

//TODO:: add tab state active for route

export default class TopHeader extends React.Component {
  render() {
    return (
      <Navbar className="navbar navbar-inverse navbar-static-top" inverse>
        <Navbar.Header>
          <Navbar.Brand >
            <Link to='/' className='navbar-brand'>PS4VR</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem componentClass={Link} href="/news" to="/news">新聞</NavItem>
            <NavItem componentClass={Link} href="/games" to="/games">遊戲</NavItem>
            <NavItem componentClass={Link} href="/videos" to="/videos">影片</NavItem>
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
  }
}