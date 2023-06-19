import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../img/logo.png";

function NavBarBook() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Desenho de um livro"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Lista de Livros
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBarBook;
