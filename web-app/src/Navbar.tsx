import {
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";

const AppNavbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchValue);
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: "linear-gradient(90deg, #1e40af 0%, #0369a1 100%)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{ fontWeight: 600, fontSize: "1.3rem", color: "#fff" }}
        >
          Streamly
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Form className="d-flex mx-auto w-50" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              <FaSearch />
            </Button>
          </Form>

          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-white">
              <FaUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
