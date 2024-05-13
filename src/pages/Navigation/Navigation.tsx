import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import './Navigation.css';

const Navigation: React.FC = () => {

    return (
        <>
            <Navbar expand={"lg"} className={"bg-body-tertiary"}>
                <Container>
                    <Navbar.Brand href="/">Hockey App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={"me-auto"}>
                            <Link to="/" className={"nav-link"}>Home</Link>
                            <NavDropdown title={"Teams"} id={"basic-nav-dropdown"}>
                                <Link to="/teams" className={"dropdown-item"}>Teams</Link>
                                <Link to="/teams/add" className={"dropdown-item"}>Add team</Link>
                            </NavDropdown>
                            <NavDropdown title={"Players"} id={"basic-nav-dropdown"}>
                                <Link to="/players" className={"dropdown-item"}>Players</Link>
                                <Link to="/players/add" className={"dropdown-item"}>Add player</Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={"default-page-height my-3"}>
                <Container>
                    <Outlet/>
                </Container>
            </div>
        </>
    )
}

export default Navigation;