import React from 'react';
import {Navbar, Button, Col} from 'react-bootstrap';
import './Header.css';
import profile from "../../assets/profile.png";

function Header({ toggleSidebar, isSidebarOpen, activePage }) {
    return (
        <div className={isSidebarOpen ? "shifted" : ""}>
            <Navbar className="header" expand="lg">
                <Button className="custom-button" variant="primary" onClick={toggleSidebar} >
                    ☰
                </Button>
                <Navbar.Collapse className="justify-content-end">
                    <Col md={2}>
                        <Navbar.Text className="login-name">A.B.C.D.Samarasinghe</Navbar.Text>
                    </Col>
                    <img
                        src={profile}
                        alt="Profile"
                        className="profile-pic"
                    />

                </Navbar.Collapse>
            </Navbar>

            <div className="header-spacing"></div>

            <div className="active-pg">
                <h5>{activePage}</h5>
            </div>
        </div>
    );
}


export default Header;