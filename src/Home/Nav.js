import React from 'react'
import { NavLink } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';

 const Nav = () => {
   
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink to="/" className="navbar-brand">News</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact to="/" className="nav-link">Home</NavLink>
          <NavLink to="/sports" className="nav-link">Sports</NavLink>
          <NavLink to="/business" className="nav-link">Business</NavLink>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="More"
            menuVariant="dark"
          >
            <NavDropdown.Item as={NavLink} to="/tech">Tech</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/inter">International</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/health">Health</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Nav;