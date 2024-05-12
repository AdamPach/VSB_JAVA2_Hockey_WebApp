import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

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
                            <Link to="/teams" className={"nav-link"}>Teams</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={"default-page-height"}>
                <Container>
                    <Outlet/>
                </Container>
            </div>
        </>
    )
}

export default Navigation;