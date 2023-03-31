import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h3>Vendemos Todo</h3>
            <div>
                <button>Hogar</button>
                <button>Electro</button>
                <button>Deportes</button>
                <button>Juegos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar