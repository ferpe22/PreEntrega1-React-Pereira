import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
// import { Clima } from './components/Clima/Clima';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './components/Checkout/Checkout';
export const App = () => {
  return (
      <>
        < BrowserRouter>
          <Navbar />
          {/* <Clima /> */}
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path='/product/:id' element={<ItemDetailContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
      </>  
  )
}