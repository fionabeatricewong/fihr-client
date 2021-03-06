import React, { Fragment } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../FiHR_logo.png'
import home from '../../home_icon.png'
import settings from '../../settings_icon.png'
import patients from '../../patients_icon.png'
import unauth from '../../unauth_actions.png'
// import appts from '../../appts_icon.png'
// import messages from '../../messages_icon.png'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#patients">
      { /* <figure> */ }
      <img src={patients} className="navbar-right"/>
      { /* <figcaption>Patients</figcaption> */ }
      { /* </figure> */ }
    </Nav.Link>
    { /* <Nav.Link>
      <img src={appts} className="navbar-right"/>
    </Nav.Link>
    <Nav.Link>
      <img src={messages} className="navbar-right"/>
    </Nav.Link> */ }
    <NavDropdown drop='left' title={<img src={settings} className="navbar-right"/>} id="settings-dropdown dropdown-button-drop-left">
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#sign-out">Log Out</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavDropdown drop='left' title={<img src={unauth} className="navbar-right"/>} id="auth-dropdown dropdown-button-drop-left">
      <NavDropdown.Item className="navbar-unauth" href="#sign-up">Register</NavDropdown.Item>
      <NavDropdown.Item className="navbar-unauth" href="#sign-in">Log In</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="/fihr-client/#">
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
