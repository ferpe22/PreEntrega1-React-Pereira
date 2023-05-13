import './App.css';

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from './context/DarkModeContext';

//Componentes
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './components/Checkout/Checkout';
import { createProductsDB, getProductsDB } from './firebase/firebase';
import { Cart } from './components/Cart/Cart';


export const App = () => {
  //createProductsDB()
  getProductsDB()
  return (
      <>
        < BrowserRouter>
          <DarkModeProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path='/product/:id' element={<ItemDetailContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={<h1>404 not found </h1>}/>
            </Routes>
          </DarkModeProvider>
        </BrowserRouter>
      </>  
  )
}