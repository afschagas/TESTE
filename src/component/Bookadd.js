import React from "react";
import { useState } from "react";

function Bookadd({ addLivro }) {
  const [livro, setLivro] = useState({
    title: "",
    autor: "",
  });

  const [aviso, setAviso] = useState("");

  const handleChange = (event) => {
    setLivro({ ...livro, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLivro(livro);
    setLivro({ title: "", autor: "" });

    setAviso(`O livro foi adicionado na lista! ${aviso}`);
  };

  setTimeout(() => {
    setAviso("");
  }, 1000 * 5);

  return (
    <div className="container p-5">
      <div className="card p-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="author">Titulo:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Digite o titulo do livro"
              value={livro.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="author">Autor:</label>
            <input
              type="text"
              name="autor"
              className="form-control"
              placeholder="Digite o autor do livro"
              value={livro.autor}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary mt-3">
            Adicionar
          </button>
        </form>
        <br />
        <div
          className={
            aviso.startsWith("O livro foi adicionado na lista!")
              ? "alert alert-success"
              : ""
          }
        >
          {aviso}
        </div>
      </div>
    </div>
  );
}

export default Bookadd;
