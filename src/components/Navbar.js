import React from "react";
import ReactBootstrap, { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar(){
    return (
        <Navbar default collapseOnSelect expand={'sm' | 'md' | 'lg' | 'xl'}>
            <Navbar.Brand >
                {/* <Link to="/">Beth Arnold</Link> */}
                Beth Arnold
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} to="/">
                        Portfolio
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} to="/about">
                        About Me
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} to="/contact">
                        Contact Me
                    </NavItem>
                </Nav>
                
            </Navbar.Collapse>
            <div>
                <Nav.Link key={1} href="https://www.linkedin.com/in/beth-arnold-640170153/" >
                    <img src="/images/icons/linkedIn_blackCircle.png" alt="LinkedIn Link" />
                </Nav.Link>
                <Nav.Link key={2} href="https://github.com/BETH-A">
                    <img src="/images/icons/github_cat.png" alt="Github Link" />
                </Nav.Link>
            </div>
            
        {/* <a href=target="_blank" className="img-link">
            
        </a> 
         <a  target="_blank" className="img-link">
            
        </a> */}
    </Navbar>
    )
};

export default CustomNavbar;