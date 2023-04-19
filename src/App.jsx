import './App.css';

//Componentes
import { Navbar } from './components/Navbar/Navbar';
// import { ItemCount } from './ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
// import { Clima } from './components/Clima/Clima';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
export const App = () => {
  return (
      <>
        <Navbar />
        {/* <Clima /> */}
        <ItemListContainer greeting={"Productos"} />
        {/* <ItemCount ValInicial={5} stock={15} /> */}
        <ItemDetailContainer />
      </>  
  )
}