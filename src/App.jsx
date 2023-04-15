import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemList } from './components/ItemList/ItemList';
export const App = () => {
  return (
      <>
        <Navbar />
        <ItemListContainer greeting={"Productos"} />
        <ItemCount ValInicial={5} stock={15} />
        
      </>  
  )
}