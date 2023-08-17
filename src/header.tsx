import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyHeader = () => {

    return (
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/"></Link></Nav.Link>
                        <Nav.Link><Link to="/movie/id"></Link></Nav.Link>
                    </Nav>
    );

}
export default MyHeader;