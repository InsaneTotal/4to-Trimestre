// import { useEffect, useState } from "react";
import logo from "../assets/img/react.svg";
import { Link } from "react-router-dom";

function Form() {
  // const [datos, setDatos] = useState([{}]);
  // useEffect(() => {
  //   fetch("/api/formulario")
  //     .then((res) => res.json())
  //     .then((data) => setDatos(data));
  // }, []);
  return (
    <>
      <main className="mt-5">
        <div className="container">
          <div className="card mx-auto">
            <div className="card-header">
              <img
                className="imgsvg card-img-top mx-auto m-2 rounded-circle"
                src={logo}
                alt="logo"
              />
              <h3 className="text-uppercase text-center p-4">
                CRUD con nodeJs, MySQL y React
              </h3>
            </div>
            <div className="card-body text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                deleniti amet ad vel sit? Corporis perferendis saepe fuga beatae
                quo quas nisi sit ipsum officiis? Maiores corrupti odio sequi
                facere.
              </p>
              <Link to="/register" className="btn btn-primary">
                Crear usuario
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Form;
