import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavbarSteezy() {
 const years = [2022, 2023, 2024, 2025];

return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-lg py-2">
      <Container>
        <Navbar.Brand className="fw-bold text-white">Steezy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            {years.map((year) => (
              <Nav.Link
                as={NavLink}
                key={year}
                to={`/${year}`}
                className={({ isActive }) =>
                  `text-light fw-semibold mx-2 ${isActive ? "border-bottom border-light" : ""}`
                }
              >
                {year}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}