import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditUsers = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/list/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAge(data.age), setName(data.name), setLastName(data.last_name);
      })
      .catch((err) => {
        console.error("Error al obtener el usuario", err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "lastName") setLastName(value);
    else if (name === "age") setAge(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Enviando datos...");
    try {
      const response = await fetch(`/api/list/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastName, age: Number(age) }),
      });
      console.log("Respuesta recibida: ", response);

      if (!response.ok) {
        throw new Error("Error en el servidor");
      }

      alert("Usuario modificado correctamente");
      setName("");
      setLastName("");
      setAge("");
    } catch (error) {
      console.error(error);
      alert("Error al modificar el usuario");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center">
            <div className="card-header">
              <h3 className="text-uppercase">Editar persona</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group mt-2">
                  <label htmlFor="name" className="input-group-text">
                    Nombre
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Nombre"
                  />
                </div>
                <div className="input-group mt-2">
                  <label htmlFor="lastName" className="input-group-text">
                    Apellido
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Apellido"
                  />
                </div>
                <div className="input-group mt-2">
                  <label htmlFor="age" className="input-group-text">
                    Edad
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="age"
                    id="age"
                    value={age}
                    onChange={handleChange}
                    placeholder="Edad"
                  />
                </div>
                <div className="form-group mt-4 d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Editar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUsers;
