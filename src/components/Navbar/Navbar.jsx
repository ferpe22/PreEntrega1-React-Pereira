import { Categorias } from "./Categorias/Categorias";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { SwitchDarkMode } from "./BotonDarkMode/switchDarkMode";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="nav-link navbar-brand" to={""}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/vendemostodo-29717.appspot.com/o/logo.jpg?alt=media&token=be853714-1ac6-4e9c-bcaf-8971a6326a79" alt="vendemos todo" className="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <Categorias />
                </div>
                <SwitchDarkMode />
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="search" placeholder="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit" >
                        Search
                    </button>
                </form>
            </div>
                <CartWidget />
        </nav>
    );
}
