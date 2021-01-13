import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";
import Login from "./Login";

const NavBar = (): JSX.Element => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/rocket.svg"
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{" "}
        RocketMeet
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/dashboard" passHref>
            <Nav.Link>Dashboard</Nav.Link>
          </Link>
        </Nav>
        <Nav className="justify-content-end">
          <Login />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
