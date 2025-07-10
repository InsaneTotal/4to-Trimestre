import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CRUD NodeJs - React - MySQL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{ marginLeft: "auto" }}>
            <Link className="nav-link" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/register">
              Crear
            </Link>
            <Link className="nav-link" to="/list">
              Listar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
