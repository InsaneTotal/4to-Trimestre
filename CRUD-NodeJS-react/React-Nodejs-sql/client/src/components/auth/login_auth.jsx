// import logoAuth from "../../assets/img/logo-auth.svg";
const LoginUser = () => {
  const handleAuth = async (e) => {
    e.preventDefault();
    console.log("Probando Boton");
  };
  return (
    <div className="container p-2">
      <div className="row  mr-2">
        <div className="col-md-4 mx-auto">
          <div className="card text-center" style={{ width: "25rem" }}>
            <div
              className="card text-center bg-info bg-gradient fs-1 fw-bolder"
              style={{ width: "25rem" }}
            >
              Bienvenido
            </div>
            <div className="card-header">
              <h3 className="text-uppercase">Registrar nuevo usuario</h3>
            </div>
            <div className="card-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10rem"
                height="10rem"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <form onSubmit={handleAuth}>
                <div className="input-group">
                  <label htmlFor="username" className="input-group-text">
                    Usuario
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="Usuario"
                    autoFocus
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password" className="input-group-text">
                    Contraseña
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="Contraseña"
                    autoFocus
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="input-group-text">
                    Correo
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    autoFocus
                    required
                  />
                </div>
                <div className="form-group mt-4 d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-success"
                    // disabled={isLoading}
                  >
                    Registrarse
                  </button>
                </div>
              </form>
              <a href="#">¿Tienes una cuenta? Iniciar sesión</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
