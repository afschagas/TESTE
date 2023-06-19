import React from "react";
import { useState } from "react";

import Bookadd from "../component/Bookadd";
import BookList from "../component/BookList";

import NavBarBook from "../component/Navbar/Navbarbook";

function Home() {
  const [livros, SetUpdateLivros] = useState([]);

  const addLivro = (livro) => {
    SetUpdateLivros([...livros, livro]);
  };

  return (
    <div>
      <NavBarBook />
      <Bookadd addLivro={addLivro} />
      <BookList livros={livros} />
    </div>
  );
}

export default Home;
