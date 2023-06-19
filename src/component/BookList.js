import React, { useState } from "react";

export default function BookList({ livros }) {
  const [aviso, setAviso] = useState("");

  function deleteItem(index) {
    livros.splice(index, 1);

    setAviso(`O livro foi removido da lista! ${aviso}`);
  }

  setTimeout(() => {
    setAviso("");
  }, 1000 * 5);

  return (
    <div className="container p-5">
      <div className="car">
        <table className="table">
          <thead className="table-dark text-center">
            <tr>
              <th>Título</th>
              <th>Autor</th>
            </tr>
          </thead>
          {livros.map((livro, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td>{livro.title}</td>
                <td>{livro.autor}</td>
                <td>
                  <div role="toolbar" className="btn-toolbar pull-right">
                    <div role="group" className="btn-group">
                      <button
                        type="button"
                        alt="Delete record"
                        className="btn btn-danger pull-right"
                        onClick={() => deleteItem(index)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <div
          className={
            aviso.startsWith("O livro foi removido da lista!")
              ? "alert alert-danger"
              : ""
          }
        >
          {aviso}
        </div>
      </div>
    </div>
  );
}
