import React from "react";
import "./PageNotFound.css";
import Bye from "../images/404.svg";
import { Link } from "react-router-dom/cjs/react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> ¡Página no encontrada!
      </h3>
      <img src={Bye} alt="404 Page Not Found" />
      <p className="not-found__text">
        {" "}
        No quisiéramos molestarte ¡pero esta página no existe!
      </p>
      <Link className="button button_type_to-main" to="/">
        Prueba la página principal 🫶
      </Link>
    </div>
  );
}

export default PageNotFound;
