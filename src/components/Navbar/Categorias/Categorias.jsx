import React from "react";
export const Categorias = () => {

    return (
        
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <a className="nav-link active" href="#">Hogar
                <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Indumentaria</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Deportes</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Tecnologia</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Ordenar</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
            </li>
        </ul>
    );
}

