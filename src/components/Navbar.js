import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { ReactComponent as ReactIcon} from '../assets/SVG/react.svg';
// import { GithubIcon } from '../assets/SVG/github.svg';

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
            <div className="navLinks">
                <Nav.Link className="justify-content-end" inline key={1} href="https://www.linkedin.com/in/beth-arnold-640170153/" >
                    <img src="/images/icons/linkedIn_blackCircle.png" alt="LinkedIn Link" />
                </Nav.Link>
                <Nav.Link className="justify-content-end" inline key={2} href="https://github.com/BETH-A">
                    {/* <img src={GithubIcon} alt="Github Link"/> */}
                    <img src="/images/icons/github_cat.png" alt="Github Link" />
                </Nav.Link>
            </div>
    </Navbar>
    )
};

export default CustomNavbar;