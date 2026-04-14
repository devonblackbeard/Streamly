import {
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { useState } from "react";
import { FaPlus, FaSearch, FaUser } from "react-icons/fa";
import AddVideoModal from "./components/AddVideoModal";

const AppNavbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showAddVideoModal, setShowAddVideoModal] = useState(false);

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
          <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
            <Form className="d-flex w-50" onSubmit={handleSearch}>
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
          </div>

          <Nav>
            <Nav.Link
              className="text-white me-2"
              onClick={() => setShowAddVideoModal(true)}
            >
              <FaPlus />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" className="text-white">
              <FaUser />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <AddVideoModal
        show={showAddVideoModal}
        onHide={() => setShowAddVideoModal(false)}
      />
    </Navbar>
  );
};

export default AppNavbar;
