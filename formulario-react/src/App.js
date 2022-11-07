import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario';






function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FORMULARIO REACT
        </p>
        
        <Formulario/>
        
      </header>
    </div>
  );
}

export default App;
