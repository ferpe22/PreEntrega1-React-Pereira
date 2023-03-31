import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <ItemListContainer saludos={'Bienvenidos'}/>   
      </div>  
  );
}

export default App;
