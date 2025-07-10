import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [personas, setPersonas] = useState([]);
  useEffect(() => {
    fetch("/api/list")
      .then((res) => res.json())
      .then((data) => setPersonas(data));
  }, []);
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      const response = await fetch(`/api/list/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar usuario");
      // Actualiza la lista localmente sin recargar
      setPersonas(personas.filter((persona) => persona.id !== id));
      alert("Usuario eliminado correctamente");
    } catch (error) {
      alert("No se pudo eliminar el usuario");
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <h3 className="text-center text-uppercase P-2">LISTA DE PERSONAS</h3>
        {personas.length > 0 ? (
          <table className="table text-center">
            <thead>
              <tr className="table-dark">
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Edad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {personas.map((persona) => (
                <tr key={persona.id}>
                  <td>{persona.name}</td>
                  <td>{persona.last_name}</td>
                  <td>{persona.age}</td>
                  <td>
                    <div className="btn-group">
                      <Link
                        to={`/edit/${persona.id}`}
                        className="btn btn-warning
                        p-2"
                      >
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        className="btn btn-danger p-a"
                        onClick={() => handleDelete(persona.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="table-dark">
                <td colSpan={"4"}>Registro Personas</td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <div className="card text-center mx-auto">
            <div className="card-header">
              <h3>Debes crear una persona</h3>
            </div>
            <div className="card-body">
              <p>Registrar persona</p>
              <Link to="/register" className="btn btn-primary">
                Crear Persona
              </Link>
            </div>
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default List;
