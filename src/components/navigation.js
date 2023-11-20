import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">Bagus FILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Trending">TRENDING </Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
