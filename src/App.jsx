import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Accueil from './components/Accueil';


function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <hr className='lign' />
      <footer>
        <p className='signature'>Créé par Alpasc</p>
        <p className="year">2020</p>
      </footer>
    </div>
  );
}

export default App;
