import { useState } from "react";

const AddUsers = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Enviando datos...");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastName, age: Number(age) }),
      });
      console.log("Respuesta recibida: ", response);

      if (!response.ok) {
        throw new Error("Error en el servidor");
      }

      alert("Usuario creado correctamente");
      setName("");
      setLastName("");
      setAge("");
    } catch (error) {
      console.error(error);
      alert("Error al crear usuario");
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
              <h3 className="text-uppercase">Crear nueva persona</h3>
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
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre"
                    autoFocus
                    required
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
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Apellido"
                    required
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
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Edad"
                    required
                  />
                </div>
                <div className="form-group mt-4 d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Crear"}
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

export default AddUsers;
