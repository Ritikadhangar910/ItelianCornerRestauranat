import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { json, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function MyNavbar({ cardItems }) {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            href="#home"
            className="Ecomm"
            style={{ color: "rebeccapurple" }}
          >
            E-commercial
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user ? (
                <>
                  <Nav.Link>
                    <NavLink to="/" className={"navlinks myhome"}>
                      Home
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to={"/cart"} className={"navlinks"}>
                      <i
                        className="fa fa-shopping-cart fa-2x"
                        aria-hidden="true"
                      ></i>
                      <span className="cart-length">
                        {cardItems.length === 0 ? "" : cardItems.length}
                      </span>
                    </NavLink>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <NavLink to="/signup" className={"navlinks"}>
                      Sing Up
                    </NavLink>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </>
  );
}

export default MyNavbar;
