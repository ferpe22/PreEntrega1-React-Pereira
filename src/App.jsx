import './App.css';
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from './context/DarkModeContext';

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
          <DarkModeProvider>
            <Navbar />
            {/* <Clima /> */}
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path='/product/:id' element={<ItemDetailContainer/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<h1>404 not found </h1>}/>
            </Routes>
          </DarkModeProvider>
        </BrowserRouter>
      </>  
  )
}