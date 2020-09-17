import React, { Fragment } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../FiHR_logo.png'
import home from '../../home_icon.png'
import settings from '../../settings_icon.png'
import patients from '../../patients_icon.png'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#patients">
      { /* <figure> */ }
      <img src={patients} className="navbar-right"/>
      { /* <figcaption>Patients</figcaption> */ }
      { /* </figure> */ }
    </Nav.Link>
    <NavDropdown title={<img src={settings} className="navbar-right"/>} alignRight id="settings-dropdown">
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="/#">
      { /* <figure> */ }
      <img src={home} className="navbar-right"/>
      { /* <figcaption>Home</figcaption> */ }
      { /* </figure> */ }
    </Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="transparent" variant="light" expand="md">
    <Navbar.Brand href="#" className="navbar-left">
      <img src={logo} className="navbar-left"/>FiHR
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, Dr. {user.fullName}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
