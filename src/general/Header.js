import './Header.css'
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <Navbar bg="lg" expang="lg">
            <Container>
                <Navbar.Brand as={Link} to="/about">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/join">Join us</Nav.Link>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;